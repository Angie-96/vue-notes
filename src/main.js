import Vue from "vue";
import App from "./App.vue";
import Unicon from "vue-unicons";
import { uniEdit, uniSave, uniPlus, uniTrashAlt } from "vue-unicons/src/icons";

Unicon.add([uniEdit, uniSave, uniPlus, uniTrashAlt]);
Vue.use(Unicon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
