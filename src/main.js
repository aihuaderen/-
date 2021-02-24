import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import './utils/rem'
import './utils/veevalidate'

Vue.config.productionTip = false

new Vue ({
  render : h => h(App),
  router,
  store

}).$mount('#app')