import Vue from 'vue'
import App1 from './App1'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false
console.log('VueCompositionAPI', VueCompositionAPI)
const vue = new Vue({
  render: h => h(App1),
}).$mount('#emp-root')

Vue.use(VueCompositionAPI)
