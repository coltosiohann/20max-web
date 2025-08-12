// src/components/layout/Layout.jsx - Enhanced with accessibility
import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'
import PageTransition from './PageTransition'
import ErrorBoundary from '../ui/ErrorBoundary'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Breadcrumbs />
        <main 
          id="main-content" 
          className="flex-grow"
          role="main"
          aria-label="Main content"
        >
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              {children}
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default Layout