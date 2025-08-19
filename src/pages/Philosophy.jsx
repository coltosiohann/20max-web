// src/pages/Philosophy.jsx - Engineering Philosophy and approach
import Hero from '../components/ui/Hero'
import GridParticleBackground from '../components/ui/GridParticleBackground'
import { motion } from 'framer-motion'
import { Target, Shield, Zap, Award, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Philosophy = () => {
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

  const philosophyPrinciples = [
    {
      icon: Target,
      title: "Precision by Design",
      description: "Every detail, every simulation, every component matters. We approach engineering with meticulous attention to precision, ensuring that safety and reliability are built into every design from the ground up.",
      principles: [
        "Detail-oriented engineering approach",
        "Rigorous validation at every stage", 
        "Zero-tolerance for compromise on safety"
      ]
    },
    {
      icon: Shield,
      title: "Safety-First Engineering",
      description: "Automotive and defense safety starts on the drawing board. We bring more than technical expertise – we bring a safety-first engineering culture powered by precision, reliability, and unwavering commitment to excellence.",
      principles: [
        "Safety embedded in design philosophy",
        "Comprehensive risk assessment",
        "Proactive hazard identification"
      ]
    },
    {
      icon: Zap,
      title: "Agile Innovation",
      description: "Local agility meets global standards. We combine rapid response capabilities with world-class engineering methodologies to deliver solutions that exceed expectations while meeting tight deadlines.",
      principles: [
        "Rapid prototyping and iteration",
        "Flexible engagement models",
        "Continuous improvement mindset"
      ]
    }
  ]

  const engineeringValues = [
    {
      title: "Technical Excellence",
      description: "We pursue engineering perfection through continuous learning, advanced methodologies, and uncompromising quality standards.",
      icon: Award,
      metrics: ["OEM-Grade Quality", "Industry-Leading Tools", "Continuous Training"]
    },
    {
      title: "Collaborative Partnership",
      description: "We believe in true partnership with our clients, working as an extension of your engineering team with shared goals and mutual success.",
      icon: Users,
      metrics: ["Integrated Teams", "Shared Objectives", "Transparent Communication"]
    },
    {
      title: "Global Standards",
      description: "Local expertise with international quality standards, ensuring your projects meet global requirements while benefiting from regional advantages.",
      icon: Globe,
      metrics: ["ISO Compliance", "International Standards", "Global Best Practices"]
    }
  ]

  return (
    <div>
      {/* Hero Section with Grid Particles */}
      <Hero
        title="Engineering with Purpose"
        subtitle="Our Philosophy & Approach"
        description="Automotive and defense safety starts on the drawing board. At 20MAX, we bring more than technical expertise – we bring a safety-first engineering culture, powered by precision, reliability, and local agility that delivers beyond expectations, locally and globally."
        backgroundType="gradient"
        size="large"
        enableParticles={true}
      />

      {/* Core Philosophy */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">Our Engineering Principles</h2>
            <p className="text-lead max-w-2xl mx-auto">
              The fundamental principles that guide every project and ensure exceptional results
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {philosophyPrinciples.map((principle, index) => (
              <motion.div key={index} variants={fadeInUp} className="card">
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <principle.icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{principle.title}</h3>
                  <p className="text-neutral-700 mb-6 leading-relaxed">{principle.description}</p>
                  
                  <div className="space-y-2">
                    {principle.principles.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-600">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-display text-neutral-900 mb-6">Our Engineering Approach</h2>
              <div className="space-y-6 text-neutral-700">
                <p className="text-lg">
                  At 20MAX, engineering excellence is not just about technical proficiency – it's about 
                  understanding the deeper purpose behind every project. Whether designing critical 
                  automotive safety systems or advanced defense platforms, we recognize that lives 
                  depend on the quality of our work.
                </p>
                <p>
                  This responsibility drives our commitment to precision at every level. From initial 
                  concept sketches to final manufacturing documentation, every decision is made with 
                  safety, reliability, and performance as primary considerations. We don't just meet 
                  specifications – we exceed them.
                </p>
                <p>
                  Our local agility advantage means we can respond quickly to changing requirements 
                  while maintaining global quality standards. This flexibility, combined with our 
                  deep technical expertise, allows us to deliver solutions that are both innovative 
                  and proven.
                </p>
              </div>
              
              <div className="mt-8">
                <button 
                  className="btn btn-primary"
                  onClick={() => navigate('/competencies')}
                >
                  See Our Process
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              {/* Engineering workspace visualization */}
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Target size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Precision Focus</h4>
                      <p className="text-sm text-neutral-600">Every detail engineered to perfection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Safety Integration</h4>
                      <p className="text-sm text-neutral-600">Built-in safety from concept to completion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <Zap size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Rapid Response</h4>
                      <p className="text-sm text-neutral-600">Agile methodologies for fast delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">What Drives Us</h2>
            <p className="text-lead max-w-2xl mx-auto">
              The values that shape our engineering culture and define our commitment to excellence
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {engineeringValues.map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-neutral-900">{value.title}</h3>
                <p className="text-neutral-700 mb-6">{value.description}</p>
                
                <div className="grid grid-cols-1 gap-2">
                  {value.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-neutral-50 rounded-lg px-4 py-2">
                      <span className="text-sm font-medium text-neutral-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy in Practice with Grid Particles and Metrics */}
      <section className="bg-gradient-hero text-white relative overflow-hidden py-20">
        {/* Grid Particles Background */}
        <GridParticleBackground />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-20" style={{ zIndex: 2 }}></div>
        
        <div className="container relative" style={{ zIndex: 10 }}>
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display mb-6 text-white">Philosophy in Practice</h2>
            <p className="text-lead text-white mb-12 max-w-3xl mx-auto">
              How our engineering philosophy translates into tangible benefits for your projects
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Quality Assurance",
                description: "Multi-step validation ensures every deliverable meets the highest standards",
                stat: "99.8%",
                label: "Quality Rating"
              },
              {
                title: "Safety Focus",
                description: "Zero safety incidents across all projects through rigorous design practices",
                stat: "100%",
                label: "Safety Record"
              },
              {
                title: "Delivery Performance",
                description: "Consistent on-time delivery through agile project management",
                stat: "98%",
                label: "On-Time Delivery"
              },
              {
                title: "Client Satisfaction",
                description: "Long-term partnerships built on trust and exceptional results",
                stat: "95%",
                label: "Client Retention"
              }
            ].map((metric, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-primary-light mb-2">{metric.stat}</div>
                <div className="text-lg font-semibold mb-2 text-white">{metric.title}</div>
                <div className="text-sm text-white mb-2 opacity-90">{metric.label}</div>
                <p className="text-sm text-white opacity-80">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* Partnership visual */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">Partnership Approach</h3>
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <span className="text-neutral-700">Integrated team collaboration</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <span className="text-neutral-700">Transparent communication</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <span className="text-neutral-700">Shared success metrics</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                    <span className="text-neutral-700">Long-term relationship focus</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-display text-neutral-900 mb-6">True Engineering Partnership</h2>
              <div className="space-y-6 text-neutral-700">
                <p className="text-lg">
                  We don't just provide engineering services – we become an extension of your team. 
                  Our partnership approach means we invest in understanding your business, your 
                  challenges, and your long-term objectives.
                </p>
                <p>
                  This deep collaboration enables us to anticipate needs, propose innovative solutions, 
                  and deliver results that align perfectly with your strategic goals. Whether you need 
                  dedicated engineering cells or full project outsourcing, we adapt our approach to 
                  fit your specific requirements.
                </p>
                <p>
                  Success is measured not just by deliverables, but by the value we add to your 
                  organization and the strength of our ongoing partnership.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-6">Experience Our Philosophy</h2>
            <p className="text-lead mb-8 max-w-2xl mx-auto">
              Discover how our engineering philosophy translates into exceptional results 
              for your most critical projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/contact')}
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => navigate('/contact')}
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Philosophy