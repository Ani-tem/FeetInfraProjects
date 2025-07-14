import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'Frontend',            // 👈 Tells Vite where to find index.html
  plugins: [react()],
  build: {
    outDir: '../dist',         // 👈 Optional: to avoid building inside the source folder
    emptyOutDir: true,
  },
})
