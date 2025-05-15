import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import History from "../views/History.vue";
import Global from "../views/Global.vue";
import Culture from "../views/Culture.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/history",
      name: "history",
      component: History,
    },
    {
      path: "/global",
      name: "global",
      component: Global,
    },
    {
      path: "/culture",
      name: "culture",
      component: Culture,
    },
  ],
});

export default router;
