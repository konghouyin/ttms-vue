<template>
	<div class="modify_body">
		<div class="body_top">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
				    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="联系方式" prop="phemail">
				    <el-input type="text" v-model="ruleForm.phemail" autocomplete="off"></el-input>
				</el-form-item>
				 <el-form-item label="系统权限" prop="power">
				    <el-checkbox-group v-model="ruleForm.power">
				      <el-checkbox label="***管理员" name="power"></el-checkbox>
				      <el-checkbox label="**管理员" name="power"></el-checkbox>
				      <el-checkbox label="啥啥啥" name="power"></el-checkbox>
				      <el-checkbox label="啥啥" name="power"></el-checkbox>
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
				          power:[]
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
					power:[
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
