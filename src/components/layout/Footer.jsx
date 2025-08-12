import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900" style={{ color: '#000000 !important' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ color: '#000000 !important' }}>
              20<span className="text-red-500">MAX</span>
            </div>
            <p className="mb-4" style={{ color: '#000000 !important' }}>
              Advanced engineering solutions for automotive and defense industries.
              Precision, reliability, and innovation in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#000000 !important' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  style={{ color: '#000000 !important', textDecoration: 'none !important' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/competencies" 
                  style={{ color: '#000000 !important', textDecoration: 'none !important' }}
                >
                  Core Competencies
                </Link>
              </li>
              <li>
                <Link 
                  to="/quality" 
                  style={{ color: '#000000 !important', textDecoration: 'none !important' }}
                >
                  Quality & Security
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  style={{ color: '#000000 !important', textDecoration: 'none !important' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#000000 !important' }}>Contact Information</h3>
            <div className="space-y-2">
              <p style={{ color: '#000000 !important' }}>Email: info@20max.com</p>
              <p style={{ color: '#000000 !important' }}>Phone: +40 XXX XXX XXX</p>
              <p style={{ color: '#000000 !important' }}>Address: Craiova, Romania</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p style={{ color: '#000000 !important' }}>&copy; 2025 20MAX. All rights reserved. | Engineering the Future with Precision</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer