import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Competencies from './pages/Competencies'
import Philosophy from './pages/Philosophy'
import Quality from './pages/Quality'
import Location from './pages/Location'
import Business from './pages/Business'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ComponentShowcase from './pages/ComponentShowcase'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competencies" element={<Competencies />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/location" element={<Location />} />
          <Route path="/business" element={<Business />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App