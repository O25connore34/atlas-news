import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { atlasCmsPlugin } from './cms/plugin.ts'

export default defineConfig({
  plugins: [react(), atlasCmsPlugin()],
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
  },
})
