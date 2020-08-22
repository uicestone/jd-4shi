import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("../views/SishiIndex.vue"),
  },
  {
    path: "/route/:name",
    name: "之路",
    component: () => import("../views/RouteIndex.vue"),
  },
  {
    path: "/post/:id",
    name: "文章详情",
    component: () => import("../views/PostDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
