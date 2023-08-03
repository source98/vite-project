<template>
  <div class="container">
    <div class="layout_slider">
      <!-- logo -->
      <Logo />
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="store.menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_topbar">头部</div>
    <div class="layout_main">中部</div>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue"
import Menu from "./menu/index.vue"
import useUserStore from "@/store/modules/user.ts"

const store = useUserStore()
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: red;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: white;
    .scrollbar {
      width: 100%;
      height: calc(100vh - 50px);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_topbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-topbar-height;
    background: blue;
  }
  .layout_main {
    position: absolute;
    top: $base-topbar-height;
    left: $base-menu-width;
    padding: 10px;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-topbar-height);
    background: yellow;
    overflow: auto;
  }
}
</style>
