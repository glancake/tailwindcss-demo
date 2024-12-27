import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  },
  // server: {
  //   // http://localhost:5173/api/login -> http://www.test.com/login
  //   proxy: {
  //     //api是自行设置的请求前缀，任何请求路径以/api开头的请求将被代理到对应的target目标
  //     '/api': {
  //       target: 'https://121d-112-53-105-99.ngrok-free.app',   //目标域名
  //       changeOrigin: true, //需要代理跨域
  //       rewrite: (path) => path.replace(/^\/api/, ''), //路径重写，把'/api'替换为''
  //     },
  //   },
  // },
})
