<template>
  <el-icon class="icon" @click="changeIcon">
    <component :is="settingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <template class="items">
        <el-icon style="margin-right: 5px">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span class="meta_title">
          {{ item.meta.title }}
        </span>
      </template>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useSettingStore from "@/store/modules/setting.ts";
import { useRoute } from "vue-router";

// 菜单折叠还是打开
const settingStore = useSettingStore()
const $route = useRoute()

const changeIcon = () => {
  settingStore.fold = !settingStore.fold
}
</script>

<style scoped lang="scss">
.icon {
  margin-right: 20px;
}
.meta_title {
  cursor: pointer;
}
.items {
  display: flex;
  align-items: center;
}
</style>
