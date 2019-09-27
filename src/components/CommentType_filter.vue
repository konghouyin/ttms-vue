<template>
	<!-- <div>
		<p>举报评论理由</p>
		 <el-radio-group v-model="radio" v-for="(item,index) in typeData">
		    <el-radio :label="index">{{item}}</el-radio>
		  </el-radio-group>
	</div> -->
	<div>
		<!-- <input type="text" v-model="inputValue" v-on:keyup.enter="addTo" /> -->
		<div class="message">举报类型设置</div>
		<div class="wrap">
			<el-button type="primary" plain class="btn" v-for="(item,index) in typeData" @click="deleteTo(index)">{{item}}</el-button>
		</div>
		<el-divider></el-divider>
		<el-input
		  placeholder="请输入内容"
		  v-model="input"
		  clearable
		  class="input">
		</el-input>
		  <el-button type="success" v-on:click="addTo">添加</el-button>

	</div>
</template>

<script>

	export default{
		data(){
			return {
				input: '',
				typeData:['权限1','权限2','权限3','权限4','权限5']
			}
		},
		methods:{
			addTo(event){
				if(this.input==""){
					return
				}
				this.typeData.push(this.input);
				this.input="";
			},
			deleteTo(index){
				console.log(this.typeData)
				this.typeData.splice(index,1);
				console.log(this.typeData)
			}
		}
		
	}
</script>

<style scoped>
	.wrap{
		width: 700px;
		margin: 0 auto;
		margin-top: 30px;
	}
	.message{
		font-size: 24px;
		margin: 20px;
	}
	.btn{
		margin: 10px 10px;
	}
	.input{
		width:300px;
	}
</style>
