import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'  // ← This line MUST be here and FIRST

// Add error boundary for debugging
import ErrorBoundary from './components/ui/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

// Force Framer Motion animations to trigger on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('scroll'));
  }, 50);
});
