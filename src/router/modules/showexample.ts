const Layout = () => import("@/layout/index.vue");

export default {
  path: "/showexample",
  name: "ShowExample",
  component: Layout,
  redirect: "/showexample/index",
  meta: {
    icon: "ep/home-filled",
    title: "示例",
    rank: 0
  },
  children: [
    {
      path: "/showexample/index",
      name: "ShowExampleIndex",
      component: () => import("@/views/show-example/index.vue"),
      meta: {
        title: "示例",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
