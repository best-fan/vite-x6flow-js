import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
    })
  ],
  server:{
    port:5899
  }
})
