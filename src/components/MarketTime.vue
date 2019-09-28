<template>
	<div>
		<div class="f">
			请选择时间
				<el-button type="primary" plain v-for="(item,key) in list1">{{item.date}}</el-button>
				
			</button>
			<br />
			<br />
			<hr />
		</div>
		<div class="m">
			<table width="100%" style="border-collapse:collapse;">
				<tr style="border-bottom: 2px solid rgb(219,218,218);" height="40px">
					<th>放映时间</th>
					<th>语言版本</th>
					<th>放映厅</th>
					<th>价格</th>
					<th>选座购票</th>
				</tr>
				<tr style="border-bottom: 2px solid rgb(219,218,218);" v-for="(item,key) in list" height="40px">
					<td>
						{{item.time}}
					</td>
					<td>
						{{item.language}}
					</td>
					<td>
						{{item.location}}
					</td>
					<td>
						{{item.price}}
						
					</td>
					<td>
						<button class="h">{{item.end}}</button>
					</td>
				</tr>
			</table>
		</div>
		<div>
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
				list1:[{
					date:'2019.9.26',
				},{
					date:'2019.9.19'
				}],
				list:[{
					time:'5.30',
					language:'国语3D',
					location:"3厅",
					price:'38',
					end:'选座购票',
				},{
					time:'5.30',
					language:'国语3D',
					location:"3厅",
					price:'38',
					end:'选座购票',
				},]
			}
		},methods:{
			
		},
		mounted(){
			 eventBus.$emit('buyadd',1);
		}
	}
</script>

<style scoped>
	.f{
		text-align: left;
	}
	
	.m{
		width: 100%;
		height: 320px;
		margin-bottom: 20px;
		overflow-y: auto;
	}
	.n{
		float: right;
	}
	.h{
		width: 60px; 
		height: 25px; 
		border-radius: 5px;
		border: 0;
		background-color: rgb(64,158,255);
		color: white;
		cursor: pointer;
	}
	.h:hover{
		opacity: 0.8;
	}
</style>
