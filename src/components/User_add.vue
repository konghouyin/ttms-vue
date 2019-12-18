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
	import Axios from '@/axios'
  export default {
    data() {
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
          list: ['剧目管理', '影厅管理', '计划管理', '财务管理','人员管理','评论管理','销售管理','用户'],
          status: []
        },
        rules: {
          username: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          pass: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          status: [{
            type: 'array',
            required: true,
            message: '请选择权限,至少一个',
            trigger: 'change'
          }],
          phemail: [{
            validator: checkemail,
            trigger: 'blur'
          }]
        }
      }
    },

    methods: {
      submitForm(formName) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
		this.$refs[formName].validate((valid) => {
		    if (valid) {
		        let status = this.ruleForm.status.map((item)=>{
		            if(item=="剧目管理")
		              return 1
		            if(item=="影厅管理")
		               return 2
		            if(item=="计划管理")
		               return 3
		            if(item=="财务管理")
		               return 4
		            if(item=="人员管理")
		               return 5
		            if(item=="评论管理")
		              return 6
		            if(item=="销售管理")
		              return 7
		            if(item=="用户")
		              return 8
		        })
		        status.sort();
		        console.log(status)
		       Axios.send('/PersonAdd', 'post', {
		          username: this.ruleForm.username,
		          pass: this.ruleForm.pass,
		          tel:this.ruleForm.tel,
		          status: status
		        }).then(res => {
		          console.log(res)
		        }, error => {
		          console.log('userAddAxiosError', error)
		        }).catch(err => {
		          throw err
		        })
		      console.log(this.ruleForm)
		    } else {
		      console.log('error submit!!')
		      return false
		    }
		  })
		},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped="scoped">
  element.style {
    height: 45px;
  }

  .body_top {
    margin-top: 20px;
  }

  .add_body {
    width: 100%
  }
</style>
