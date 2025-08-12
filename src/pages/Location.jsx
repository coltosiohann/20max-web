// src/pages/Location.jsx - Location Advantage
import Hero from '../components/ui/Hero'
import { motion } from 'framer-motion'
import { MapPin, Users, Shield, Zap } from 'lucide-react'

const Location = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Strategic location near Ford production facilities enabling direct plant support with hybrid or on-site presence."
    },
    {
      icon: Users,
      title: "Talent Pool",
      description: "Access to experienced automotive talent pool with deep industry background and technical expertise."
    },
    {
      icon: Shield,
      title: "Secure Infrastructure", 
      description: "Secure office & infrastructure compliant with ISO & NDA requirements for sensitive projects."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Local presence enables immediate support and rapid response to changing project requirements."
    }
  ]

  return (
    <div>
      <Hero
        title="Local Strength, Global Standards"
        subtitle="Strategic Location Advantage"
        description="Positioned in Craiova for direct access to automotive manufacturing while maintaining world-class engineering standards and secure infrastructure for sensitive projects."
        backgroundType="gradient"
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display text-neutral-900 mb-6">Why Craiova?</h2>
              <div className="grid grid-cols-1 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <advantage.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{advantage.title}</h3>
                      <p className="text-neutral-700">{advantage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-neutral-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Ford Production Facility</h3>
              <p className="text-neutral-700">
                Minutes from major automotive production facilities, enabling seamless collaboration and immediate support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location
