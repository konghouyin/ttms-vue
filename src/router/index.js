import Vue from 'vue'
import Router from 'vue-router'
import ManagerTop from '@/components/Managertop'
import ManagerMain from '@/components/ManagerMain'
import mtable from '@/components/ManagerPlayQuery'
import mtable2 from '@/components/ManagerPlayAdd'
import mPlayChange from '@/components/ManagerPlayChange'
import mCinema from '@/components/ManagerCinemaQuery'
import mCinemaAdd from '@/components/ManagerCinemaAdd'
import mCinemaChange from '@/components/ManagerCinemaChange'
import mPlanQuery from '@/components/ManagerPlanQuery'
import mPlanAdd from '@/components/ManagerPlanAdd'
import finance from '@/components/FinanceMain'
import conductor from '@/components/Conductor'
import log from '@/components/log'
import login from '@/components/login'
import logon from '@/components/logon'

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
        },
        {
          path: 'finance',
          component: finance,
        },{
          path: 'conductor',
          component:conductor
        }
      ]
    },
    {
      path: '/log',
      component: log,
      children: [{
          path: '',
          component: login,
        },{
        path: 'login',
        component: login,
      },
      {
        path: 'logon',
        component: logon,
      }]
  }]
})
