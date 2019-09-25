<template>
	<div>
		<div class="header">
			<div class="t1">
				<router-link to="/">
					<span class="f3">购票</span>
				</router-link>
				<router-link to="/marketrefund">
					<span class="f4">退票</span>
				</router-link>
				<span class="t2">注销</span>
				<span class="f1">个人中心</span>
				
			</div>
			<br>
			<div class="a">
				<span class="t3">星云剧院</span>
				<el-input v-model="input" placeholder="请输入影片信息" style="width: 200px;"></el-input>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			</div>
		</div>
		<br />
		<hr style="border-color: rgb(219,218,218)"/>
		<div class="content">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="正在热映" name="first" >
					<ul class="fr">
						<li v-for="(item ,key) in list" >
							<div class="t"></div>
							<div class="b">
								<span>购票选坐</span>
							</div>
						</li>
					</ul>
				</el-tab-pane>
			    <el-tab-pane label="即将上映" name="second"></el-tab-pane>
			  </el-tabs>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				activeName: 'first',
				input: '',
				list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
			}
		},
		methods: {
		      handleClick(tab, event) {
		        console.log(tab, event);
		      }
		    }
	}
</script>

<style scoped>
	span{
		cursor:pointer;
	}
	.t1{
		height: 30px;
		width: 100%;
		background-color: black;
		
	}
	.f1{
		float: right;
		border: 1px grey solid;
		width: 100px;
		height: 26px;
		font-size: 20px;
		color: orange;
		border-radius: 10px;
		margin-right: 10px;
	}
	.f3{
		float: left;
		border: 1px grey solid;
		width: 100px;
		height: 26px;
		font-size: 20px;
		color: orange;
		border-radius: 10px;
		margin-right: 10px;
		margin-left: 10px;
	}
	.f4{
		float: left;
		border: 1px grey solid;
		width: 100px;
		height: 26px;
		font-size: 20px;
		color: orange;
		border-radius: 10px;
	}
	.header{
		width: 100%;
	}
	.a{
		width: 50%;
		margin: auto;
	}
	.t2{
		float: right;
		border: 1px grey solid;
		width: 60px;
		height: 26px;
		font-size: 20px;
		color: orange;
		border-radius: 10px;
		margin-right: 10px;
	}
	
	.t3{
		float: left;
		color: #f40;
		font-size: 30px;
		font-family: arial;
		font-weight: bold;
	}
	.content{
		width: 800px;
		height: 100%;
		margin: auto;
	}
	.fr li{
		list-style: none;
		float: left;
		margin-left: 30px;
		margin-top: 30px;
	}
	.t{
		width: 130px;
		height: 130px;
		background-color: palegoldenrod;
	}
	.b{
		width: 130px;
		height: 30px;
		background-color: red;
	}
	.ft:hover{
		width: 150px;
		height: 50px;
		background-color: red;
	}
</style>
