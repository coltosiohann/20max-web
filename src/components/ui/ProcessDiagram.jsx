import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProcessStep = ({ step, title, description, icon: Icon, isLast = false }) => {
  return (
    <div className="flex items-center">
      <motion.div 
        className="process-step flex-1"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="process-step-number">{step}</div>
        
        {Icon && (
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Icon size={24} className="text-primary" />
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
        <p className="text-neutral-700">{description}</p>
      </motion.div>
      
      {!isLast && (
        <div className="hidden md:flex items-center justify-center w-16">
          <ArrowRight size={24} className="text-neutral-400" />
        </div>
      )}
    </div>
  )
}

const ProcessDiagram = ({ processes, title, description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="py-20">
      {title && (
        <div className="text-center mb-16">
          <h2 className="text-display text-neutral-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lead max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {processes.map((process, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProcessStep
              step={process.step || String(index + 1).padStart(2, '0')}
              title={process.title}
              description={process.description}
              icon={process.icon}
              isLast={index === processes.length - 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ProcessDiagram