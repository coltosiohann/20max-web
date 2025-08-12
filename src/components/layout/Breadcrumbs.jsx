import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumbs = () => {
  const location = useLocation()
  
  const pathMapping = {
    '/': 'Home',
    '/about': 'About Us',
    '/competencies': 'Core Competencies',
    '/philosophy': 'Engineering Philosophy',
    '/quality': 'Quality & Security',
    '/location': 'Location Advantage',
    '/business': 'Business Models',
    '/experience': 'Experience & Partnerships',
    '/contact': 'Contact Us'
  }

  const pathSegments = location.pathname.split('/').filter(segment => segment)
  
  if (location.pathname === '/') return null

  return (
    <nav className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center space-x-2 text-sm">
          <Link
            to="/"
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
          >
            <Home size={16} className="mr-1" />
            Home
          </Link>
          
          {pathSegments.map((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/')
            const isLast = index === pathSegments.length - 1
            const title = pathMapping[path] || segment

            return (
              <div key={path} className="flex items-center">
                <ChevronRight size={16} className="text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">{title}</span>
                ) : (
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    {title}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Breadcrumbs