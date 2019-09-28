<template>
	<div style="width: 100%;">
		<div class="show_top">
			<div class="show_top_left">
					<router-link to="/manager/user/add">
						<el-button type="success" size="small" round>
							添加用户
						</el-button>
					</router-link>
			</div>
		</div>
		<div class="show_body">
			<el-main style="width: 100%; height: 476px;">
			  <el-table :data="UserData">
			    <el-table-column prop="name" label="用户名" >
			    </el-table-column>
			    <el-table-column prop="password" label="密码">
					 <template slot-scope="scope">
					        <i class="el-icon-view"></i>
					        <span style="margin-left: 10px" @click="show(scope.row.password)">{{scope.row.password.isShow?scope.row.password.item:'*****' }}</span>
					      </template>
			    </el-table-column>
			    <el-table-column prop="power" label="权限">
					<template slot-scope="scope">
					          <div slot="reference" class="name-wrapper">
					            <el-tag size="medium" v-for="item in scope.row.power" class="card">{{ item }}</el-tag>
					          </div>
					      </template>
			    </el-table-column>
			    <el-table-column prop="email" label="邮箱">
			    </el-table-column>
				  <el-table-column label="操作">
					  <router-link to="/manager/user/modify">
						  <el-button type="primary" icon="el-icon-edit" size="small" circle>
						  </el-button>
					  </router-link>
					 <el-button type="danger" icon="el-icon-delete" size="small" circle @click="del()"></el-button>
				  </el-table-column>
			  </el-table>
			</el-main>
		</div>
	</div>
</template>

<script>
	var k;
	export default{
		data(){
			return {
				UserData:[{
					name: '狼',
					password:{
						item:'123456',
						isShow:false
					} ,
					power: ["票务经理" , "asd","asd"],
					email: '123@mail.com'
				},{
					name: '狼',
					password:{
						item:'123456',
						isShow:false
					},
					power: ["票理" , "assssd","asssd"],
					email: '123@mail.com',
				}]
			}
		},
		components:{

		},
		methods:{
			del :function(){
				confirm("确定删除吗？")
			},
			show(k){
				console.log(k);
				k.isShow=!k.isShow;
			}
		},computed:{

		}
	}
</script>

<style scoped>
	.show_top_left{
		margin-top: 15px;
		float: right;
	}
	#add_style{
		color: #FFFFFF;
		text-decoration: none;
	}
	.card{
		display: table;
	}
</style>
