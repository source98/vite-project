import App from "@/App.vue"
import globalComponents from "@/components"
import pinia from "@/store"
import "@/styles/index.scss"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import router from "./router"
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import "virtual:svg-icons-register"
import { createApp } from "vue"

const app = createApp(App)
/**注册全局组件 */
app.use(globalComponents)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount("#app")
