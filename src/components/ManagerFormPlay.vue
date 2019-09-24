<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 10px;">
    <el-form-item label="URL地址" prop="url">
      <el-input v-model="ruleForm.url" style="width: 450px; float: left;"></el-input>
      <el-button type="success" >解析</el-button>
    </el-form-item>
    <el-form-item label="电影名称" prop="name" style="display: inline-block;">
      <el-input v-model="ruleForm.name" style="width: 230px; float: left;"></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="type" style="display: inline-block;">
      <el-input v-model="ruleForm.type" style="width: 230px; float: left; margin-right: 30px;"></el-input>
    </el-form-item>
    <el-form-item label="导演" prop="director" style="display: inline-block;">
      <el-input v-model="ruleForm.director" style="width: 230px; float: left; "></el-input>
    </el-form-item>
    <el-form-item label="片长" prop="length" style="display: inline-block;">
      <el-input v-model="ruleForm.length" style="width: 230px; float: left; margin-right: 30px;"></el-input>
    </el-form-item>
    <el-form-item label="语言" prop="language" style="display: inline-block;">
      <el-input v-model="ruleForm.language" style="width: 230px; float: left; "></el-input>
    </el-form-item>
    <el-form-item label="国家" prop="country" style="display: inline-block;">
      <el-input v-model="ruleForm.country" style="width: 230px; float: left; margin-right: 30px;"></el-input>
    </el-form-item>
    <el-form-item label="演出人员" prop="actor">
      <el-input v-model="ruleForm.actor" style="width: 570px; float: left;"></el-input>
    </el-form-item>
    <el-form-item label="海报链接" prop="img">
      <el-input v-model="ruleForm.img" style="width: 570px; float: left;"></el-input>
    </el-form-item>
    <el-form-item label="推广链接" prop="link">
      <el-input v-model="ruleForm.link" style="width: 570px; float: left;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          url: '',
          name: '',
          type: '',
          director: '',
          length: '',
          language: '',
          country: '',
          actor: '',
          img: '',
          link: ''
        },
        rules: {
          url: [
            { required: true, message: '请输入影片的豆瓣地址',trigger: 'blur'}
          ],
          name: [
            { required: true, message: '请输入影片名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          length: [
            { required: true, message: '请输入影片时长',trigger: 'blur'}
          ],
          img: [
            { required: true, message: '请输入海报 `地址',trigger: 'blur'}
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

<style>
</style>
