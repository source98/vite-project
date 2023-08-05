<template>
  <div class="top_container">
    <div class="row-let">
      <!-- 面包屑导航 -->
      <Breadcrumb />
    </div>
    <div class="row-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "./breadcrumb/index.vue";
import Setting from "./setting/index.vue";
</script>

<style scoped lang="scss">
.top_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(232, 223, 223),
    rgb(200, 178, 178),
    rgb(179, 169, 169)
  );
  .row-let {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 20px;
  }
  .row-right {
    display: flex;
    margin-right: 20px;
    align-items: center;
  }
}
</style>
