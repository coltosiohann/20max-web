import { Link } from 'react-router-dom'

const footerStyles = {
  color: '#000000 !important',
  textDecoration: 'none !important'
}

const Footer = () => {
  return (
    <footer className="bg-gray-900" style={footerStyles}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={footerStyles}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div style={footerStyles}>
            <div className="text-2xl font-bold mb-4" style={footerStyles}>
              <span style={footerStyles}>20</span><span style={{ color: '#ef4444' }}>MAX</span>
            </div>
            <p className="mb-4" style={footerStyles}>
              Advanced engineering solutions for automotive and defense industries.
              Precision, reliability, and innovation in every project.
            </p>
          </div>

          {/* Quick Links */}
          <div style={footerStyles}>
            <h3 className="text-lg font-semibold mb-4" style={footerStyles}>Quick Links</h3>
            <ul className="space-y-2" style={footerStyles}>
              <li style={footerStyles}>
                <Link to="/about" style={footerStyles}>About Us</Link>
              </li>
              <li style={footerStyles}>
                <Link to="/competencies" style={footerStyles}>Core Competencies</Link>
              </li>
              <li style={footerStyles}>
                <Link to="/quality" style={footerStyles}>Quality & Security</Link>
              </li>
              <li style={footerStyles}>
                <Link to="/contact" style={footerStyles}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={footerStyles}>
            <h3 className="text-lg font-semibold mb-4" style={footerStyles}>Contact Information</h3>
            <div className="space-y-2" style={footerStyles}>
              <p style={footerStyles}>Email: info@20max.com</p>
              <p style={footerStyles}>Phone: +40 XXX XXX XXX</p>
              <p style={footerStyles}>Address: Craiova, Romania</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center" style={footerStyles}>
          <p style={footerStyles}>&copy; 2025 20MAX. All rights reserved. | Engineering the Future with Precision</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer