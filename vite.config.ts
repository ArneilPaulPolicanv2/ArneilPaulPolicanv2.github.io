import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: https://arneilpaulpolicanv2.github.io
export default defineConfig({
  plugins: [react()],
  base: '/',
})
