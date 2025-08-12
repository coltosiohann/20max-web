// src/pages/Business.jsx - Business Models
import Hero from '../components/ui/Hero'
import ProcessDiagram from '../components/ui/ProcessDiagram'
import { motion } from 'framer-motion'
import { Settings, Users, ArrowRight } from 'lucide-react'

const Business = () => {
  const botProcess = [
    {
      step: "01",
      title: "Build",
      description: "We recruit, train, and set up your dedicated engineering team with our tools and standards.",
      icon: Users
    },
    {
      step: "02", 
      title: "Operate",
      description: "Full delivery via 20MAX with our established processes, quality systems, and technical expertise.",
      icon: Settings
    },
    {
      step: "03",
      title: "Transfer",
      description: "You take full control when ready with trained team, established processes, and documented procedures.",
      icon: ArrowRight
    }
  ]

  return (
    <div>
      <Hero
        title="Build Your Team With BOT"
        subtitle="Flexible Business Models"
        description="Our Build-Operate-Transfer model helps create a long-term engineering base with minimal risk, maximum continuity, and local engineering power aligned to your vision."
        backgroundType="gradient"
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ProcessDiagram
            title="Build-Operate-Transfer Process"
            description="The result: minimal risk, maximum continuity, and local engineering power aligned to your vision"
            processes={botProcess}
          />
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-display text-neutral-900 mb-12 text-center">Collaboration Models</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible Engagement Options",
                items: [
                  "Full-package outsourcing – complete CAD/CAM/CAE ownership and delivery",
                  "Dedicated engineering cells – assigned multidisciplinary teams working exclusively on your programs", 
                  "Hybrid collaboration – remote execution with optional on-site integration or technical liaison"
                ]
              },
              {
                title: "Process Integration",
                items: [
                  "Aligned with your specific workflows and versioning system (PLM, data exchange, etc)",
                  "Fast onboarding of engineers into your toolchain and documentation procedures",
                  "Many of our FEA and CAD engineers have previous experience ensuring smooth collaboration from day one"
                ]
              },
              {
                title: "Scalable Engineering Support",
                items: [
                  "Short lead time for team ramp-up",
                  "Ability to scale resources based on project phase and complexity",
                  "High availability and responsiveness in dynamic environments",
                  "Projects executed in secured environments, in full compliance with NDAs"
                ]
              }
            ].map((model, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{model.title}</h3>
                  <ul className="spec-list">
                    {model.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Business