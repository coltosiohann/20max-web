import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const TeamCard = ({ 
  name, 
  role, 
  bio, 
  image, 
  skills = [], 
  linkedin, 
  email,
  specialties = []
}) => {
  return (
    <motion.div 
      className="card text-center"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        {/* Profile Image */}
        <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <span className="text-primary text-xl font-bold">
                {name?.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
        
        {/* Name & Role */}
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        
        {/* Bio */}
        {bio && (
          <p className="text-neutral-700 text-sm mb-4">{bio}</p>
        )}
        
        {/* Skills/Specialties */}
        {specialties.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Contact Links */}
        <div className="flex justify-center space-x-3">
          {linkedin && (
            <a 
              href={linkedin}
              className="w-8 h-8 bg-neutral-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} className="text-neutral-600 hover:text-primary" />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="w-8 h-8 bg-neutral-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors"
            >
              <Mail size={16} className="text-neutral-600 hover:text-primary" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default TeamCard
