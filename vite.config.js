import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Видаляємо блок build: { minify: 'esbuild' }, 
  // Vite 8 сам розбереться, якщо esbuild встановлений
})