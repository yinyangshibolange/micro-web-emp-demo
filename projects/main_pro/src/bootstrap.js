import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from "./router"

Vue.use(VueRouter)
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#emp-root')
