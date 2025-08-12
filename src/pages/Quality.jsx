// src/pages/Quality.jsx - Quality & Security Compliance
import Hero from '../components/ui/Hero'
import FeatureCard from '../components/ui/FeatureCard'
import { motion } from 'framer-motion'
import { Shield, Lock, Award, Users, FileText, Eye } from 'lucide-react'

const Quality = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Engineering Quality Standards",
      description: "Comprehensive quality management ensuring every deliverable meets the highest industry standards.",
      highlights: [
        "Full compliance with ASME and ISO 9001 standards",
        "Engineering deliverables validated through internal multi-step QA process",
        "Traceable documentation & controlled revision history for each phase"
      ]
    },
    {
      icon: Lock,
      title: "Secure Facilities & Classified Work",
      description: "State-of-the-art secure facilities designed for handling classified and sensitive engineering projects.",
      highlights: [
        "Dedicated design offices & server infrastructure for classified projects",
        "Engineering spaces certified for handling information up to 'Strict Secret' level",
        "Secure data storage, restricted access and activity monitoring in all critical areas"
      ]
    },
    {
      icon: Users,
      title: "Internal Security Department",
      description: "Independent security oversight ensuring regulatory compliance and personnel authorization.",
      highlights: [
        "Independent Industrial Security Department ensuring regulatory compliance",
        "Personnel vetted and authorized for access to national and international classified programs",
        "Regular internal audits, employee training, and alignment with partner-specific NDAs"
      ]
    },
    {
      icon: FileText,
      title: "Commitment to Data Protection", 
      description: "Comprehensive data protection protocols ensuring complete confidentiality throughout collaboration.",
      highlights: [
        "Full compliance with NDAs, export control, and ITAR/EAR-restricted workflows",
        "Secure file exchange & version control system",
        "Confidentiality embedded in all phases of the collaboration"
      ]
    }
  ]

  return (
    <div>
      <Hero
        title="Quality & Security Compliance"
        subtitle="Excellence in Engineering Standards"
        description="Comprehensive quality management and advanced security protocols ensuring your projects meet the highest industry standards while maintaining complete confidentiality and regulatory compliance."
        backgroundType="gradient"
        size="medium"
      />

      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-neutral-900 mb-4">Security & Compliance Framework</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Multi-layered security approach ensuring complete protection of intellectual property and regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} variant="bordered" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-display text-neutral-900 mb-6">Certifications & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management" },
              { name: "ISO 27001", desc: "Information Security" },
              { name: "NATO Secret", desc: "Security Clearance" },
              { name: "ITAR/EAR", desc: "Export Compliance" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-neutral-900">{cert.name}</h3>
                <p className="text-sm text-neutral-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quality
