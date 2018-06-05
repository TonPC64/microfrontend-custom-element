import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)
Vue.customElement('sellsuki-header', App)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#header')
