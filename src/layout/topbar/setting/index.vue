<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="changeRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    @click="changeFullScreen"
    circle
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" style="width: 24px; height: 24px" />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useSettingStore from "@/store/modules/setting";
import useUserStore from "@/store/modules/user";
import { useRoute, useRouter } from "vue-router";

const settingStore = useSettingStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

/**刷新 */
const changeRefresh = () => {
  settingStore.refsh = !settingStore.refsh
}

/**全屏 */
const changeFullScreen = () => {
  let flag = document.fullscreenElement
  return flag
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen()
}

/**退出 */
const logOut = () => {
  userStore.logOut()
  $router.push({
    path: "/login",
    query: { redirect: $route.path },
  })
}
</script>

<style scoped lang="scss">
img {
  margin: 0 10px;
  border-radius: 50%;
}
</style>
