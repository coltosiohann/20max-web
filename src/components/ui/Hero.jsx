// src/components/ui/Hero.jsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GridParticleBackground from './GridParticleBackground'

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  backgroundType = 'gradient',
  size = 'large',
  enableParticles = false
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const backgroundClasses = {
    gradient: 'bg-gradient-hero',
    primary: 'bg-primary',
    dark: 'bg-neutral-900',
    light: 'bg-neutral-50'
  }

  const textClasses = {
    gradient: 'text-white',
    primary: 'text-white', 
    dark: 'text-white',
    light: 'text-neutral-900'
  }

  const sizeClasses = {
    small: 'py-12',
    medium: 'py-16',
    large: 'py-20'
  }

  // Force white text for gradient backgrounds
  const titleColorClass = backgroundType === 'gradient' ? 'text-white' : textClasses[backgroundType]
  const subtitleColorClass = backgroundType === 'gradient' ? 'text-white' : textClasses[backgroundType]
  const descriptionColorClass = backgroundType === 'gradient' ? 'text-white' : textClasses[backgroundType]

  return (
    <section className={`${backgroundClasses[backgroundType]} ${textClasses[backgroundType]} relative overflow-hidden`}>
      {/* Particle Background - only for gradient backgrounds */}
      {backgroundType === 'gradient' && enableParticles && (
        <GridParticleBackground />
      )}
      
      {/* Dark overlay for gradient backgrounds */}
      {backgroundType === 'gradient' && (
        <div className="absolute inset-0 bg-black opacity-20" style={{ zIndex: 2 }}></div>
      )}
      
      <div className={`container ${sizeClasses[size]} relative`} style={{ zIndex: 10 }}>
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeInUp}
            className={`${size === 'large' ? 'text-hero' : 'text-display'} mb-4 ${titleColorClass} font-bold`}
            style={{ color: backgroundType === 'gradient' ? 'white' : undefined }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              variants={fadeInUp}
              className={`text-lead mb-8 ${subtitleColorClass} font-semibold`}
              style={{ color: backgroundType === 'gradient' ? 'white' : undefined }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {description && (
            <motion.p 
              variants={fadeInUp}
              className={`text-lg mb-12 opacity-90 max-w-2xl mx-auto ${descriptionColorClass}`}
              style={{ color: backgroundType === 'gradient' ? 'white' : undefined }}
            >
              {description}
            </motion.p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCTA && (
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={primaryCTA.onClick}
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2" size={20} />
                </button>
              )}
              {secondaryCTA && (
                <button 
                  className="btn btn-outline btn-lg"
                  onClick={secondaryCTA.onClick}
                >
                  {secondaryCTA.text}
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Gradient fade to white at bottom */}
      {backgroundType === 'gradient' && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" style={{ zIndex: 3 }}></div>
      )}
    </section>
  )
}

export default Hero