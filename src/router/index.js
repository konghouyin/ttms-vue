import Vue from 'vue'
import Router from 'vue-router'
import ManagerTop from '@/components/Managertop'
import ManagerMain from '@/components/ManagerMain'
import Hello from '@/components/HelloWorld'
import manager from '@/components/manager'
import tableplay from '@/components/ManagerTablePlay'
import formplay from '@/components/ManagerFormPlay'
import formtable from '@/components/ManagerBody'
import mtable from '@/components/ManagerTable'
import mtable2 from '@/components/ManagerFormPlay'
import mPlayChange from '@/components/ManagerPlayChange'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: ManagerMain,
    children: [{
        path: '',
        component: formtable,
        children: [{
          path: '',
          component:mtable
        },{
          path: '/play/query',
          component:mtable
        },{
          path: '/play/add',
          component:mtable2
        },{
          path: '/play/change',
          component:mPlayChange
        }
        ]
      }
    ]
  }]
})
