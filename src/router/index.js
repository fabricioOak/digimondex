import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/name",
    name: "NameSearch",
    component: () => import("../views/NameSearch.vue")
  },
  {
    path: "/level",
    name: "LevelSearch",
    component: () => import("../views/LevelSearch.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
