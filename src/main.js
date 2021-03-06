import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../node_modules/ecored-base-pkg/src/store/index.js'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/_styles.sass'
import 'animate.css'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

import '../node_modules/ecored-base-pkg/src/components/GlobalComponents'
import '../node_modules/ecored-base-pkg/src/mixins/globalMixins'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

Vue.config.productionTip = false

Vue.directive('child', {
  bind(el, binding) {
    el.appendChild(binding.value)
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
