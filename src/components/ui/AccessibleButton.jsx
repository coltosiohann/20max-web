// src/components/ui/AccessibleButton.jsx - Accessible button component
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const AccessibleButton = forwardRef(({ 
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ariaLabel,
  ariaDescribedBy,
  className = '',
  ...props
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-700 focus:ring-primary-200 active:bg-primary-800",
    secondary: "bg-secondary text-white hover:bg-secondary-700 focus:ring-secondary-200",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-200",
    ghost: "text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-200"
  }
  
  const sizes = {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg", 
    lg: "px-6 py-3 text-lg rounded-lg",
    xl: "px-8 py-4 text-xl rounded-xl"
  }
  
  const variantClasses = variants[variant] || variants.primary
  const sizeClasses = sizes[size] || sizes.md
  
  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { y: -1 }}
      whileTap={disabled || loading ? {} : { y: 0 }}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  )
})

AccessibleButton.displayName = 'AccessibleButton'

export default AccessibleButton