<template>
  <div class="up-out">
    <div class="up-left-image" :style="'background-image: url('+ruleForm.img+');'"></div>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="昵称" prop="name" readonly="readonly">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <br>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Axios from '@/axios'
export default {
  data () {
    return {
      ruleForm: {
        img: require('@/assets/avataaars.png'),
        name: '',
        tel: '',
        email: '',
        resource: '',
        age:''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入电话', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入电子邮箱', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        age: [
          { required: true, message: '请填写年龄', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            Axios.send('/usermessage', 'post', {
              username: this.ruleForm.name,
              resource: this.ruleForm.resource=='男'?1:2,
              tel:this.ruleForm.tel,
              email:this.ruleForm.email,
              age:this.ruleForm.age
            }).then(res => {
              console.log(res)
              this.name = res.obj.
            }, error => {
              console.log('usercpnAxiosError', error)
            }).catch(err => {
              throw err
            })

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .up-out{
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid rgb(244,243,244);
      width: 945px;
      height: 600px;
      display: flex;
      flex-direction:row;
  }

  .up-left-image{
     width:258px ;
     height:258px;
     background-size: 90%;
     background-repeat: no-repeat;
  }
</style>
