import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入组件
import path from 'path'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({ mode }) => {
  //获取env环境变量
  const env = loadEnv(mode, process.cwd())
  
  return defineConfig({
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
  
    server: {
      host: true,
      port: 3002, //自定义端口
      https: false, //是否开启https, 默认false
      open: false, //是否自动打开浏览器, 默认false
      proxy: {
        '/api': { //遇到/api就去找代理
          target: env.VITE_BASE_URL, //代理接口地址
          ws: false,  //是否代理websocket
          changeOrigin: true, //是否跨域
          secure: false,  //是否https接口
          //rewrite: path => path.replace(/^\/api/, '/') //把/api重写为/
        },
      },
    }
  })
}