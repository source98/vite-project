import App from '@/App.vue'
import globalComponents from "@/components"
import "@/styles/index.scss"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'

const app = createApp(App)
/**注册全局组件 */
app.use(globalComponents)

app.use(ElementPlus,{
  locale: zhCn,
})
app.mount('#app')
