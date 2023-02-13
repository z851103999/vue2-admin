import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element-ui.js'
import './permission' 
import 'normalize.css'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
