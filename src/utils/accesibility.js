// src/utils/accessibility.js - Complete accessibility utilities

/**
 * Announces a message to screen readers using a live region
 * @param {string} message - The message to announce
 * @param {string} priority - 'polite' or 'assertive' (default: 'polite')
 * @param {number} timeout - How long to keep the announcement (default: 1000ms)
 */
export const announceToScreenReader = (message, priority = 'polite', timeout = 1000) => {
  // Create a temporary element for the announcement
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.setAttribute('class', 'sr-only')
  announcement.textContent = message
  
  // Add to DOM
  document.body.appendChild(announcement)
  
  // Remove after timeout
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement)
    }
  }, timeout)
}

/**
 * Traps focus within a specific element (useful for modals, dropdowns)
 * @param {HTMLElement} element - The container element to trap focus within
 * @returns {Function} Cleanup function to remove event listeners
 */
export const trapFocus = (element) => {
  if (!element) {
    console.warn('trapFocus: No element provided')
    return () => {}
  }

  // Get all focusable elements within the container
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
  )
  
  const focusableArray = Array.from(focusableElements)
  const firstElement = focusableArray[0]
  const lastElement = focusableArray[focusableArray.length - 1]
  
  // Handle tab key navigation
  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab (backwards)
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab (forwards)
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }
    
    // Handle escape key
    if (e.key === 'Escape') {
      element.dispatchEvent(new CustomEvent('close', { bubbles: true }))
    }
  }
  
  // Add event listener
  element.addEventListener('keydown', handleTabKey)
  
  // Focus the first element
  if (firstElement) {
    firstElement.focus()
  }
  
  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

/**
 * Generates a unique ID for accessibility purposes
 * @param {string} prefix - Prefix for the ID (default: 'id')
 * @returns {string} Unique ID
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`
}

/**
 * Manages focus when navigating between pages or sections
 * @param {HTMLElement|string} target - Element or selector to focus
 * @param {boolean} preventScroll - Whether to prevent scrolling (default: false)
 */
export const manageFocus = (target, preventScroll = false) => {
  let element

  if (typeof target === 'string') {
    element = document.querySelector(target)
  } else {
    element = target
  }

  if (element) {
    // Make element focusable if it's not already
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '-1')
    }
    
    element.focus({ preventScroll })
    
    // Remove tabindex after focus for cleaner DOM
    setTimeout(() => {
      if (element.getAttribute('tabindex') === '-1') {
        element.removeAttribute('tabindex')
      }
    }, 100)
  }
}

/**
 * Checks if the user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Creates a debounced function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Handles keyboard navigation for custom components
 * @param {KeyboardEvent} event - The keyboard event
 * @param {Object} handlers - Object with key handlers
 */
export const handleKeyboardNavigation = (event, handlers = {}) => {
  const { key } = event
  
  const defaultHandlers = {
    'Enter': () => event.target.click?.(),
    'Space': () => {
      event.preventDefault()
      event.target.click?.()
    },
    'Escape': () => {
      event.target.blur?.()
    }
  }
  
  const allHandlers = { ...defaultHandlers, ...handlers }
  
  if (allHandlers[key]) {
    allHandlers[key](event)
  }
}

/**
 * Adds screen reader only text to an element
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text for screen readers
 */
export const addScreenReaderText = (element, text) => {
  if (!element) return
  
  const srElement = document.createElement('span')
  srElement.className = 'sr-only'
  srElement.textContent = text
  element.appendChild(srElement)
}

/**
 * Validates color contrast ratio
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @returns {Object} Contrast ratio and WCAG compliance info
 */
export const checkColorContrast = (foreground, background) => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  
  // Calculate relative luminance
  const getLuminance = (rgb) => {
    const { r, g, b } = rgb
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }
  
  const fgRgb = hexToRgb(foreground)
  const bgRgb = hexToRgb(background)
  
  if (!fgRgb || !bgRgb) {
    return { error: 'Invalid color format' }
  }
  
  const fgLuminance = getLuminance(fgRgb)
  const bgLuminance = getLuminance(bgRgb)
  
  const ratio = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                (Math.min(fgLuminance, bgLuminance) + 0.05)
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    AA: ratio >= 4.5,
    AAA: ratio >= 7,
    AALarge: ratio >= 3, // For large text (18pt+ or 14pt+ bold)
    AAALarge: ratio >= 4.5
  }
}

