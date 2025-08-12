// src/components/ui/ContactForm.jsx - Production version
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const ContactForm = ({ 
  onSubmit, 
  className = '',
  useFormspree = true,
  formspreeId = 'mblkqqro' // Replace with actual Formspree ID
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    timeline: '',
    honeypot: '' // Anti-spam field
  })
  
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && formData.phone.length > 0 && formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    // Message length
    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submitToFormspree = async (data) => {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        subject: data.subject || `New inquiry from ${data.name}`,
        message: data.message,
        projectType: data.projectType,
        timeline: data.timeline,
        // Add some metadata
        source: '20MAX Website Contact Form',
        timestamp: new Date().toISOString()
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to send message')
    }

    return response.json()
  }

  const submitToBackend = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to send message')
    }

    return response.json()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check for honeypot (anti-spam)
    if (formData.honeypot) {
      return // Silently block spam
    }
    
    if (!validateForm()) return
    
    setStatus('loading')
    
    try {
      if (useFormspree) {
        await submitToFormspree(formData)
      } else if (onSubmit) {
        await onSubmit(formData)
      } else {
        await submitToBackend(formData)
      }
      
      setStatus('success')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
        timeline: '',
        honeypot: ''
      })
      
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear errors as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const inputClasses = "w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary transition-colors"
  const errorClasses = "border-red-500 focus:ring-red-200 focus:border-red-500"

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className={`space-y-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
            placeholder="Your full name"
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
            placeholder="your.email@company.com"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputClasses} ${errors.phone ? errorClasses : ''}`}
            placeholder="+40 XXX XXX XXX"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle size={16} className="mr-1" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select project type</option>
            <option value="cad-design">CAD Design</option>
            <option value="cae-simulation">CAE Simulation</option>
            <option value="cam-manufacturing">CAM Manufacturing</option>
            <option value="full-service">Full Service Engineering</option>
            <option value="consulting">Engineering Consulting</option>
            <option value="bot-model">Build-Operate-Transfer</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Timeline
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select timeline</option>
            <option value="urgent">Urgent (Within 2 weeks)</option>
            <option value="short">Short term (1-3 months)</option>
            <option value="medium">Medium term (3-6 months)</option>
            <option value="long">Long term (6+ months)</option>
            <option value="ongoing">Ongoing partnership</option>
          </select>
        </div>
      </div>

      {/* Subject & Message */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Brief subject of your inquiry"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Project Details *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`${inputClasses} ${errors.message ? errorClasses : ''}`}
          placeholder="Please describe your project requirements, technical specifications, industry sector, and any specific challenges you're facing. The more details you provide, the better we can assist you."
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle size={16} className="mr-1" />
            {errors.message}
          </p>
        )}
        <p className="mt-2 text-xs text-neutral-500">
          {formData.message.length}/500 characters (minimum 10 required)
        </p>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <CheckCircle className="text-green-600 mr-3" size={20} />
          <div>
            <h4 className="text-green-800 font-medium">Message sent successfully!</h4>
            <p className="text-green-700 text-sm">
              We'll get back to you within 24 hours with detailed technical feedback.
            </p>
          </div>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <AlertCircle className="text-red-600 mr-3" size={20} />
          <div>
            <h4 className="text-red-800 font-medium">Failed to send message</h4>
            <p className="text-red-700 text-sm">
              Please try again or contact us directly at info@20max.com
            </p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn btn-primary btn-lg w-full ${
          status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2" size={20} />
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <div className="text-xs text-neutral-500 text-center">
        <p>
          By submitting this form, you agree to our privacy policy. All communications 
          are handled with strict confidentiality and security protocols.
        </p>
      </div>
    </motion.form>
  )
}

export default ContactForm