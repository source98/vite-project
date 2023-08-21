/**路由鉴劝 */
import router from "@/router"
import pinia from "@/store"
import useUserStore from "@/store/modules/user"
import NProgress from "nprogress"
NProgress.configure({ showSpinner: false })

/**获取用户信息 */
let userStore = useUserStore(pinia)

/**全局前置守卫 */
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = to.meta.title;
  //开启进度条
  NProgress.start()
  //判断用户是否登录
  let isToken = userStore.token
  //获取用户名称
  let userName = userStore.userName

  if (isToken) {
    if (to.path === "/login") {
      next({ path: "/home" })
    } else {
      if (userName) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          userStore.logOut()
          next({ path: "/login", query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path === "/login") {
      next()
    } else {
      next({ path: "/login", query: { redirect: to.path } })
    }
  }
  next()
})

/**全局后置守卫 */
router.afterEach((to: any, from: any) => {
  //关闭进度条
  NProgress.done()
})
