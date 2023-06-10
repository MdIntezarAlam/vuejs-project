import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage";
import HomeLogin from "./components/HomeLogin.vue";
import HomeSignup from "./components/HomeSignup.vue";
import HomeLogout from "./components/HomeLogout.vue";
import HomeContact from "./components/HomeContact.vue";
import HomeAbout from "./components/HomeAbout.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "HomeSignup",
    component: HomeSignup,
  },
  {
    path: "/login",
    name: "HomeLogin",
    component: HomeLogin,
  },
  {
    path: "/logout",
    name: "HomeLogout",
    component: HomeLogout,
  },
  {
    path: "/about",
    name: "HomeAbout",
    component: HomeAbout,
  },
  {
    path: "/contact",
    name: "HomeContact",
    component: HomeContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
