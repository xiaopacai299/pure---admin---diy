<template>
  <div>
    <h1>showExample</h1>
    <StaticSource filePath="static-example" fileName="preview" ext="jpg" />
    123
    <img :src="avatarSvg" alt="preview" height="100px" />
  </div>
</template>
<script setup lang="ts">
import StaticSource from "@/components/staticSource/index.vue";
// 使用 ?url 后缀将 SVG 导入为 URL 字符串，用于 <img> 标签
import avatarSvg from "@/assets/login/avatar.svg?url";

defineOptions({
  name: "ShowExample"
});
</script>
<style scoped lang="scss">
.showExample {
  width: 100%;
  height: 100%;
}
</style>
