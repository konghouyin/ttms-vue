<template>
	<div class="admin_main_body">
	<m-top></m-top>
	<div class="admin_body">
		<div class="admin_body_left">
			<m-form :data="formdata"></m-form>
		</div>
		<div class="admin_body_right">
			<router-view />
		</div>
	</div>
	</div>
</template>

<script>
	import mTop from './ManagerTop.vue'
	import mForm from './ManagerForm.vue'
	export default {
			data() {
				return {
				  activeName: 'first',
				  formdata: [{
				      title: "用户管理",
				      son: [{
				          title: "用户查询",
				          link: "/admin/user/show"
				        },{
							title: "用户修改",
							link: "/admin/user/modify"
						},{
							title:"添加用户",
							link: "/admin/user/add"
						}
				      ]
				    },
				    {
				      title: "评论管理",
				      son: [{
				          title: "评论查询",
				          link: "/admin/comment/show",
				        },{
							title: "举报类型选择",
							link:"/admin/comment/filter",
						}
				      ]},]
			}
			},
		components:{
			mTop,mForm
		}
	}
</script>

<style scoped="scoped">
	.admin_main_body {
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  height: 100%;
	}
	.admin_body_left{
		float: left;
	}
	.admin_body_right{
		width: 800px;
		margin-left: 200px;
	}
</style>
