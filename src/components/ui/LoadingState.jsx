import { motion } from 'framer-motion'

const LoadingState = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '',
  ariaLabel 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg', 
    xl: 'text-xl'
  }
  
  return (
    <div 
      className={`flex flex-col items-center justify-center p-8 ${className}`}
      role="status"
      aria-label={ariaLabel || text}
    >
      <motion.div
        className={`border-4 border-neutral-200 border-t-primary rounded-full ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      {text && (
        <p className={`mt-4 text-neutral-600 ${textSizes[size]}`}>
          {text}
        </p>
      )}
      <span className="sr-only">{ariaLabel || text}</span>
    </div>
  )
}

export default LoadingState