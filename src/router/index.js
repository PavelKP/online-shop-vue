import Vue from "vue";
import Router from "vue-router";
import Cart from "../pages/cart.vue";
import ProductList from "../pages/product-list.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active-exact",
  routes: [
    {
      path: "/",
      redirect: "/product-list",
    },
    {
      path: "/product-list",
      component: ProductList,
    },
    {
      path: "/cart",
      component: Cart,
    }
  ],
});
