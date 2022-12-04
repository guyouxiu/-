import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import mixin from "@/common/mixins.js"
Vue.mixin(mixin)
import * as util from "@/common/utils.js"
Vue.prototype.$utils = util
App.mpType = 'app'
import store from '@/store/index.js'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif