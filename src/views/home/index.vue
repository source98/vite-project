<template>
  <div>
    <el-card class="box-card">
      <img :src="userStore.avatar" alt="xixi" />
      <div class="box-text">
        <h1>{{ getTime() }}{{ userStore.userName }}</h1>
        <h6 style="font-size: 16px; margin-top: 10px">裹着心的光很亮</h6>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import { getTime } from "@/utils/time";

const userStore = useUserStore()
</script>

<style scoped lang="scss">
::v-deep(.el-card__body) {
  display: flex;
  img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .box-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
