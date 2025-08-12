// Updated src/pages/Contact.jsx - With working contact form
import Hero from '../components/ui/Hero'
import ContactForm from '../components/ui/ContactForm'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Shield, Users, Zap } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Craiova, Romania",
      description: "Strategic location minutes from major automotive production facilities"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+40 XXX XXX XXX",
      description: "Direct line to our engineering team"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "info@20max.com",
      description: "General inquiries and project discussions"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We respond to all inquiries with detailed technical feedback"
    }
  ]

  const reasons = [
    {
      icon: Shield,
      title: "Secure Communication",
      description: "All communications are handled with strict confidentiality and security protocols."
    },
    {
      icon: Users,
      title: "Expert Consultation", 
      description: "Direct access to our senior engineering team for technical discussions."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "We respond to all inquiries within 24 hours with detailed technical feedback."
    }
  ]

  // Replace 'your-formspree-id' with your actual Formspree form ID
  const FORMSPREE_ID = 'mblkqqro'

  return (
    <div>
      <Hero
        title="Let's Engineer the Future Together"
        subtitle="Contact 20MAX"
        description="Ready to discuss your engineering requirements? Contact our team for a detailed consultation and discover how we can accelerate your next project with precision engineering and innovative solutions."
        backgroundType="gradient"
        size="medium"
      />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-neutral-900 mb-4">Get In Touch</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Multiple ways to reach our engineering team for immediate project support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card-body">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-2">{info.content}</p>
                  <p className="text-sm text-neutral-600">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display text-neutral-900 mb-6">Start Your Project</h2>
              <p className="text-lead mb-8">
                Ready to discuss your engineering requirements? Contact our team for a detailed consultation.
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <reason.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">{reason.title}</h3>
                      <p className="text-neutral-700 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-neutral-900 mb-3">Alternative Contact Methods</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>LinkedIn:</strong> Connect with our team</p>
                  <p><strong>Direct Email:</strong> engineering@20max.com</p>
                  <p><strong>Emergency Contact:</strong> Available 24/7 for urgent projects</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <ContactForm 
                useFormspree={true}
                formspreeId={FORMSPREE_ID}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-neutral-900 mb-4">Our Location</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Strategically positioned in Craiova for direct access to automotive manufacturing
            </p>
          </motion.div>

          <div className="bg-neutral-100 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Craiova, Romania</h3>
            <p className="text-neutral-700 max-w-md mx-auto">
              Minutes from Ford production facilities, enabling seamless collaboration and immediate support. 
              Secure facilities compliant with international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display mb-6">Ready to Begin?</h2>
            <p className="text-lead text-neutral-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards engineering excellence. Our team is ready to discuss 
              your project requirements and provide immediate technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                Schedule Consultation
              </button>
              <button className="btn btn-outline btn-lg">
                View Our Capabilities
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

// ================================================================

// SETUP INSTRUCTIONS FOR FORMSPREE (Client-Only Solution)

/*
FORMSPREE SETUP - RECOMMENDED FOR IMMEDIATE FUNCTIONALITY

1. Go to https://formspree.io and create a free account

2. Create a new form:
   - Click "New Form"
   - Enter your email address (where you want to receive submissions)
   - Choose a form name (e.g., "20MAX Contact Form")
   - Copy the form ID (looks like: xvgpkjbl)

3. Update your Contact.jsx file:
   - Replace 'your-formspree-id' with your actual Formspree ID
   - Example: const FORMSPREE_ID = 'xvgpkjbl'

4. Test the form:
   - Submit a test message through your contact form
   - Check your email for the submission
   - Verify it's working correctly

5. Customize Formspree settings (optional):
   - Set up custom thank you page
   - Configure email notifications
   - Add spam protection
   - Set up webhooks for advanced integrations

BENEFITS OF FORMSPREE:
✅ No backend setup required
✅ Instant email notifications
✅ Spam protection included
✅ Free tier available (50 submissions/month)
✅ Professional email formatting
✅ Works immediately without configuration

FORMSPREE PRICING:
- Free: 50 submissions/month
- Bronze: $10/month - 1,000 submissions
- Gold: $30/month - 5,000 submissions
- Platinum: $100/month - 50,000 submissions

ALTERNATIVE EMAIL SERVICES:
- Netlify Forms (if hosting on Netlify)
- EmailJS (client-side email sending)
- Getform.io (similar to Formspree)
- Basin.com (form backend service)
*/

// ================================================================

// CSS Animation for loading spinner
/*
Add this to your src/index.css file:

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
*/