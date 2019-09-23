import Vue from 'vue'
import Router from 'vue-router'
import ManagerTop from '@/components/Managertop'
import ManagerMain from '@/components/ManagerMain'
import Hello from '@/components/HelloWorld'
import manager from '@/components/manager'
import tableplay from '@/components/ManagerTablePlay'
import formplay from '@/components/ManagerFormPlay'
import mtable from '@/components/ManagerTable'
import mtable2 from '@/components/ManagerFormPlay'
import mPlayChange from '@/components/ManagerPlayChange'
import mCinema from '@/components/ManagerCinema'
import mCinemaAdd from '@/components/ManagerCinemaAdd'
import mCinemaChange from '@/components/ManagerCinemaChange'
import mPlanQuery from '@/components/ManagerPlanQuery'
import mPlanAdd from '@/components/ManagerPlanAdd'
import finance from '@/components/FinanceMain'



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/manager',
    component: ManagerMain,
    children: [{
        path: '',
        component: mtable
      }, {
        path: 'play/query',
        component: mtable
      }, {
        path: 'play/add',
        component: mtable2
      }, {
        path: 'play/change',
        component: mPlayChange
      },
      {
        path: 'cinema/query',
        component: mCinema
      },
      {
        path: 'cinema/add',
        component: mCinemaAdd
      },
      {
        path: 'cinema/change',
        component: mCinemaChange
      },
      {
        path: 'plan/query',
        component: mPlanQuery
      },
      {
        path: 'plan/add',
        component: mPlanAdd
      }
    ]
  }, {
    path: '/finance',
    component: finance,
  }]
})
