// src/pages/Competencies.jsx - Core Competencies with technical details
import Hero from '../components/ui/Hero'
import Accordion from '../components/ui/Accordion'
import TechSpecs from '../components/ui/TechSpecs'
import ProcessDiagram from '../components/ui/ProcessDiagram'
import { motion } from 'framer-motion'
import { Settings, Zap, Wrench, Database, Code, Award, Target, Shield } from 'lucide-react'

const Competencies = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  // CAD/CAE/CAM workflow process
  const engineeringProcess = [
    {
      title: "CAD Design",
      description: "Complete 3D design and development from concept to detailed engineering drawings with full OEM compliance.",
      icon: Code
    },
    {
      title: "CAE Simulation", 
      description: "Advanced simulation and analysis including structural, thermal, dynamic, and optimization studies.",
      icon: Zap
    },
    {
      title: "CAM Manufacturing",
      description: "Manufacturing preparation with toolpath generation, fixture design, and comprehensive documentation.",
      icon: Wrench
    }
  ]

  // Technical capabilities accordion
  const technicalCapabilities = [
    {
      title: "CAD Design Capabilities",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Complete Engineering Workflow</h4>
            <p className="text-neutral-700 mb-4">
              From concept to detailed design, simulation and manufacturing support, our team ensures 
              technical excellence throughout the full product lifecycle.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Design Specializations</h4>
            <ul className="spec-list">
              <li>Design and development of body-in-white (BIW), chassis, interior components and mechanical assemblies</li>
              <li>Expertise in stamped sheet metal, composites, CNC-machined parts, tooling, fixtures and gauges</li>
              <li>Full 3D/2D deliverables compliant with OEM requirements and automotive industry standards</li>
              <li>Advanced surfacing and complex geometry modeling</li>
              <li>Assembly design and tolerance analysis</li>
              <li>Design for manufacturing (DFM) and design for assembly (DFA)</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 rounded-lg p-4">
            <h5 className="font-medium text-neutral-900 mb-2">Software Expertise</h5>
            <p className="text-sm text-neutral-700">CATIA V5, 3DEXPERIENCE, SolidWorks, AutoCAD</p>
          </div>
        </div>
      )
    },
    {
      title: "CAE Simulation Services",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Structural Analysis (FEA)</h4>
            <ul className="spec-list">
              <li>Linear and non-linear static analysis</li>
              <li>Dynamic analysis including modal, harmonic, and transient response</li>
              <li>Fatigue and durability assessment</li>
              <li>Contact analysis and material modeling</li>
              <li>Composite materials and advanced material behavior</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Specialized Simulations</h4>
            <ul className="spec-list">
              <li>NVH analysis and acoustic optimization</li>
              <li>Multi-body dynamics and kinematic analysis</li>
              <li>Crashworthiness and impact simulation</li>
              <li>Thermal analysis and heat transfer</li>
              <li>CFD: aerodynamics, flow analysis, and thermal management</li>
              <li>Optimization studies and parameter sensitivity analysis</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 rounded-lg p-4">
            <h5 className="font-medium text-neutral-900 mb-2">Solver Portfolio</h5>
            <p className="text-sm text-neutral-700">Abaqus, Nastran, Radioss, LS-DYNA, Fluent, Star-CCM+</p>
          </div>
        </div>
      )
    },
    {
      title: "CAM Manufacturing Support",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Manufacturing Engineering</h4>
            <ul className="spec-list">
              <li>Toolpath generation for 3-axis and 5-axis machining centers</li>
              <li>Advanced milling, turning, and multi-axis strategies</li>
              <li>High-speed machining optimization</li>
              <li>Tool selection and cutting parameter optimization</li>
              <li>Fixture design and workholding solutions</li>
              <li>NC post-processing and machine-specific code generation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Manufacturing Integration</h4>
            <ul className="spec-list">
              <li>Close feedback loop with manufacturing teams</li>
              <li>Process validation and optimization</li>
              <li>Quality control and inspection planning</li>
              <li>Manufacturing documentation and work instructions</li>
              <li>Tool management and lifecycle tracking</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 rounded-lg p-4">
            <h5 className="font-medium text-neutral-900 mb-2">CAM Software</h5>
            <p className="text-sm text-neutral-700">PowerMill, NX CAM, CATIA Manufacturing, Mastercam</p>
          </div>
        </div>
      )
    },
    {
      title: "Quality & Standards Compliance",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Engineering Standards</h4>
            <ul className="spec-list">
              <li>Full compliance with ASME and ISO 9001 standards</li>
              <li>Automotive industry standards (IATF 16949)</li>
              <li>Defense and aerospace standards (AS9100)</li>
              <li>European EN standards compliance</li>
              <li>Customer-specific engineering standards</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Quality Processes</h4>
            <ul className="spec-list">
              <li>Engineering deliverables validated through internal multi-step QA process</li>
              <li>Traceable documentation and controlled revision history for each phase</li>
              <li>Design review processes and approval workflows</li>
              <li>Configuration management and change control</li>
              <li>Continuous improvement and lessons learned integration</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  // Technical specifications data
  const techSpecsData = [
    {
      title: "CAD Design Tools",
      icon: Code,
      specs: [
        { label: "Primary Platform", value: "CATIA V5/3DEXPERIENCE", icon: Wrench },
        { label: "Secondary Tools", value: "SolidWorks, AutoCAD", icon: Wrench },
        { label: "Specializations", value: "Surfacing, Assembly Design", icon: Target },
        { label: "Output Formats", value: "Native, STEP, IGES, Parasolid", icon: Database }
      ]
    },
    {
      title: "CAE Simulation Capabilities",
      icon: Zap,
      specs: [
        { label: "FEA Solvers", value: "Abaqus, Nastran, LS-DYNA", icon: Settings },
        { label: "Pre/Post Processing", value: "ANSA, HyperMesh, HyperView", icon: Code },
        { label: "CFD Capabilities", value: "Fluent, Star-CCM+", icon: Zap },
        { label: "Optimization", value: "HyperStudy, modeFRONTIER", icon: Target }
      ]
    },
    {
      title: "Manufacturing Support",
      icon: Wrench,
      specs: [
        { label: "CAM Software", value: "PowerMill, NX CAM", icon: Wrench },
        { label: "Machine Support", value: "3/4/5-Axis Machining", icon: Settings },
        { label: "Material Expertise", value: "Metals, Composites, Plastics", icon: Database },
        { label: "Post Processors", value: "Custom Machine Configurations", icon: Code }
      ]
    },
    {
      title: "Quality & Compliance",
      icon: Shield,
      specs: [
        { label: "Quality Standards", value: "ISO 9001:2015", icon: Award },
        { label: "Industry Standards", value: "ASME, IATF 16949", icon: Shield },
        { label: "Documentation", value: "Full Traceability", icon: Database },
        { label: "Validation", value: "Multi-Step QA Process", icon: Target }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Core Engineering Competencies"
        subtitle="Complete CAD/CAE/CAM Solutions"
        description="Advanced technical capabilities spanning the complete product development lifecycle. From initial concept through manufacturing support, we deliver precision engineering solutions that meet the most demanding industry standards."
        backgroundType="gradient"
        size="medium"
      />

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <ProcessDiagram
            title="Complete Engineering Workflow"
            description="Integrated CAD/CAE/CAM capabilities ensuring technical excellence throughout the full product lifecycle"
            processes={engineeringProcess}
          />
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">Technical Capabilities</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Detailed overview of our engineering services, tools, and expertise across all disciplines
            </p>
          </motion.div>
          
          <Accordion items={technicalCapabilities} allowMultiple={true} />
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display text-neutral-900 mb-4">Tools & Technologies</h2>
            <p className="text-lead max-w-2xl mx-auto">
              Industry-leading software and methodologies supporting every aspect of product development
            </p>
          </motion.div>
          
          <TechSpecs categories={techSpecsData} />
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 bg-neutral-50">
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
              Specialized knowledge and proven experience across demanding engineering sectors
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="card">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Automotive Engineering</h3>
                </div>
                
                <p className="text-neutral-700 mb-6">
                  Comprehensive automotive design and analysis capabilities covering the complete vehicle 
                  development process from concept to production.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Body Structures</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Body-in-White Design</li>
                      <li>• Closure Systems</li>
                      <li>• Structural Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Chassis Systems</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Suspension Design</li>
                      <li>• Steering Systems</li>
                      <li>• Vehicle Dynamics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">Defense & Aerospace</h3>
                </div>
                
                <p className="text-neutral-700 mb-6">
                  Advanced defense system development with full security clearance and compliance 
                  with international defense standards and regulations.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Weapon Systems</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Remote Weapon Stations</li>
                      <li>• Fire Control Systems</li>
                      <li>• Integration Platforms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Unmanned Systems</h4>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Ground Vehicles</li>
                      <li>• Autonomous Systems</li>
                      <li>• Control Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display mb-6">Ready to Leverage Our Expertise?</h2>
            <p className="text-lead text-neutral-300 mb-8 max-w-2xl mx-auto">
              Discover how our comprehensive CAD/CAE/CAM capabilities can accelerate your 
              next engineering project with precision and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                Discuss Your Project
              </button>
              <button className="btn btn-outline btn-lg">
                Technical Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Competencies