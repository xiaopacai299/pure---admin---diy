# 一、如何发布一个npm包

## 1.创建需要发布的方法和组件的包

在src目录下建一个package文件夹，package文件夹中有需要导入的方法和组件文件夹以及入口文件index.js
直接导出方法和组件即可，不需要额外的操作。？？？？

# 二、对包进行打包

package.json

```
"package": "rimraf staticSource && vite build --mode lib"
```

vite.config.ts

```
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION, VITE_PUBLIC_PATH } =
    wrapperEnv(loadEnv(mode, root));

  // 检测是否是库模式构建（通过 mode === 'lib' 来判断）
  const isLibMode = mode === "lib";

  if (isLibMode) {
    // 库模式配置
    return {
      build: {
        lib: {
          entry: pathResolve("./src/package/index.js", import.meta.url),
          name: "staticSource",
          fileName: "staticSource",
          formats: ["es", "umd"]
        },
        outDir: "staticSource",
        rollupOptions: {
          external: ["vue"],
          output: {
            globals: {
              vue: "Vue"
            }
          }
        }
      },
      resolve: {
        alias
      },
      plugins: getPluginsList(VITE_CDN, VITE_COMPRESSION)
    };
  }
}
```

打包出来后在最外层目录输出打包后的文件

# 三、发布到npm

## 1.初始化打包的文件

cd进入到包文件夹中，使用pnpm init，创建package.json模板

## 2.发布到npm仓库

（1）注册npm账号
（2）设置npm源。不能使用淘宝源
（3）pnpm adduser 登录npm账号，建立连接
（4）pnpm publish 发布到npm中

# 四、使用自己的npm包

1.下载2.如何使用vue组件
main.ts

```
import staticSource from "static-source";
// 导入组件库样式
import "static-source/staticSource.css";
// 安装 static-source 插件
app.use(staticSource);
```

2.如何使用方法
