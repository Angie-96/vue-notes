import Vue from "vue";
import App from "./App.vue";
import Unicon from "vue-unicons";
import { uniEdit, uniSave, uniPlus } from "vue-unicons/src/icons";
import UniqueId from "vue-unique-id";

Unicon.add([uniEdit, uniSave, uniPlus]);
Vue.use(Unicon);
Vue.use(UniqueId);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
