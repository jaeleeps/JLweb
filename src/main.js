
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.config.productionTip = false

Vue.use(VueFullPage);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
