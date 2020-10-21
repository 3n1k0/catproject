import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
    {
    path: "/random",
    name: "Random",
    // component: Random
  },
      {
    path: "/detail",
    name: "Detail",
    // component: Random
  },

];

const router = new VueRouter({
   mode: "history",
  routes
});

export default router;
