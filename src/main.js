import Vue from "vue";
import App from "./App.vue";
import Unicon from "vue-unicons";
import { uniEdit, uniSave, uniPlus, uniTrashAlt } from "vue-unicons/src/icons";
import VueMasonry from "vue-masonry-css";

Unicon.add([uniEdit, uniSave, uniPlus, uniTrashAlt]);
Vue.use(Unicon);
Vue.use(VueMasonry);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
