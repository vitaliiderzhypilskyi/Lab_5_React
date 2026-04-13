import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Додай цей рядок для коректних шляхів
  build: {
    minify: 'esbuild', // Переконайся, що використовується швидкий мініфікатор
  }
})