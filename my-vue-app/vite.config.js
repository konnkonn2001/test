import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/test/my-vue-app/',  // ← GitHub Pages の公開パスに合わせる
})
