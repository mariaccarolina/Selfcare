// src/Routes/Routes.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home/index.vue";
import Cart from "../Views/Cart/index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/carrinho", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
