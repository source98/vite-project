<template>
  <div class="logo">
    <img src="../../../public/dog.jpg" />
    <p v-if="!settingStore.fold">VUE+TS练习平台</p>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from "@/store/modules/setting.ts";

const settingStore = useSettingStore()
</script>

<style scoped lang="scss">
.logo {
  height: 50px;
  width: 100%;
  padding-left: 10px;
  display: flex;
  // justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }
  p {
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>
