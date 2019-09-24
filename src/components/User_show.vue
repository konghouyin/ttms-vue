<template>
  <el-main style="width: 100%; height: 476px;">
    <el-table :data="UserData">
      <el-table-column prop="name" label="用户名" >
      </el-table-column>
      <el-table-column prop="password" label="密码">
      </el-table-column>
      <el-table-column prop="power" label="权限">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
	  <el-table-column label="操作">
		  <el-button type="primary" icon="el-icon-edit" circle></el-button>
		 <el-button type="danger" icon="el-icon-delete" circle @click="del()"></el-button>
	  </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
	export default{
		data(){
			const item = {
			  name: '狼',
			  password: '123456',
			  power: '管理员',
			  email: '123@mail.com'
			};
			return {
				UserData: Array(2).fill(item)
			}
		},
		components:{
			
		},
		methods:{
			del :function(){
				alert("成功删除")
			}
		}
	}
</script>

<style>
</style>
