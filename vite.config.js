import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Required for Render's external access
    port: process.env.PORT || 5173, // Uses Render's PORT if available, otherwise 5173
    strictPort: true, // Fail if port is unavailable
  },
  preview: {
    host: '0.0.0.0', // Also needed for 'vite preview' command
    port: process.env.PORT || 5173,
  }
})
