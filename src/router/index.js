import Vue from 'vue'
import Router from 'vue-router'
import MarketMain from '@/components/MarketMain'
import MarketRefund from '@/components/MarketRefund'
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
import log from '@/components/log'
import login from '@/components/login'
import logon from '@/components/logon'
import MarketBuy from '@/components/MarketBuy'
import MarketTime from '@/components/MarketTime'
import MarketSuccess from '@/components/MarketSuccess'
import MarketRs from '@/components/MarketRs'
import MarketRm from '@/components/MarketRm'


Vue.use(Router)

export default new Router({
	routes: [
		{
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
				, {
					path: '/finance',
					component: finance,
				},
				{
					path: 'market/buy',
					name: 'MarkentMain',
					component: MarketMain,
					children:[{
						path:'',
						component:MarketBuy
					},
					{
						path:'time',
						component:MarketTime
					},
					{
						path:'success',
						component:MarketSuccess
					}]
				},
				{
					path: 'market/refund',
					name: 'MarketRefund',
					component: MarketRefund,
					children:[{
						path:'',
						component:MarketRm
					},{
						path:'rs',
						component:MarketRs
					}]
				}
			]
		}, 
		{
			path: '/log',
			component: log,
			children: [{
					path: '',
					component: login,
				}, {
					path: 'login',
					component: login,
				},
				{
					path: 'logon',
					component: logon,
				}
			]
		}
	]
})
