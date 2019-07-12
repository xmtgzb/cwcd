// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import 'lib-flexible/flexible'   //px转换rem

//适用于PC端
import ElementUI from 'element-ui';   
import 'element-ui/lib/theme-chalk/index.css';


// 适用于移动端
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.rem.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(YDUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
