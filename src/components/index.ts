import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import type { App, Component } from "vue"
import SvgIcon from "./SvgIcon/index.vue"

const components: { [name: string]: Component } = { SvgIcon }

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
    /**注册Icon 全局组件 */
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
