import sider from '@/components/home/sidebar'
import layout from '@/components/home/layout'
import list from '@/components/list/list'
import list1 from '@/components/list/list1'




export default[
     {
        path: '/two',
        components: {
          asider: sider,
          // main:list
        },
    },

    {
      path: 'two/two1',
      components: {
        asider: sider,
        main:list1
      },
  },

]



 