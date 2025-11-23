# 功能

利用vite提供的api import.meta.golb 批量导出某个文件夹中的资源.这个导出所有的图片，自定图片的样式。

# 技术

这是vite提供的导入方式，可以导入所有匹配的文件，\**表示任意目录，可以递归，*表示任意文件

```
const assetsFile = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,gif,svg,webp}", {
  eager: true, // 立即导入所有匹配的文件
  import: "default" // 导入方式,图片资源就是url字符串
})
```
