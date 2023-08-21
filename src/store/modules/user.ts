/**用户登录接口 */
import { reqLogin, reqUserInfo } from "@/api/user"
import type { loginForm, loginResponseData } from "@/api/user/type.ts"
import { constantRoute } from "@/router/routes.ts"
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from "@/utils/token.ts"
import { defineStore } from "pinia"
import type { UserState } from "./type/type.ts"

const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuList: constantRoute,
      userName: "",
      avatar: "",
    }
  },
  actions: {
    /**用户登录方法 */
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token as string
        /**本地存储token */
        // localStorage.setItem("TOKEN", (result.data.token as string))
        SET_TOKEN(result.data.token as string)
        return "OK"
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },

    /**获取用户信息 */
    async userInfo() {
      const result = await reqUserInfo()
      if (result.code === 200) {
        this.userName = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      }else{
        return Promise.reject('获取用户信息失败')
      }
    },

    /**退出 */
    logOut() {
      this.token = ""
      this.userName = ""
      this.avatar = ""
      REMOVE_TOKEN()
    },
  },
  getters: {},
})

export default useUserStore
