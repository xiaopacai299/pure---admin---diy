<template>
  <div class="staticSource">
    <img
      v-for="(imgUrl, index) in getAsset()"
      :key="index"
      class="staticSource-img"
      :src="imgUrl"
      :alt="fileName"
      :height="height + 'px'"
    />
  </div>
</template>
<script setup lang="ts">
import { type PropType } from "vue";
defineOptions({
  name: "StaticSource"
});
const { filePath, fileName, height, ext, extensions } = defineProps({
  filePath: {
    type: String,
    required: true
  },
  fileName: {
    type: String as PropType<string>,
    required: true,
    description: "文件名"
  },
  height: {
    type: Number,
    default: 100
  },
  ext: {
    type: String,
    default: "png"
  },
  extensions: {
    type: Array as PropType<string[]>,
    default: () => ["png", "jpg", "jpeg", "gif", "svg", "webp"]
  }
});

// 这是vite提供的导入方式，可以导入所有匹配的文件，**表示任意目录，可以递归，*表示任意文件
const assetsFile = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,gif,svg,webp}",
  {
    eager: true, // 立即导入所有匹配的文件
    import: "default" // 导入方式,图片资源就是url字符串
  }
);
const getAsset = (): any => {
  console.log("123", assetsFile);
  const list = [];
  for (const key in assetsFile) {
    console.log("456", key);
    if (key.endsWith(".svg")) {
      console.log("789", `${assetsFile[key]}?url`);
      list.push(`${key}?url`);
    } else {
      list.push(key);
    }
  }
  return list;
};
</script>
<style scoped lang="scss">
.staticSource {
  .staticSource-img {
    padding: 5px;
    margin: 5px;
    object-fit: cover;
    object-fit: contain;
    object-position: center;
    border: 1px solid red;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 green;
  }
}
</style>
