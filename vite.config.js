import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Drew017.github.io/pagina-alberto/dist/',
  build:{
    outDir: 'dist',
  },
  plugins: [react()],
})
