import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { copyFileSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

// Plugin to copy static project pages
const copyStaticPages = () => {
  return {
    name: 'copy-static-pages',
    writeBundle() {
      try {
        const sourceDir = 'public/project'
        const targetDir = 'dist/project'
        
        // Create target directory
        mkdirSync(targetDir, { recursive: true })
        
        // Copy all HTML files
        const files = readdirSync(sourceDir)
        files.forEach(file => {
          if (file.endsWith('.html')) {
            copyFileSync(join(sourceDir, file), join(targetDir, file))
            console.log(`Copied: ${file} to dist/project/`)
          }
        })
      } catch (error) {
        console.log('No static project pages to copy or error occurred:', error.message)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    copyStaticPages(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Mon3em Portfolio',
        short_name: 'Portfolio',
        description: 'Abdelmonem Hatem Portfolio',
        theme_color: '#1e3a8a',
        background_color: '#030014',
        display: 'standalone',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
            },
          },
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
            },
          },
        ],
      },
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@mui/material', '@mui/icons-material', '@headlessui/react'],
          animations: ['framer-motion', 'gsap', 'aos'],
          utils: ['clsx', 'tailwind-merge']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
