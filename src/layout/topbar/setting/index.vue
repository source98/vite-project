<template>
  <el-button icon="Refresh" circle></el-button>
  <el-button icon="FullScreen" circle></el-button>
  <el-button icon="Setting" circle></el-button>
  <img src="../../../../public/dog.jpg" style="width: 24px; height: 24px" />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
  margin: 0 10px;
}
</style>
