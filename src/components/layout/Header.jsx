// src/components/layout/Header.jsx - Updated with independent Contact Us
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigationGroups = {
    services: {
      label: 'Services',
      items: [
        { path: '/competencies', label: 'Core Competencies' },
        { path: '/philosophy', label: 'Engineering Philosophy' },
        { path: '/quality', label: 'Quality & Security' },
      ]
    },
    company: {
      label: 'Company',
      items: [
        { path: '/about', label: 'About Us' },
        { path: '/location', label: 'Location Advantage' },
        { path: '/experience', label: 'Experience & Partnerships' },
      ]
    },
    solutions: {
      label: 'Solutions',
      items: [
        { path: '/business', label: 'Business Models' },
        // Removed Contact Us from here
      ]
    }
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const isActiveGroup = (groupItems) => {
    return groupItems.some(item => location.pathname === item.path)
  }

  const toggleDropdown = (groupKey) => {
    setActiveDropdown(activeDropdown === groupKey ? null : groupKey)
  }

  const handleKeyDown = (e, groupKey) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleDropdown(groupKey)
    }
    if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" role="banner">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="20MAX - Go to homepage"
          >
            <div className="logo-20max">
              20<span className="logo-max">MAX</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-primary'
                  : 'text-neutral-700 hover:text-primary'
              }`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>

            {/* Dropdown Groups */}
            {Object.entries(navigationGroups).map(([key, group]) => (
              <div key={key} className="dropdown-container">
                <button
                  className={`dropdown-trigger ${
                    isActiveGroup(group.items)
                      ? 'text-primary'
                      : 'text-neutral-700 hover:text-primary'
                  }`}
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-label={`${group.label} menu`}
                >
                  {group.label}
                  <ChevronDown size={16} className="dropdown-chevron" aria-hidden="true" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className="dropdown-menu"
                  role="menu"
                  aria-label={`${group.label} submenu`}
                >
                  <div className="dropdown-content">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`dropdown-item ${
                          location.pathname === item.path
                            ? 'dropdown-item-active'
                            : ''
                        }`}
                        role="menuitem"
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Independent Contact Us Link */}
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'text-primary'
                  : 'text-neutral-700 hover:text-primary'
              }`}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-neutral-200 overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'text-primary'
                      : 'text-neutral-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </Link>

                {Object.entries(navigationGroups).map(([key, group]) => (
                  <div key={key}>
                    <button
                      onClick={() => toggleDropdown(key)}
                      onKeyDown={(e) => handleKeyDown(e, key)}
                      className="flex items-center justify-between w-full py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
                      aria-expanded={activeDropdown === key}
                      aria-controls={`mobile-submenu-${key}`}
                      aria-label={`${group.label} submenu`}
                    >
                      {group.label}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${
                          activeDropdown === key ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === key && (
                        <motion.div
                          id={`mobile-submenu-${key}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                          role="menu"
                          aria-label={`${group.label} submenu`}
                        >
                          <div className="pl-4 space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block py-2 text-sm transition-colors ${
                                  location.pathname === item.path
                                    ? 'text-primary'
                                    : 'text-neutral-600 hover:text-primary'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                                role="menuitem"
                                aria-current={location.pathname === item.path ? 'page' : undefined}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Independent Contact Us in Mobile Menu */}
                <Link
                  to="/contact"
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location.pathname === '/contact'
                      ? 'text-primary'
                      : 'text-neutral-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={location.pathname === '/contact' ? 'page' : undefined}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header