/**
 * Creates a roving tabindex for components like menus or toolbars
 * @param {HTMLElement} container - Container element
 * @param {string} itemSelector - Selector for focusable items
 * @param {Object} options - Configuration options
 */
export const createRovingTabindex = (container, itemSelector, options = {}) => {
  const {
    orientation = 'horizontal', // 'horizontal' or 'vertical'
    wrap = true, // Whether to wrap around at ends
    activateOnFocus = false // Whether to activate items on focus
  } = options
  
  const items = container.querySelectorAll(itemSelector)
  let currentIndex = 0
  
  // Initialize - set first item as tabbable
  items.forEach((item, index) => {
    item.setAttribute('tabindex', index === 0 ? '0' : '-1')
  })
  
  const setFocus = (index) => {
    if (items[index]) {
      currentIndex = index
      items.forEach((item, i) => {
        item.setAttribute('tabindex', i === index ? '0' : '-1')
      })
      items[index].focus()
      
      if (activateOnFocus) {
        items[index].click()
      }
    }
  }
  
  const handleKeydown = (e) => {
    let newIndex = currentIndex
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        if (orientation === 'horizontal' && e.key === 'ArrowDown') break
        if (orientation === 'vertical' && e.key === 'ArrowRight') break
        
        e.preventDefault()
        newIndex = currentIndex + 1
        if (newIndex >= items.length) {
          newIndex = wrap ? 0 : currentIndex
        }
        setFocus(newIndex)
        break
        
      case 'ArrowLeft':
      case 'ArrowUp':
        if (orientation === 'horizontal' && e.key === 'ArrowUp') break
        if (orientation === 'vertical' && e.key === 'ArrowLeft') break
        
        e.preventDefault()
        newIndex = currentIndex - 1
        if (newIndex < 0) {
          newIndex = wrap ? items.length - 1 : currentIndex
        }
        setFocus(newIndex)
        break
        
      case 'Home':
        e.preventDefault()
        setFocus(0)
        break
        
      case 'End':
        e.preventDefault()
        setFocus(items.length - 1)
        break
    }
  }
  
  container.addEventListener('keydown', handleKeydown)
  
  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeydown)
  }
}

/**
 * Monitors and announces route changes for single-page applications
 * @param {Function} callback - Optional callback when route changes
 */
export const announceRouteChange = (callback) => {
  let currentPath = window.location.pathname
  
  const checkForRouteChange = () => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname
      
      // Get page title or main heading
      const pageTitle = document.title || 
                       document.querySelector('h1')?.textContent || 
                       'Page changed'
      
      announceToScreenReader(`Navigated to ${pageTitle}`, 'assertive')
      
      // Focus management for SPA navigation
      const mainContent = document.querySelector('#main-content, main, [role="main"]')
      if (mainContent) {
        manageFocus(mainContent)
      }
      
      if (callback) {
        callback(currentPath)
      }
    }
  }
  
  // Listen for popstate (back/forward buttons)
  window.addEventListener('popstate', checkForRouteChange)
  
  // For SPA frameworks, also check periodically
  const intervalId = setInterval(checkForRouteChange, 100)
  
  // Return cleanup function
  return () => {
    window.removeEventListener('popstate', checkForRouteChange)
    clearInterval(intervalId)
  }
}

/**
 * Creates accessible tooltips
 * @param {HTMLElement} trigger - Element that triggers the tooltip
 * @param {string} content - Tooltip content
 * @param {Object} options - Configuration options
 */
