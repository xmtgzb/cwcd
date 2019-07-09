// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';      //移动端
import 'lib-flexible/flexible'   //px转换rem
import 'vue-ydui/dist/ydui.rem.css';


// import Cube from 'cube-ui'        //移动端，
// import ElementUI from 'element-ui';   //PC端
// import 'element-ui/lib/theme-chalk/index.css';





Vue.config.productionTip = false
// Vue.use(Cube)
// Vue.use(ElementUI)
Vue.use(YDUI);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
