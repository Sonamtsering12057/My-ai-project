import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/',  // Ensures correct asset loading
  build: {
    outDir: 'dist',  // Ensures output directory is correct
  }
})
