import { resolve } from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      markup: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
