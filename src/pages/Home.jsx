// src/pages/Home.jsx - With grid particles in each section
import Hero from '../components/ui/Hero'
import GridParticleBackground from '../components/ui/GridParticleBackground'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Target, CheckCircle, Users, Award } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
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

  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'ISO-compliant facilities with classified project capabilities and comprehensive data protection protocols.',
      highlights: ['ISO 9001 Certified', 'NATO Secret Clearance', 'ITAR/EAR Compliant']
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile engineering teams with fast ramp-up capabilities and flexible engagement models for immediate project support.',
      highlights: ['48h Team Setup', 'Agile Methodology', 'Scalable Resources']
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Complete CAD/CAE/CAM workflow with expertise in automotive standards and OEM-grade deliverables.',
      highlights: ['OEM Standards', 'Full Lifecycle', 'Technical Excellence']
    }
  ]

  const stats = [
    { number: '20+', label: 'Expert Engineers', icon: Users },
    { number: '100+', label: 'Projects Delivered', icon: Award },
    { number: '99.8%', label: 'Quality Rating', icon: CheckCircle },
  ]

  return (
    <div>
      {/* Hero Section with Grid Particles */}
      <Hero
        title={<>20<span className="text-primary-light">MAX</span></>}
        subtitle="Engineering Excellence for the Future"
        description="Advanced CAD/CAE/CAM solutions for automotive and defense industries. Precision engineering powered by innovation and security."
        primaryCTA={{
          text: "Explore Our Capabilities",
          onClick: () => navigate('/competencies')
        }}
        secondaryCTA={{
          text: "Contact Us Today",
          onClick: () => navigate('/contact')
        }}
        backgroundType="gradient"
        size="large"
        enableParticles={true}
      />

      {/* Stats Section with Grid Background */}
      <section className="py-16 bg-white relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-white bg-opacity-95" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white border-opacity-50 shadow-lg">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-display text-primary mb-2">{stat.number}</div>
                <p className="text-neutral-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section with Grid Background */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-neutral-50 bg-opacity-90" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">
              Why Choose 20MAX?
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              We deliver comprehensive engineering solutions with unmatched precision, 
              security, and local expertise.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white border-opacity-50"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-700 mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section with Grid Background */}
      <section className="py-20 bg-white relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-white bg-opacity-95" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">
              Our Engineering Process
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              From concept to deployment, we ensure technical excellence throughout 
              the complete product development lifecycle.
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
                title: "Analysis & Planning",
                description: "Requirements analysis, technical feasibility studies, and project roadmap development."
              },
              {
                step: "02", 
                title: "Design & Simulation",
                description: "CAD design, CAE simulation, optimization, and validation using industry-leading tools."
              },
              {
                step: "03",
                title: "Manufacturing Support",
                description: "CAM programming, tooling design, and comprehensive manufacturing documentation."
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center border border-white border-opacity-50"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{process.title}</h3>
                <p className="text-neutral-700">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section with Grid Background */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-neutral-50 bg-opacity-90" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Specialized engineering solutions across high-demand sectors 
              requiring precision and reliability.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-50">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Automotive</h3>
                <p className="text-neutral-700 mb-4">
                  Body-in-white design, chassis development, powertrain systems, 
                  and manufacturing tooling for OEMs and Tier 1 suppliers.
                </p>
                <ul className="space-y-2">
                  {['Structural Analysis & Crashworthiness', 'NVH Optimization', 'Manufacturing Process Design'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg border border-white border-opacity-50">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Defense</h3>
                <p className="text-neutral-700 mb-4">
                  Advanced systems for defense applications including remote weapon 
                  stations and unmanned ground systems.
                </p>
                <ul className="space-y-2">
                  {['Classified Project Capabilities', 'Ruggedized System Design', 'Full Lifecycle Support'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Particles */}
      <Hero
        title="Ready to Engineer the Future?"
        description="Let's discuss how 20MAX can accelerate your next project with precision engineering and innovative solutions."
        primaryCTA={{
          text: "Start Your Project Today",
          onClick: () => navigate('/contact')
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          onClick: () => navigate('/experience')
        }}
        backgroundType="gradient"
        size="medium"
        enableParticles={true}
      />

      {/* Trust Indicators with Grid Background */}
      <section className="py-16 bg-white border-t relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-white bg-opacity-95" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-small text-neutral-600 mb-8">
              Trusted by leading organizations in automotive and defense sectors
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Ford Otosan', 'OEM Partners', 'Defense Contractors'].map((company, index) => (
                <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg px-8 py-4 text-neutral-500 font-medium shadow-lg border border-white border-opacity-50">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home