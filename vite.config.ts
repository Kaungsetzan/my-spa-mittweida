import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-spa-mittweida/', // Keep this if your repo name is 'my-spa-mittweida'
  build: {
    outDir: 'docs' // ✅ Send build output to /docs for GitHub Pages
  },
  plugins: [react()],
  server: {
    host: true,
    port: 5273
  }
})
