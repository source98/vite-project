<template>
  <div>
    <h1>测试scss1</h1>
  </div>
</template>

<script setup lang="ts">
import { reqLogin } from "@/api/user/index.ts";
import { onMounted } from "vue";

onMounted(() => {
  reqLogin({ username: "admin", password: "111111" }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
