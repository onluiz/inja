import Vue from 'vue'
import Vuetify from 'vuetify'
import Ingressotify from '@/components/Ingressotify/'
import App from './App'
import router from './router'

/** styles */
import 'vuetify/dist/vuetify.css'
import './scss/styles.scss'

Vue.use(Vuetify)
Vue.use(Ingressotify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
