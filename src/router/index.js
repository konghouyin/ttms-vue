import Vue from 'vue'
import Router from 'vue-router'
import ManagerTop from '@/components/Managertop'
import ManagerMain from '@/components/ManagerMain'
import mtable from '@/components/ManagerPlayQuery'
import mtable2 from '@/components/ManagerPlayAdd'
import mPlayChange from '@/components/ManagerPlayChange'
import mCinema from '@/components/ManagerCinemaQuery'
import mCinemaAdd from '@/components/ManagerCinemaAdd'
import Admin from '@/components/AdminMain'
import userShow from '@/components/User_show'
import userModify from '@/components/User_modify'
import mCinemaChange from '@/components/ManagerCinemaChange'
import mPlanQuery from '@/components/ManagerPlanQuery'
import mPlanAdd from '@/components/ManagerPlanAdd'
import finance from '@/components/FinanceMain'
import conductor from '@/components/Conductor'
import log from '@/components/log'
import login from '@/components/login'
import logon from '@/components/logon'
import film from '@/components/film'
import userAdd from '@/components/User_add'
import commentShow from '@/components/Comment_show'
import videoPlay from '@/components/Video_Play'
import commentTypeFilter from '@/components/CommentType_filter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/manager',
    component: ManagerMain,
    children: [{
        path: 'play/query',
        component: mtable
      }, {
        path: 'play/add',
        component: mtable2
      }, {
        path: 'play/change',
        component: mPlayChange
      }, {
        path: 'cinema/query',
        component: mCinema
      }, {
        path: 'cinema/add',
        component: mCinemaAdd
      }, {
        path: 'cinema/change',
        component: mCinemaChange
      }, {
        path: 'plan/query',
        component: mPlanQuery
      },
      {
        path: 'plan/add',
        component: mPlanAdd
      }, {
        path: 'finance',
        component: finance
      }, {
        path: 'conductor',
        component: conductor
      }, {
        path: 'user/show',
        component: userShow
      }, {
        path: 'user/modify',
        component: userModify
      }, {
        path: 'user/add',
        component: userAdd
      }, {
        path: 'comment/show',
        component: commentShow
      }, {
        path: 'comment/filter',
        component: commentTypeFilter
      }
    ]
  }, {
    path: '/film',
    component: film
  }, {
    path: '/log',
    component: log,
    children: [{
        path: '',
        component: login
      }, {
        path: 'login',
        component: login
      },
      {
        path: 'logon',
        component: logon
      }
    ]
  }]
})
