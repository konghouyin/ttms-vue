<template>
  <div style="width: 270px; margin-top: 50px;">
    <div style="text-align:left;font-weight: 400;color: #666;ont: 400 14px/1.5 'Hiragino Sans GB','WenQuanYi Micro Hei',tahoma,sans-serif;">账号注册</div>
    <el-form :model="logon" ref="logon" label-width="0" class="demo-ruleForm" style="margin: 0; padding: 0;" :rules="rules">
      <el-form-item label="" prop="user">
        <el-input style="margin-top: 8px;margin-bottom: 8px;" placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="logon.user">
        </el-input>
      </el-form-item>

      <el-form-item label="" prop="pass">
        <el-input type="password" v-model="logon.pass" placeholder="请输入密码" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item label="" prop="checkPass">
        <el-input type="password" v-model="logon.checkPass" placeholder="请再次输入密码" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger"  @click="submitForm('logon')">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          注册
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </el-button>
      </el-form-item>
    </el-form>
	<div style="text-align:left;font-weight: 400;color: #666;ont: 400 14px/1.5 'Hiragino Sans GB','WenQuanYi Micro Hei',tahoma,sans-serif;">
	  已有账号？<router-link :to="link" tag="span" style="color:red;cursor:pointer">立即登录</router-link>
	</div>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.logon.checkPass !== '') {
            this.$refs.logon.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.logon.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        link: '/log/login',
        logon: {
          pass: '',
          checkPass: '',
          user: ''
        },
        rules: {
          user: [{
            required: true,
            message: '用户名不能为空'
          }],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
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

<style scoped>

</style>
