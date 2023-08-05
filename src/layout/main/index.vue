<template>
  <!-- 路由组件  -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染子路由  -->
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all .3s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
