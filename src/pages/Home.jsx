// src/pages/Competencies.jsx - Core Competencies with technical details
import Hero from '../components/ui/Hero'
import Accordion from '../components/ui/Accordion'
import TechSpecs from '../components/ui/TechSpecs'
import ProcessDiagram from '../components/ui/ProcessDiagram'
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
    { number: '20+', label: 'Expert Engineers', icon: Target },

    { number: '100+', label: 'Projects Delivered', icon: Award },
    { number: '99.8%', label: 'Quality Rating', icon: CheckCircle },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container py-20 relative z-10">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-hero mb-6">
                20<span className="text-primary-light">MAX</span>
              </h1>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lead text-white mb-8 max-w-4xl mx-auto"
            >
              Engineering Excellence for the Future
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg mb-12 text-neutral-200 max-w-2xl mx-auto"
            >
              Advanced CAD/CAE/CAM solutions for automotive and defense industries. 
              Precision engineering powered by innovation and security.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/competencies')}
              >
                Explore Our Capabilities
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => navigate('/contact')}
              >
                Contact Us Today
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Hero Pattern Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
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
                <div className="feature-icon mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-display text-primary mb-2">{stat.number}</div>
                <p className="text-neutral-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
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
                className="feature-card"
              >
                <div className="feature-icon">
                  <feature.icon size={32} />
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
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
                className="process-step"
              >
                <div className="process-step-number">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{process.title}</h3>
                <p className="text-neutral-700">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
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
            <motion.div variants={fadeInUp} className="card">
              <div className="card-body">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Automotive</h3>
                <p className="text-neutral-700 mb-4">
                  Body-in-white design, chassis development, powertrain systems, 
                  and manufacturing tooling for OEMs and Tier 1 suppliers.
                </p>
                <ul className="spec-list">
                  <li>Structural Analysis & Crashworthiness</li>
                  <li>NVH Optimization</li>
                  <li>Manufacturing Process Design</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="card">
              <div className="card-body">
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">Defense</h3>
                <p className="text-neutral-700 mb-4">
                  Advanced systems for defense applications including remote weapon 
                  stations and unmanned ground systems.
                </p>
                <ul className="spec-list">
                  <li>Classified Project Capabilities</li>
                  <li>Ruggedized System Design</li>
                  <li>Full Lifecycle Support</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-display mb-6">
              Ready to Engineer the Future?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lead text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how 20MAX can accelerate your next project with 
              precision engineering and innovative solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/contact')}
              >
                Start Your Project Today
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => navigate('/experience')}
              >
                View Our Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t">
        <div className="container">
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
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="bg-neutral-200 rounded-lg px-8 py-4 text-neutral-500 font-medium">
                Ford Otosan
              </div>
              <div className="bg-neutral-200 rounded-lg px-8 py-4 text-neutral-500 font-medium">
                OEM Partners
              </div>
              <div className="bg-neutral-200 rounded-lg px-8 py-4 text-neutral-500 font-medium">
                Defense Contractors
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home