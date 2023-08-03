import type { RouteRecordRaw } from "vue-router"
export interface UserState {
  token: null | string
  menuList: RouteRecordRaw[]
}
