<template>
	<div class="add_body" style="overflow: hidden;">
		<div class="body_top">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
				    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
				</el-form-item>
				<el-form-item label="联系方式" prop="phemail">
				    <el-input type="text" v-model="ruleForm.phemail" autocomplete="off"></el-input>
				</el-form-item>
				 <el-form-item label="系统权限" prop="status">
				    <el-checkbox-group v-model="ruleForm.status">
				      <el-checkbox v-for="item in ruleForm.list" :label="item" name="status"></el-checkbox>
				    </el-checkbox-group>
				  </el-form-item>
				  <el-form-item>
				      <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
				      <el-button @click="resetForm('ruleForm')">重置</el-button>
				    </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			var checkemail = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请输入邮箱或手机号码'));
			        } else {
			          // if (this.ruleForm.checkPass !== '') {
			          //   this.$refs.ruleForm.validateField('checkPass');
			          // }
			          callback();
			        }
			};
			return {
				 ruleForm: {
				          username: '',
				          pass: '',
				          phemail: '',
				          list:['xitong','yonghu','xxx','sss'],
						  status:[]
				        },
				rules:{
					username:[
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					pass:[
							{ required: true, message: '请输入密码', trigger: 'blur' },
							{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					status:[
						{ type: 'array', required: true, message: '请选择权限,至少一个', trigger: 'change' }
					],
					phemail:[
						{ validator: checkemail, trigger: 'blur' }
					]
				}
			}
		},
		 methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		            alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      }
		    }
	}
</script>

<style scoped="scoped">
	element.style{
		height: 45px;
	}
	.body_top{
		margin-top: 20px;
	}
</style>
