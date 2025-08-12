// src/pages/ComponentShowcase.jsx - Test page for all components
import Hero from '../components/ui/Hero'
import FeatureCard from '../components/ui/FeatureCard'
import Accordion from '../components/ui/Accordion'
import ProcessDiagram from '../components/ui/ProcessDiagram'
import TeamCard from '../components/ui/TeamCard'
import TechSpecs from '../components/ui/TechSpecs'
import ContactForm from '../components/ui/ContactForm'
import { Shield, Zap, Target, Settings, Users, Award, Wrench, Database, Code } from 'lucide-react'

const ComponentShowcase = () => {
  // Sample data for components
  const accordionItems = [
    {
      title: "CAD Design Capabilities",
      content: (
        <div>
          <p>Complete 3D design and development services including:</p>
          <ul className="spec-list mt-4">
            <li>Body-in-white (BIW) design</li>
            <li>Chassis and suspension systems</li>
            <li>Interior and exterior components</li>
            <li>Manufacturing tooling and fixtures</li>
          </ul>
        </div>
      )
    },
    {
      title: "CAE Simulation Services",
      content: (
        <div>
          <p>Advanced simulation and analysis capabilities:</p>
          <ul className="spec-list mt-4">
            <li>Structural and thermal analysis (FEA)</li>
            <li>Crashworthiness and safety validation</li>
            <li>NVH and multi-body dynamics</li>
            <li>CFD and aerodynamic optimization</li>
          </ul>
        </div>
      )
    },
    {
      title: "CAM Manufacturing Support",
      content: (
        <div>
          <p>Manufacturing preparation and support:</p>
          <ul className="spec-list mt-4">
            <li>Toolpath generation for 3/5-axis machining</li>
            <li>Fixture design and optimization</li>
            <li>NC post-processing and verification</li>
            <li>Manufacturing documentation</li>
          </ul>
        </div>
      )
    }
  ]

  const processSteps = [
    {
      title: "Requirements Analysis",
      description: "Comprehensive analysis of project requirements, technical specifications, and quality standards.",
      icon: Database
    },
    {
      title: "Design & Development",
      description: "3D design, simulation, and iterative development using industry-leading CAD/CAE tools.",
      icon: Code
    },
    {
      title: "Validation & Delivery",
      description: "Thorough testing, validation, and delivery of complete engineering documentation.",
      icon: Award
    }
  ]

  const teamMembers = [
    {
      name: "Alexandru Ionescu",
      role: "Lead CAD Engineer",
      bio: "15+ years experience in automotive design with expertise in CATIA V5 and 3DEXPERIENCE platform.",
      specialties: ["CATIA V5", "Body-in-White", "Automotive Standards"],
      email: "alexandru@20max.com"
    },
    {
      name: "Maria Popescu",
      role: "Senior CAE Analyst",
      bio: "Structural analysis specialist with extensive experience in crashworthiness and NVH simulation.",
      specialties: ["Abaqus", "LS-DYNA", "Crashworthiness", "NVH"],
      email: "maria@20max.com"
    },
    {
      name: "Andrei Constantinescu",
      role: "Manufacturing Engineer",
      bio: "CAM specialist focused on advanced manufacturing processes and tooling optimization.",
      specialties: ["5-Axis Machining", "Tooling Design", "Manufacturing Optimization"],
      email: "andrei@20max.com"
    }
  ]

  const techSpecsData = [
    {
      title: "CAD Software & Tools",
      icon: Settings,
      specs: [
        { label: "Primary CAD", value: "CATIA V5/3DEXPERIENCE", icon: Wrench },
        { label: "Secondary CAD", value: "SolidWorks", icon: Wrench },
        { label: "Data Management", value: "PLM Integration", icon: Database },
        { label: "Standards", value: "ISO 9001, ASME", icon: Award }
      ]
    },
    {
      title: "CAE Simulation Capabilities",
      icon: Zap,
      specs: [
        { label: "FEA Solvers", value: "Abaqus, Nastran, LS-DYNA", icon: Settings },
        { label: "Pre/Post Processing", value: "ANSA, HyperMesh", icon: Code },
        { label: "CFD Analysis", value: "Fluent, Star-CCM+", icon: Zap },
        { label: "Optimization", value: "HyperStudy, modeFRONTIER", icon: Target }
      ]
    },
    {
      title: "Manufacturing Support",
      icon: Wrench,
      specs: [
        { label: "CAM Software", value: "PowerMill, NX CAM", icon: Wrench },
        { label: "Machining Centers", value: "3/5-Axis Support", icon: Settings },
        { label: "Material Support", value: "Metals, Composites", icon: Database },
        { label: "Quality Control", value: "CMM Programming", icon: Award }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      specs: [
        { label: "Security Clearance", value: "NATO Secret Level", icon: Shield },
        { label: "Data Protection", value: "ISO 27001 Aligned", icon: Shield },
        { label: "Export Control", value: "ITAR/EAR Compliant", icon: Shield },
        { label: "Quality System", value: "ISO 9001:2015", icon: Award }
      ]
    }
  ]

  const handleContactSubmit = async (formData) => {
    // Simulate form submission
    console.log('Form submitted:', formData)
    // Add actual form submission logic here
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <div>
      {/* Hero Component Example */}
      <Hero
        title="20MAX Engineering Solutions"
        subtitle="Advanced CAD/CAE/CAM Services"
        description="Professional engineering solutions for automotive and defense industries with uncompromising quality and security."
        primaryCTA={{
          text: "Explore Capabilities",
          onClick: () => console.log('Primary CTA clicked')
        }}
        secondaryCTA={{
          text: "Contact Us",
          onClick: () => console.log('Secondary CTA clicked')
        }}
        backgroundType="gradient"
        size="large"
      />

      {/* Feature Cards Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display text-neutral-900 mb-4">Core Capabilities</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Comprehensive engineering services with industry-leading expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Security & Compliance"
              description="ISO-compliant facilities with classified project capabilities and comprehensive data protection."
              highlights={["NATO Secret Clearance", "ISO 27001 Aligned", "ITAR/EAR Compliant"]}
            />
            <FeatureCard
              icon={Zap}
              title="Rapid Engineering"
              description="Fast ramp-up capabilities with agile methodologies for immediate project support."
              highlights={["48h Team Setup", "Agile Process", "Scalable Resources"]}
            />
            <FeatureCard
              icon={Target}
              title="Precision Design"
              description="Advanced CAD/CAE/CAM capabilities with OEM-grade quality standards."
              highlights={["OEM Standards", "Full Lifecycle", "Technical Excellence"]}
            />
          </div>
        </div>
      </section>

      {/* Process Diagram Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <ProcessDiagram
            title="Our Engineering Process"
            description="From concept to manufacturing, we ensure excellence at every step"
            processes={processSteps}
          />
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display text-neutral-900 mb-4">Technical Capabilities</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Detailed overview of our engineering services and expertise
            </p>
          </div>
          
          <Accordion items={accordionItems} allowMultiple={true} />
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display text-neutral-900 mb-4">Engineering Team</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Meet our experienced engineering professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-display text-neutral-900 mb-4">Technical Specifications</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Comprehensive overview of our tools, capabilities, and standards
            </p>
          </div>
          
          <TechSpecs categories={techSpecsData} />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-display text-neutral-900 mb-6">Start Your Project</h2>
              <p className="text-lead mb-8">
                Ready to discuss your engineering requirements? Contact our team for a detailed consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Secure Communication</h3>
                    <p className="text-neutral-700 text-sm">All communications are handled with strict confidentiality and security protocols.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Expert Consultation</h3>
                    <p className="text-neutral-700 text-sm">Direct access to our senior engineering team for technical discussions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Rapid Response</h3>
                    <p className="text-neutral-700 text-sm">We respond to all inquiries within 24 hours with detailed technical feedback.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm onSubmit={handleContactSubmit} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComponentShowcase