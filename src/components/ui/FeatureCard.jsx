import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  highlights = [], 
  className = '',
  variant = 'default' 
}) => {
  const variants = {
    default: 'feature-card',
    compact: 'card p-6',
    bordered: 'card border-2 border-neutral-200 hover:border-primary-200'
  }

  return (
    <motion.div 
      className={`${variants[variant]} ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {Icon && (
        <div className="feature-icon">
          <Icon size={32} />
        </div>
      )}
      
      <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{title}</h3>
      <p className="text-neutral-700 mb-6">{description}</p>
      
      {highlights.length > 0 && (
        <div className="space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center text-sm text-neutral-600">
              <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
              {highlight}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default FeatureCard
