<template>
	<div class="p">
		<div class="el-icon-check">
			
		</div>
		<div style="font-size: 25px;">
			退票成功
		</div>
		<div class="n">
			<router-link to="/manager/market/refund/">
				<el-button type="primary" icon="">返回</el-button>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
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
		padding-top: 150px;
	}
	.n{
		padding-top: 270px;
		padding-left: 400px;
	}
</style>
