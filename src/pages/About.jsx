// src/pages/About.jsx - Comprehensive About Us page
import Hero from '../components/ui/Hero'
import FeatureCard from '../components/ui/FeatureCard'
import GridParticleBackground from '../components/ui/GridParticleBackground'
import { motion } from 'framer-motion'
import { Users, Award, Shield, Target, Zap, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About = () => {
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

  const companyValues = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every detail matters in engineering! We deliver solutions with uncompromising accuracy and technical excellence.",
      highlights: ["OEM-Grade Quality", "Technical Precision", "Industry Standards"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Advanced security protocols and compliance standards ensure your intellectual property remains protected.",
      highlights: ["ISO 27001 Aligned", "NATO Clearance", "ITAR/EAR Compliant"]
    },
    {
      icon: Zap,
      title: "Agile Innovation",
      description: "Rapid response capabilities combined with cutting-edge methodologies deliver results when you need them.",
      highlights: ["Fast Deployment", "Agile Methods", "Scalable Teams"]
    }
  ]

  const capabilities = [
    {
      icon: "🚗",
      title: "Automotive Excellence",
      description: "Extensive experience in body-in-white design, chassis development, and powertrain systems for leading OEMs.",
      metrics: ["15+ Years Experience", "50+ Vehicle Programs", "Tier 1 Partnerships"]
    },
    {
      icon: "🛡️",
      title: "Defense Innovation",
      description: "Advanced defense systems including remote weapon stations and unmanned ground vehicles with full lifecycle support.",
      metrics: ["NATO Standards", "Classified Projects", "Complete R&D Cycle"]
    },
    {
      icon: "⚙️",
      title: "Manufacturing Support",
      description: "End-to-end manufacturing engineering from tooling design to production optimization and quality assurance.",
      metrics: ["3/5-Axis Machining", "Tooling Expertise", "Process Optimization"]
    }
  ]

  return (
    <div>
      {/* Hero Section with Grid Particles */}
      <Hero
        title="Engineering Excellence Through Innovation"
        subtitle="About 20MAX"
        description="We are a Romanian engineering company with highly experienced teams specializing in advanced mechanical design for automotive and defense sectors. Our engineers bring decades of combined expertise in delivering precision solutions that exceed industry standards."
        backgroundType="gradient"
        size="large"
        enableParticles={true}
      />

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-display text-neutral-900 mb-6">Who We Are</h2>
              <div className="space-y-6 text-neutral-700">
                <p className="text-lg">
                  20MAX represents the evolution of engineering excellence in Romania. Founded on the principles 
                  of precision, innovation, and security, we have established ourselves as a trusted partner 
                  for automotive and defense industries worldwide.
                </p>
                <p>
                  Our team of seasoned engineers has contributed to major OEM and Tier 1 projects, bringing 
                  decades of combined expertise in chassis design, body structures, powertrain systems, and 
                  advanced manufacturing processes. This deep industry knowledge allows us to understand 
                  the complex challenges our clients face and deliver solutions that exceed expectations.
                </p>
                <p>
                  Beyond providing engineering services, we design and develop our own cutting-edge products 
                  for the defense industry, including remote weapon stations and unmanned ground systems. 
                  This capability demonstrates our full-cycle development expertise, from initial concept 
                  through field deployment and ongoing support.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-display text-primary mb-2">20+</div>
                  <p className="text-neutral-600 font-medium">Expert Engineers</p>
                </div>
                <div className="text-center">
                  <div className="text-display text-primary mb-2">100+</div>
                  <p className="text-neutral-600 font-medium">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              {/* Placeholder for engineering team image */}
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-12 text-center">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Engineering Team</h3>
                <p className="text-neutral-600">
                  Multidisciplinary experts in CAD, CAE, and CAM with extensive automotive and defense experience
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-lead max-w-2xl mx-auto">
              The principles that guide every project and drive our commitment to engineering excellence
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {companyValues.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FeatureCard {...value} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">Industry Expertise</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Specialized knowledge across high-demand sectors requiring precision and reliability
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={fadeInUp} className="card">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-neutral-900">{capability.title}</h3>
                  <p className="text-neutral-700 mb-6">{capability.description}</p>
                  
                  <div className="space-y-2">
                    {capability.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-neutral-50 rounded-lg px-4 py-2">
                        <span className="text-sm font-medium text-neutral-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Grid Background */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <GridParticleBackground />
        <div className="absolute inset-0 bg-black opacity-20" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0 backdrop-blur-sm border border-white border-opacity-20">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-white text-lg leading-relaxed opacity-90">
                To deliver precision engineering solutions that exceed industry standards while maintaining 
                the highest levels of security and technical excellence. We are committed to being the 
                trusted engineering partner for automotive and defense sectors globally.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0 backdrop-blur-sm border border-white border-opacity-20">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-white text-lg leading-relaxed opacity-90">
                To be recognized as the leading engineering solutions provider in Romania and beyond, 
                setting new standards for innovation, quality, and security in mechanical design and 
                manufacturing engineering across all sectors we serve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-neutral-50">
        <div className="container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-6">Ready to Work Together?</h2>
            <p className="text-lead mb-8 max-w-2xl mx-auto">
              Discover how 20MAX can support your next engineering project with precision, 
              security, and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/competencies')}
              >
                View Our Capabilities
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => navigate('/contact')}
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About