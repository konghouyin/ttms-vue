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

import Admin from '@/components/AdminMain'
import userShow from '@/components/User_show'
import userModify from '@/components/User_modify'
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
          path: '',
          component:mtable
        },{
          path: 'play/query',
          component:mtable
        },{
          path: 'play/add',
          component:mtable2
        },{
          path: 'play/change',
          component:mPlayChange
        },
        {
          path: 'cinema/query',
          component: mCinema
        },
        {
          path: 'cinema/add',
          component: mCinemaAdd
        }
        ]

  },{
	  path: '/admin',
	  component:Admin,
		children:[{
			path: '',
			component: userShow
		},{
			path: 'user/show',
			component:userShow
		},{
			path: 'user/modify',
			component:userModify
		},{
			path: 'user/add',
			component:userAdd
		},{
			path: 'comment/show',
			component:commentShow
		},{
			path: 'comment/filter',
			component:commentTypeFilter
		}]
  }]
})
