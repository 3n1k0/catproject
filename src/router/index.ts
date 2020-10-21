import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import DetailPage from "../views/DetailPage.vue";
import store from '../store'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/random",
    name: "Random"
    // component: Random
  },
  {
   path: "/detailpage/:breedId",
    name: "Detail",
    component: DetailPage,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
