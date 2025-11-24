<template>
  <div>
    <h1>showExample</h1>
    <!-- 使用全局注册的 StaticSource 组件 -->
    <StaticSource filePath="static-example" fileName="preview" :height="200" />
  </div>
</template>
<script setup lang="ts">
// StaticSource 组件已在 main.ts 中全局注册，无需导入
// 如果需要使用 getSum 方法，可以这样导入：
// import { getSum } from "static-source";
// console.log('555', getSum(5, 5));
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
