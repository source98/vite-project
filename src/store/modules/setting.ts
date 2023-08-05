import { defineStore } from "pinia"

const useSettingStore = defineStore("Setting", {
  state: () => {
    return {
      fold: false,//菜单折叠和收起的切换
    }
  },
})

export default useSettingStore
