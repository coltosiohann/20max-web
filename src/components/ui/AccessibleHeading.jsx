// src/components/ui/PlaceholderImage.jsx - Fixed version
import { motion } from 'framer-motion'

const PlaceholderImage = ({ 
  type = 'engineering',
  className = '',
  alt = '',
  width = 400,
  height = 300,
  showIcon = true,
  gradient = 'blue'
}) => {
  const gradientClasses = {
    blue: 'bg-gradient-to-br from-blue-400 to-blue-600',
    red: 'bg-gradient-to-br from-red-400 to-red-600', 
    gray: 'bg-gradient-to-br from-gray-400 to-gray-600',
    green: 'bg-gradient-to-br from-green-400 to-green-600',
    purple: 'bg-gradient-to-br from-purple-400 to-purple-600'
  }

  const imageTypes = {
    engineering: {
      icon: '⚙️',
      text: 'Engineering Team',
      description: 'Professional engineering workspace'
    },
    automotive: {
      icon: '🚗',
      text: 'Automotive Design',
      description: 'Advanced automotive engineering'
    },
    defense: {
      icon: '🛡️',
      text: 'Defense Systems',
      description: 'Secure defense solutions'
    },
    manufacturing: {
      icon: '🏭',
      text: 'Manufacturing',
      description: 'Modern manufacturing facility'
    },
    team: {
      icon: '👥',
      text: 'Engineering Team',
      description: 'Expert engineering professionals'
    },
    cad: {
      icon: '📐',
      text: 'CAD Design',
      description: 'Advanced CAD modeling'
    },
    simulation: {
      icon: '🔬',
      text: 'CAE Simulation',
      description: 'Engineering simulation & analysis'
    },
    workspace: {
      icon: '💻',
      text: 'Engineering Workspace',
      description: 'Modern engineering office'
    },
    facility: {
      icon: '🏢',
      text: 'Facility',
      description: 'Professional facility overview'
    },
    map: {
      icon: '🗺️',
      text: 'Location',
      description: 'Geographic location'
    }
  }

  const config = imageTypes[type] || imageTypes.engineering
  const gradientClass = gradientClasses[gradient] || gradientClasses.blue

  const containerStyle = {
    width: width === '100%' ? '100%' : `${width}px`,
    height: `${height}px`
  }

  return (
    <motion.div
      className={`relative ${gradientClass} rounded-lg overflow-hidden ${className}`}
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      role="img"
      aria-label={alt || config.description}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        {showIcon && (
          <div className="text-4xl md:text-6xl mb-4 opacity-90">
            {config.icon}
          </div>
        )}
        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
          {config.text}
        </h3>
        <p className="text-sm opacity-80 text-center">
          {config.description}
        </p>
      </div>
      
      {/* Professional overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </motion.div>
  )
}

export default PlaceholderImage