import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-spa-mittweida/',
  plugins: [react()],
  server: {
    host: true,
    port: 5273
  }
})
