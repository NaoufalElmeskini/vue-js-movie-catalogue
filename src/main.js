import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("getYear", function (value) {
  return new Date(value).getFullYear();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
