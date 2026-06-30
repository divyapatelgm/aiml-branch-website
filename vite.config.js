import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [
    react(),
    command === 'build' && viteImagemin({
      webp: {
        quality: 70
      },
      jpg: {
        quality: 70
      },
      png: {
        quality: 70
      }
    })
  ].filter(Boolean),
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and related libraries
          vendor: ['react', 'react-dom'],
          // Router chunk
          router: ['react-router-dom'],
          // UI libraries chunk
          ui: ['lucide-react', '@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core'],
          // Animation and utility libraries
          utils: ['react-countup', 'react-intersection-observer', 'swiper']
        }
      }
    },
    // Increase chunk size warning limit to reduce noise
    chunkSizeWarningLimit: 1000
  }
}))
