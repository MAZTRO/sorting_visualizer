import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    host: 'localhost'
  },
  preview: {
    port: 10080
  },
  build: {
    outDir: './build/dist',
    emptyOutDir: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      pages: '/src/pages',
      utils: '/src/utils'
    }
  }
})
