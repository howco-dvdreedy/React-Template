import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';  // --> import it

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()], // --> add here
  base:  '/React-Template/'
})
