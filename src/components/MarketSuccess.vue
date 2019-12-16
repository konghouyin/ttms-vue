<template>
	<div>
		<div class="el-icon-check">
			
		</div>
		<div class="p">
			购票成功
		</div>
		<div class="b">
			<ul class="t">
				<li>{{list1.time}}</li>
				<li>{{list1.language}}</li>
				<li>{{list1.location}}</li>
				<li>{{list1.price}}</li>
			</ul>
			<ul class="e">
				<li>{{list.time}}</li>
				<li>{{list.language}}</li>
				<li>{{list.location}}</li>
				<li>{{list.price}}</li>
			</ul>
		</div>
		<div class="y">
			<router-link to="/manager/market/buy/" class="n">
				<el-button type="primary" icon="">返回</el-button>
			</router-link>
		</div>
	</div>
</template>

<script>
	import eventBus from '../eventBus.js';
	export default{
		data(){
			return{
				list:{
					'time':'2019.10.3',
					'language':'国语3D',
					'location':"3厅",
					'price':'38',
				},
				list1:{
					'time':'时间 :',
					'language':'语言 :',
					'location':"演出厅 :",
					'price':'价格 :',
				}
			}
		},
		mounted(){
			 eventBus.$emit('buyadd',3);
		}
	}
</script>

<style scoped>
	.el-icon-check{
		font-size: 50px;
		width: 60px;
		height: 60px;
		line-height: 60px;
		background-color: rgb(13,172,51);
		border-radius: 50%;
		color: white;
	}
	.p{
		font-size: 25px;
	}
	div>ul>li{
		list-style: none;
		padding-top: 20px;
	}
	ul{
		float: left;
		margin-left: 40px;
		
	}
	.t>li{
		font-weight: bold;
	}
	.e li{
		text-align: left;
	}
	.t{
		padding-left: 150px;
	}
	.b{
		padding-top: 50px;
	}
	
	.y{
		padding-top: 222px;
	}
	.n{
		padding-left: 350px;
	}
</style>
