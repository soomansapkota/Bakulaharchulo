import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Don't publish source maps: they expose the original source code.
    sourcemap: false,
  },
})
