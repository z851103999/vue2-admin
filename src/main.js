import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element-ui.js'
import './permission'
import 'normalize.css'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false;

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
