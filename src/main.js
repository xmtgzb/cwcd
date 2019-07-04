// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cube from 'cube-ui'        //适用于移动端
import 'lib-flexible/flexible'   //px转换rem

import ElementUI from 'element-ui';   //适用于PC端
import 'element-ui/lib/theme-chalk/index.css';

// import 'lib-flexible/flexible' //px转换rem



Vue.config.productionTip = false
Vue.use(Cube)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
