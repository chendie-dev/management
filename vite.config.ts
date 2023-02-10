import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import styleImport,{AntdResolve} from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves:[
        AntdResolve()
      ]
    }) 
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          'primary-color': '#644AFF'
        },
        javascriptEnabled: true
      }
    }
  },

  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')//路径别名
    }
  }
})
