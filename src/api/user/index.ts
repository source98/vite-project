import request from "@/utils/request"
import type {
  loginForm,
  loginResponseData,
  userInfoResponseData,
} from "./type.ts"
/**统一管理接口 */
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

/**登录 */
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

/**获取用户信息 */
export const reqUserInfo = () =>
  request.get<any, userInfoResponseData>(API.USERINFO_URL)
