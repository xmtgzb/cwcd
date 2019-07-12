import sider from '@/components/home/sidebar'
import layout from '@/components/home/layout'
import list from '@/components/list/list'




export default [
    {
        path: '',
        component: {
          sider:sider,
          main: list
        }
    },
  


]