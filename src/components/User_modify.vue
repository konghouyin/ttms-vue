<template>
  <div class="modify_body" style="overflow: hidden;">
    <div style="overflow: hidden;margin-top: 20px;">
      <el-input placeholder="请输入人员编号" v-model="input3" class="input-with-select" style="width: 190px;float: left; margin-left: 40px;">
        <el-button slot="append" icon="el-icon-refresh"></el-button>
      </el-input>
      <el-button type="primary" round style="float: right; margin-right: 40px;" @click="red()">重新选择</el-button>
    </div>
    <div class="body_top">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="tell">
          <el-input type="text" v-model="ruleForm.tel" autocomplete="off"></el-input>
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
          callback(new Error('请输入手机号码'))
        } else {
          // if (this.ruleForm.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback()
        }
      }
      return {
        input3:'',
        ruleForm: {
          username: '',
          pass: '',
          tel: '',
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
            }
          ],
          status: [{
            type: 'array',
            required: true,
            message: '请选择权限,至少一个',
            trigger: 'change'
          }],
          tel: [{
            validator: checkemail,
            trigger: 'blur'
          }]
        }
      }
    },
    mounted() {
        Axios.send('/managerselect', 'post',).then(res => {
            console.log(1);
          console.log(res)
          console.log(2);
            let status = res.obj.user_status.split(',').map((item)=>{
                if(item=="1")
                  return "剧目管理"
                if(item=="2")
                   return "影厅管理"
                if(item=="3")
                   return "计划管理"
                if(item=="4")
                   return "财务管理"
                if(item=="5")
                   return "人员管理"
                if(item=="6")
                  return "评论管理"
                if(item=="7")
                  return "销售管理"
                if(item=="8")
                  return "用户"
            })
          this.ruleForm.username = res.obj.user_name
          this.ruleForm.pass = res.obj.user_password
          this.ruleForm.tel = res.obj.user_tel
          this.ruleForm.status = status

        }, error => {
          console.log('usermodifyAxiosError', error)
        }).catch(err => {
          throw err
        })
    },
    methods: {

      red() {
        window.location = '#/manager/user/show'
      },
      submitForm(formName) {
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
             Axios.send('/usermodify', 'post', {
                username: this.ruleForm.username,
                pass: this.ruleForm.pass,
                tel:this.ruleForm.tel,
                status: status
              }).then(res => {
                console.log(res)
              }, error => {
                console.log('usermodifyAxiosError', error)
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
        this.$refs[formName].resetFields()
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

  .modify_body {
    width: 100%;
  }
</style>
