import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/20max-web/',  // Changed from /20max-website/
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion', 
      'lucide-react',
      '@formspree/react',
      'clsx'
    ]
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})