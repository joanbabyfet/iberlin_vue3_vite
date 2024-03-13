import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入组件
import path from 'path'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue()
  ],

  resolve: {
    //别名配置, 因路由文件用@/views/xxx 不设置会报错
    alias: {
      '~@': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src/assets'),
    },
  },
})
