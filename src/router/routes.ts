/**常量路由 */
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: "登录",
      hidden: false,
      icon:'House'
    },
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout", //命名路由
    meta: {
      title: "layout",
      hidden: false,
      icon:'House'
    },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon:'House'
        },
      },
      {
        path: "/test",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "测试",
          hidden: false,
          icon:'House'
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: false,
      icon:'House'
    },
  },
  {
    path: "/:pathMath(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意",
      hidden: false,
      icon:'House'
    },
  },
]
