<template>
  <!-- 路由组件  -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染子路由  -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useSettingStore from "@/store/modules/setting.ts";
import { nextTick, ref, watch } from "vue";

const settingStore = useSettingStore()

let flag = ref(true)
/**监听 */
watch(
  () => settingStore.refsh,
  () => {
    flag.value = !flag.value
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
