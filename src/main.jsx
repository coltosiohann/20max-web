import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App.jsx'
import './index.css'  // ← This line MUST be here and FIRST

// Add error boundary for debugging
import ErrorBoundary from './components/ui/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {/* Vercel Analytics - tracks page views and custom events */}
      <Analytics />
      {/* Vercel Speed Insights - tracks Core Web Vitals */}
      <SpeedInsights />
    </ErrorBoundary>
  </React.StrictMode>,
)

// Force Framer Motion animations to trigger on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'));
  }, 50);
});

// Optional: Track initial page load for 20MAX analytics
window.addEventListener('load', () => {
  // Track page load performance
  if (typeof window !== 'undefined' && window.performance) {
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    
    // You can use this data later with custom analytics
    console.log('20MAX Page Load Time:', loadTime + 'ms');
  }
});

// Optional: Track scroll depth for engagement analytics
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
  const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  if (scrollDepth > maxScrollDepth) {
    maxScrollDepth = scrollDepth;
  }
});

// Track when user leaves the page (for engagement analytics)
window.addEventListener('beforeunload', () => {
  // This data can be useful for understanding user engagement
  console.log('Max scroll depth:', maxScrollDepth + '%');
});