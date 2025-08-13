// src/pages/Experience.jsx - Experience & Partnerships
import Hero from '../components/ui/Hero'
import TeamCard from '../components/ui/TeamCard'
import { motion } from 'framer-motion'
import { Users, Award, Target, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Experience = () => {
  const navigate = useNavigate()

  const teamMembers = [
    {
      name: "Alexandru Popescu",
      role: "Lead CAD Engineer",
      bio: "15+ years in automotive design with expertise in body structures and chassis systems.",
      specialties: ["CATIA V5", "Body-in-White", "Automotive Standards"],
      email: "alexandru@20max.com"
    },
    {
      name: "Maria Ionescu", 
      role: "Senior CAE Analyst",
      bio: "Structural analysis specialist with extensive crashworthiness and NVH experience.",
      specialties: ["Abaqus", "LS-DYNA", "Crashworthiness"],
      email: "maria@20max.com"
    },
    {
      name: "Andrei Constantinescu",
      role: "Manufacturing Engineer", 
      bio: "CAM specialist focused on advanced manufacturing and tooling optimization.",
      specialties: ["5-Axis Machining", "Tooling Design"],
      email: "andrei@20max.com"
    }
  ]

  const achievements = [
    {
      icon: Users,
      stat: "20+",
      label: "Multidisciplinary Engineers",
      description: "Expert team with decades of combined experience"
    },
    {
      icon: Award,
      stat: "100+", 
      label: "Projects Delivered",
      description: "Successfully completed projects in automotive, aerospace, and defense"
    },
    {
      icon: Target,
      stat: "99%",
      label: "Client Satisfaction",
      description: "Experienced in OEM standards, documentation, and PLM tools"
    },
    {
      icon: Zap,
      stat: "24h",
      label: "Response Time",
      description: "Flexible engagement, from full outsourcing to embedded teams"
    }
  ]

  return (
    <div>
      <Hero
        title="Experience That Delivers"
        subtitle="Proven Track Record"
        description="20+ multidisciplinary engineers with extensive experience delivering projects in automotive, aerospace, and defense sectors. Experienced in OEM standards, documentation, and PLM tools with flexible engagement models."
        backgroundType="gradient"
        size="medium"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon size={32} className="text-primary" />
                </div>
                <div className="text-display text-primary mb-2">{achievement.stat}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{achievement.label}</h3>
                <p className="text-neutral-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-neutral-900 mb-4">Engineering Leadership</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Meet our experienced engineering professionals leading innovation across all disciplines
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display mb-4">Ready to Partner with 20MAX?</h2>
            <p className="text-lead text-neutral-300 mb-8 max-w-2xl mx-auto">
              We are not just a supplier, we are your engineering ally. Trusted by high-demand industries, 
              based in Craiova, scalable, secure, and high-performance. Ready to start immediately.
            </p>
            <p className="text-xl mb-8">Let's design the future of safety together.</p>
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/contact')}
            >
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience