<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  /**SVG浅醉 */
  prefix: {
    type: String,
    default: "#icon-",
  },
  /**图标名称 */
  name: String,
  /**图标颜色 */
  color: {
    type: String,
    default: "",
  },
  /**图标宽度 */
  width: {
    type: String,
    default: "16px",
  },
  /**图标高度 */
  height: {
    type: String,
    default: "16px",
  },
})
</script>

<style scoped></style>
