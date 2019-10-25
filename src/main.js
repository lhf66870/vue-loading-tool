import Vue from "vue";
import App from "./App.vue";
import install from "./plugins/index.js";

Vue.config.productionTip = false;
Vue.use(install)
new Vue({
  render: h => h(App)
}).$mount("#app");
