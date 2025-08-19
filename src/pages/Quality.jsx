// src/pages/Quality.jsx - Quality & Security Compliance
import Hero from '../components/ui/Hero'
import FeatureCard from '../components/ui/FeatureCard'
import GridParticleBackground from '../components/ui/GridParticleBackground'
import { motion } from 'framer-motion'
import { Shield, Lock, Award, Users, FileText, Eye, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Quality = () => {
  const navigate = useNavigate()

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
      {/* Hero Section with Grid Particles */}
      <Hero
        title="Quality & Security Compliance"
        subtitle="Excellence in Engineering Standards"
        description="Comprehensive quality management and advanced security protocols ensuring your projects meet the highest industry standards while maintaining complete confidentiality and regulatory compliance."
        backgroundType="gradient"
        size="medium"
        enableParticles={true}
      />

      {/* Security Framework Section */}
<section className="py-20 bg-neutral-50">
 <div className="container">
   <motion.div 
     className="text-center mb-16"
     initial="initial"
     whileInView="animate"
     viewport={{ once: true }}
     variants={fadeInUp}
   >
     <h2 className="text-display text-neutral-900 mb-4">Security & Compliance Framework</h2>
     <p className="text-lead max-w-2xl mx-auto">
       Multi-layered security approach ensuring complete protection of intellectual property and regulatory compliance
     </p>
   </motion.div>

   <motion.div 
     className="grid grid-cols-1 lg:grid-cols-2 gap-8"
     initial="initial"
     whileInView="animate"
     viewport={{ once: true }}
     variants={staggerContainer}
   >
     {securityFeatures.map((feature, index) => (
       <motion.div
         key={index}
         variants={fadeInUp}
       >
         <FeatureCard {...feature} variant="bordered" />
       </motion.div>
     ))}
   </motion.div>
 </div>
</section>

      {/* Certifications Section with Grid Background */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-black opacity-20" style={{ zIndex: 2 }}></div>
        
        <div className="container text-center relative" style={{ zIndex: 10 }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-display text-white mb-6">
              Certifications & Standards
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lead text-white mb-12 max-w-2xl mx-auto">
              Industry-leading certifications ensuring compliance with the most demanding security and quality requirements
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { name: "ISO 9001:2015", desc: "Quality Management" },
                { name: "ISO 27001", desc: "Information Security" },
                { name: "NATO Secret", desc: "Security Clearance" },
                { name: "ITAR/EAR", desc: "Export Compliance" }
              ].map((cert, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm border border-white border-opacity-20">
                    <Award size={24} className="text-primary-light" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-sm text-white opacity-80">{cert.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">Quality Assurance Process</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Rigorous quality control throughout every phase of project execution
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Initial Review",
                description: "Comprehensive project requirements analysis and quality planning",
                icon: Eye
              },
              {
                step: "02", 
                title: "Validation Process",
                description: "Multi-step internal QA process with documented checkpoints",
                icon: Shield
              },
              {
                step: "03",
                title: "Final Certification",
                description: "Complete documentation package with full traceability",
                icon: Award
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <process.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-3">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{process.title}</h3>
                <p className="text-neutral-700">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action with Grid Particles */}
      <Hero
        title="Secure Your Project with 20MAX"
        description="Experience uncompromising quality and security standards that protect your intellectual property while delivering exceptional engineering results."
        primaryCTA={{
          text: "Discuss Security Requirements",
          onClick: () => navigate('/contact')
        }}
        secondaryCTA={{
          text: "Learn About Our Process",
          onClick: () => navigate('/competencies')
        }}
        backgroundType="gradient"
        size="medium"
        enableParticles={true}
      />
    </div>
  )
}

export default Quality