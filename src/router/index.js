import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/home/layout'

import two from './two.js'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      children:two
    }


  ]
})

