import sider from '@/components/home/sidebar'
import layout from '@/components/home/layout'
// import list from '@/components/list/list'
import list2 from '@/components/list/list2'




export default[
     {
        path: 'three',
        components: {
          asider: sider,
          main:list2
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


 