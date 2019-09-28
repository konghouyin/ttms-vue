<template>
	<div>
		<video :src="videoUrl" class="video_olay" controls="controls"></video>
		<el-button type="primary" @click="closeDialog()">关闭</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				videoUrl:"https://www.yunqishi.net/upload/mp4/201908/16-31.mp4",
				dialogPlay:false
			}
		},
		methods:{
			closeDialog() {
			    this.videoUrl = "";
			}
		}
	}
</script>

<style scoped>
	.video_olay{
		height: 500px;
		width: 500px;
	}
</style>
