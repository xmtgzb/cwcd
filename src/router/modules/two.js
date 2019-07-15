import sider from '@/components/home/sidebar'
import layout from '@/components/home/layout'
import list from '@/components/list/list'
import list1 from '@/components/list/list1'




export default[
     {
        path: '/',
        components: {
          asider: sider,
          main:list
        },
    },

    {
      path: '/two',
      components: {
        asider: sider,
        main:list1
      },
  },

]

// export const add ={
//   path: '/one',
//   components: {
//     asider: sider,
//     main:list
//   },
// },

// export const add ={
//    path: '/two',
//    components: {
//      asider: sider,
//      main:list1
//    },
// },


 