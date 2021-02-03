import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
import "@/assets/css/tailwind.css";
import store from "./components/store/index.js";
//Basecomponents
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
//import BaseDialog from "./components/ui/BaseDialog.vue";

//router pages
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});
const BaseDialog = defineAsyncComponent(() => import("./components/ui/BaseDialog.vue"));
const app = createApp(App);
// console.log(app);
app.use(store);
app.use(router);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.mount("#app");
