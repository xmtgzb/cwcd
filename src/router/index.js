import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/home/layout'

import two from './modules/two.js'
import three from './modules/three.js'


// function importaAll(r) {
//   return r.keys().map(key => r(key))
// }

// const modulesCache = []
// const modeles = importaAll(require.context('./modules/', true, /\.js$/))   //引进store中所有的仓库

// modeles.forEach(element => {
//   Object.keys(element).forEach(key => {
//     modulesCache.push(element[key])
//   } )
// });






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children:two
    },

    {
      path: '/th',
      component: layout,
      children:three
    }

  ]
})

