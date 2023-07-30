import type { App, Component } from "vue"
import SvgIcon from "./SvgIcon/index.vue"
const components: { [name: string]: Component } = { SvgIcon }
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
