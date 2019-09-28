<template>
	<div>
		<div class="heh">
			<el-input v-model="input" placeholder="请输入票号ID" style="width: 250px;"></el-input>
			<el-button type="primary" icon="el-icon-search" @click="hi()">查询</el-button>
		</div>
		<div v-if="index" class="b">
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
		<div class="y" v-if="index">
			<router-link to="/manager/market/refund/rs">
				<button class="n">确认提交</button>
			</router-link>
		</div>
	</div>
</template>

<script>
	import eventBus from '../eventBus.js'
	export default{
		data(){
			return{
				input: '',
				index:false,
				list:{
					'time':'2019.10.3',
					'language':'国语3D',
					'location':"3厅",
					'price':'38',
				},list1:{
					'time':'时间 :',
					'language':'语言 :',
					'location':"演出厅 :",
					'price':'价格 :',
				}
			}
		},
		methods:{
			hi(){
				if(this.input==123){
					this.index=true;
				}else if(this.input==''){
					alert('请输入数据');
				}else{
					alert('未查询到该演出票');
				}
			}
		}

		
	}
</script>

<style scoped>
	.heh{
		margin: 0 auto;
		padding-top: 22px;
	}
	ul li{
		list-style: none;
		text-align: left;
		padding-top: 25px;
		font-size: 25px;
		
	}
	ul{
		float: left;
		margin-left: 40px;
	}
	.t>li{
		font-weight: bold;
	}
	.t{
		padding-left: 150px;
	}
	.b{
		padding-top: 50px;
	}
	.y{
		padding-top: 400px;
		padding-right: 100px;
	}
	.n{
		float: right; 
		width: 75px; 
		height: 40px; 
		font-size: 15px; 
		border-radius: 5px;
		margin-top: 5px;
		border: 0;
		background-color: rgb(64,158,255);
		color: white;
		cursor: pointer;
	}
	.n:hover{
		opacity: 0.8;
	}
</style>
