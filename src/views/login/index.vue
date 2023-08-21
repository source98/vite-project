<template>
  <div class="login_container">
    <el-row>
      <el-form
        ref="ruleFormRef"
        label-width="80px"
        class="loginForm"
        :model="loginForm"
        :rules="rules"
      >
        <h1>Hello</h1>
        <h2>欢迎来到我的空间</h2>
        <el-form-item label="用户名" prop="username">
          <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            :prefix-icon="Lock"
            v-model="loginForm.password"
            :show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login_btn"
            type="primary"
            :loading="loading"
            @click="loginHandler"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import type { loginForm } from "@/api/user/type"
import useUserStore from "@/store/modules/user.ts"
import { getTime } from "@/utils/time"
import { Lock, User } from "@element-plus/icons-vue"
import type { FormRules } from "element-plus"
import { ElNotification } from "element-plus"
import { reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
/**按钮状态 */
let loading = ref<boolean>(false)
/**表单ref */
const ruleFormRef = ref()
/**用户仓库 */
let useStore = useUserStore()
/**路由跳转 */
let $router = useRouter()
let $route = useRoute()
/**用户名和密码 */
const loginForm = reactive<loginForm>({ username: "admin", password: "111111" })
/**校验规则 */
const rules = reactive<FormRules<loginForm>>({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 3, max: 5, message: "用户名长度大于3小于5", trigger: "blur" },
  ],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
})

/**登录操作 */
const loginHandler = async () => {
  await ruleFormRef.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    const redirect: any = $route.query.redirect
    $router.push({ path: redirect ? redirect : "/" })
    ElNotification({
      title: `Hi,${getTime()}`,
      message: "欢迎回来",
      type: "success",
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      message: (error as Error).message,
      type: "error",
    })
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/night.jpeg") no-repeat;
  background-size: cover;
  .loginForm {
    position: relative;
    padding: 40px;
    margin: 0 auto;
    border-radius: 20px;
    width: 35%;
    top: 30vh;
    background: url("@/assets/images/night.jpeg") no-repeat;
    background-size: cover;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
