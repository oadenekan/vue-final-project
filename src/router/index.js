import { authUser } from "@/composables/auth-user";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/sign-up",
    name: "SignupView",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/products",
    name: "ProductsView",
    component: () => import("../views/Products.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products/:product",
    name: "ProductView",
    component: () => import("../views/Product.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Use the authUser function as a Vue Router beforeEach guard
router.beforeEach(async (to, from, next) => {
  // Check if the route requires authentication
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth) {
    // Authentication Route
    await authUser(to, from, next);
  } else {
    // Allow access to route
    next();
  }
});
export default router;
