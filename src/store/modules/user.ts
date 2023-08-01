/**用户登录接口 */
import { reqLogin } from "@/api/user"
import type { loginForm } from "@/api/user/type.ts"
import { defineStore } from "pinia"
const useUserStore = defineStore("User", {
  state: () => {
    return {
      token: localStorage.getItem("TOKEN"),
    }
  },
  actions: {
    /**用户登录方法 */
    async userLogin(data: loginForm) {
      const result:any = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token
        /**本地存储token */
        localStorage.setItem("TOKEN", result.data.token)
        return 'OK'
      }else{
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
