import StaticSource from "./static-import/index.vue";
import { getSum } from "./commonMethod/sum.js";

const components = [StaticSource];

// Vue 3 插件安装函数
const install = app => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

// 导出组件供单独使用
export { StaticSource, getSum };

// 默认导出插件对象（符合 Vue 3 插件规范）
export default {
  install,
  getSum,
  StaticSource
};
