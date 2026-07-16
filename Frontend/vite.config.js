import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Minimize bundle size
    minify: 'esbuild',
    sourcemap: false,
    // Inline small assets
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching
        manualChunks: {
          // Core React runtime
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library (large, rarely changes)
          'vendor-motion': ['framer-motion'],
          // Icon library
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },

  // Optimize deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },

  server: {
    // Proxy /api/* to Express backend during development
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
