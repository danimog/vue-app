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
    path: "/listaSentieri",
    name: "ListaSentieri",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListaSentieri.vue")
  },
  {
    path: "/tuttiSentieri",
    name: "TuttiSentieri",
    component: () =>
      import(/* webpackChunkName: "sentieri" */ "../views/TuttiSentieri.vue")
  },
  {
    path: "/sceltaPaesi",
    name: "SceltaPaesi",
    component: () =>
      import(/* webpackChunkName: "sentieri" */ "../views/SceltaPaesi.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
