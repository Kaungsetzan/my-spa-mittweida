import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-spa-mittweida/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],

})
