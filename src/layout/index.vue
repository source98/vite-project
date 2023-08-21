<template>
  <div class="container">
    <!-- 左侧菜单栏 -->
    <div
      class="layout_slider"
      :class="{ fold: settingStore.fold ? true : false }"
    >
      <!-- logo -->
      <Logo />
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :collapse="settingStore.fold"
          :collapse-transition="true"
          background-color="#001529"
          text-color="white"
          :default-active="$route.path"
        >
          <Menu :menuList="store.menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 头部 -->
    <div
      class="layout_topbar"
      :class="{ fold: settingStore.fold ? true : false }"
    >
      <Topbar />
    </div>
    <!-- 展示部分 -->
    <div
      class="layout_main"
      :class="{ fold: settingStore.fold ? true : false }"
    >
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from "@/store/modules/setting.ts"
import useUserStore from "@/store/modules/user.ts"
import { useRoute } from "vue-router"
import Logo from "./logo/index.vue"
import Main from "./main/index.vue"
import Menu from "./menu/index.vue"
import Topbar from "./topbar/index.vue"

const $route = useRoute()

const store = useUserStore()
const settingStore = useSettingStore()
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: white;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - 50px);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: 50px;
      p{
        display: none;
      }
    }
  }
  .layout_topbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-topbar-height;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - 50px);
      left: 50px;
    }
  }
  .layout_main {
    position: absolute;
    top: $base-topbar-height;
    left: $base-menu-width;
    padding: 10px;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-topbar-height);
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - 50px);
      left: 50px;
    }
  }
}
</style>
