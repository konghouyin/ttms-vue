<template>
	<div>
		
		<div class="heh">
			<el-input v-model="input" placeholder="请输入票号ID" style="width: 250px;"></el-input>
			<el-button type="primary" icon="el-icon-search">提交</el-button>
			 <router-link to="/">
				 <el-button type="primary" plain>返回</el-button>
			 </router-link>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				input: ''
			}
		}
		
	}
</script>

<style scoped>
	.heh{
		position: absolute;
		top: 45%;
		left: 35%;
	}
	
</style>
