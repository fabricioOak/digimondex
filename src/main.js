import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import BaseButton from '@/components/BaseButton.vue'

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
