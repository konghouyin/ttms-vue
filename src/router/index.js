import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MarketMain from '@/components/MarketMain'
import MarketRefund from '@/components/MarketRefund'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarkentMain',
      component: MarketMain
    },
	{
		path:'/marketrefund',
		name:'MarketRefund',
		component:MarketRefund
	}
  ]
})
