import { motion } from 'framer-motion'
import { CheckCircle, Settings, Zap, Shield } from 'lucide-react'

const TechSpecItem = ({ label, value, icon: Icon }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-neutral-200">
      <div className="flex items-center">
        {Icon && <Icon size={16} className="text-primary mr-3" />}
        <span className="font-medium text-neutral-700">{label}</span>
      </div>
      <span className="text-neutral-900 font-semibold">{value}</span>
    </div>
  )
}

const TechSpecsCategory = ({ title, specs, icon: Icon }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        <div className="flex items-center">
          {Icon && (
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
              <Icon size={20} className="text-primary" />
            </div>
          )}
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        </div>
      </div>
      <div className="card-body">
        <div className="space-y-0">
          {specs.map((spec, index) => (
            <TechSpecItem 
              key={index}
              label={spec.label}
              value={spec.value}
              icon={spec.icon}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const TechSpecs = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {categories.map((category, index) => (
        <TechSpecsCategory 
          key={index}
          title={category.title}
          specs={category.specs}
          icon={category.icon}
        />
      ))}
    </div>
  )
}

export default TechSpecs