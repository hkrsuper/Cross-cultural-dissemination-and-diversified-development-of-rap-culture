import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
  {
    path: "/global",
    name: "Global",
    component: () => import("../views/Global.vue"),
  },
  {
    path: "/culture",
    name: "Culture",
    component: () => import("../views/Culture.vue"),
  },
  {
    path: "/future",
    name: "Future",
    component: () => import("../views/Future.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