export const createTooltip = (trigger, content, options = {}) => {
  const {
    position = 'top',
    delay = 300,
    hideOnEsc = true
  } = options
  
  const tooltipId = generateId('tooltip')
  let tooltip = null
  let showTimeout = null
  let hideTimeout = null
  
  const createTooltipElement = () => {
    tooltip = document.createElement('div')
    tooltip.id = tooltipId
    tooltip.className = `tooltip tooltip-${position}`
    tooltip.textContent = content
    tooltip.setAttribute('role', 'tooltip')
    document.body.appendChild(tooltip)
    
    // Position tooltip
    const triggerRect = trigger.getBoundingClientRect()
    const tooltipRect = tooltip.getBoundingClientRect()
    
    let top, left
    
    switch (position) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - 8
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
        break
      case 'bottom':
        top = triggerRect.bottom + 8
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
        break
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
        left = triggerRect.left - tooltipRect.width - 8
        break
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
        left = triggerRect.right + 8
        break
    }
    
    tooltip.style.position = 'absolute'
    tooltip.style.top = `${top + window.scrollY}px`
    tooltip.style.left = `${left + window.scrollX}px`
    tooltip.style.zIndex = '1000'
  }
  
  const showTooltip = () => {
    clearTimeout(hideTimeout)
    showTimeout = setTimeout(() => {
      createTooltipElement()
      trigger.setAttribute('aria-describedby', tooltipId)
    }, delay)
  }
  
  const hideTooltip = () => {
    clearTimeout(showTimeout)
    hideTimeout = setTimeout(() => {
      if (tooltip) {
        document.body.removeChild(tooltip)
        tooltip = null
        trigger.removeAttribute('aria-describedby')
      }
    }, 100)
  }
  
  const handleKeydown = (e) => {
    if (hideOnEsc && e.key === 'Escape') {
      hideTooltip()
    }
  }
  
  // Event listeners
  trigger.addEventListener('mouseenter', showTooltip)
  trigger.addEventListener('mouseleave', hideTooltip)
  trigger.addEventListener('focus', showTooltip)
  trigger.addEventListener('blur', hideTooltip)
  
  if (hideOnEsc) {
    document.addEventListener('keydown', handleKeydown)
  }
  
  // Cleanup function
  return () => {
    clearTimeout(showTimeout)
    clearTimeout(hideTimeout)
    trigger.removeEventListener('mouseenter', showTooltip)
    trigger.removeEventListener('mouseleave', hideTooltip)
    trigger.removeEventListener('focus', showTooltip)
    trigger.removeEventListener('blur', hideTooltip)
    
    if (hideOnEsc) {
      document.removeEventListener('keydown', handleKeydown)
    }
    
    if (tooltip) {
      document.body.removeChild(tooltip)
    }
  }
}

/**
 * Accessibility testing utilities
 */
export const a11yTest = {
  /**
   * Check for missing alt text on images
   */
  checkImages: () => {
    const images = document.querySelectorAll('img')
    const issues = []
    
    images.forEach((img, index) => {
      if (!img.hasAttribute('alt')) {
        issues.push({
          element: img,
          issue: 'Missing alt attribute',
          suggestion: 'Add alt attribute with descriptive text or empty alt="" for decorative images'
        })
      }
    })
    
    return issues
  },
  
  /**
   * Check for heading hierarchy
   */
  checkHeadings: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const issues = []
    let previousLevel = 0
    
    headings.forEach((heading) => {
      const currentLevel = parseInt(heading.tagName.charAt(1))
      
      if (currentLevel > previousLevel + 1) {
        issues.push({
          element: heading,
          issue: `Heading level jumps from h${previousLevel} to h${currentLevel}`,
          suggestion: 'Use heading levels sequentially'
        })
      }
      
      previousLevel = currentLevel
    })
    
    return issues
  },
  
  /**
   * Check for form labels
   */
  checkForms: () => {
    const inputs = document.querySelectorAll('input, select, textarea')
    const issues = []
    
    inputs.forEach((input) => {
      const hasLabel = document.querySelector(`label[for="${input.id}"]`) ||
                      input.closest('label') ||
                      input.hasAttribute('aria-label') ||
                      input.hasAttribute('aria-labelledby')
      
      if (!hasLabel) {
        issues.push({
          element: input,
          issue: 'Form control missing label',
          suggestion: 'Add a label element, aria-label, or aria-labelledby attribute'
        })
      }
    })
    
    return issues
  }
}

// Default export with all utilities
export default {
  announceToScreenReader,
  trapFocus,
  generateId,
  manageFocus,
  prefersReducedMotion,
  debounce,
  handleKeyboardNavigation,
  addScreenReaderText,
  checkColorContrast,
  createRovingTabindex,
  announceRouteChange,
  createTooltip,
  a11yTest
}