import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/home/layout'

import two from './modules/two.js'
import three from './modules/three.js'




// 一次加载所有路由文件

// function importaAll(r) {
//   return r.keys().map(key => r(key))
// }

// const modulesCache = []
// const modeles = importaAll(require.context('./modules/', true, /\.js$/))  


// modeles.forEach(element => {
//   Object.keys(element).forEach(key => {
//     modulesCache.push(element[key])
//   } )
// });


// const roter = []
// modulesCache.forEach(element => {
//   Object.keys(element).forEach(key => {
//     roter.push(element[key])
//   } )

// })






Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: layout,
    //   children: two
    // },

    {
      path: '/',
      name: 'layout',
      component: layout,
      children: three
    }

  ]
})

