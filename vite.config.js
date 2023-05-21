import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
},({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})


