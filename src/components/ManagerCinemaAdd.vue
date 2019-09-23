<template>
  <div style="width: 100%; height: 100%; padding-top: 10px;">
    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
      style="display: flex;" :hide-required-asterisk="ht">
      <el-form-item label="影厅名称" prop="name" style="display: flex;">
        <el-input v-model="ruleForm.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="行" prop="row" style="display: flex;" label-width="50px">
        <el-input-number v-model="ruleForm.row" :min="1" :max="20" controls-position="right" size="small"></el-input-number>
      </el-form-item>
      <el-form-item label="列" prop="col" style="display: flex;" label-width="50px">
        <el-input-number v-model="ruleForm.col" :min="1" :max="30" controls-position="right" size="small"></el-input-number>
      </el-form-item>
    </el-form>
    <div style="display: flex; width: 100%; justify-content:center; height: 400px; align-items:center; margin-bottom: 20px ;">
      <div :style=" {width: bw,height: bh}">
        <el-image class="img" v-for="(item,index) in num" @click="change(index)" :src="imgsrc[item]"></el-image>
      </div>
    </div>
    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm2" class="demo-ruleForm" style="display: flex; align-items:center;">
      <el-form-item label="启用" style="margin-left: 40px;">
        <el-switch v-model="ruleForm.status"></el-switch>
      </el-form-item>
      <el-form-item style="margin-left: 50px;">
        <el-switch style="display: block;" v-model="value2" active-color="#13ce66" inactive-color="#ff4949" active-text="停用座位"
          inactive-text="删除座位">
        </el-switch>
      </el-form-item>
      <el-form-item style="margin-left: 70px;">
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
      <el-form-item style="margin-left: 50px;">
        <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        num: [],
        imgsrc: [require('@/assets/set.png'), require('@/assets/none.png'), require('@/assets/stop.png')],
        value2: true,
        ht: false,
        ruleForm: {
          name: '',
          row: 20,
          col: 30,
          status: true
        },
        rules: {
          name: [{
              required: true,
              message: '请输入影厅名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 10,
              message: '长度在 1 到 10 个字符',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    mounted() {
      this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0);
    },
    computed: {
      bw: function() {
        return parseInt(this.ruleForm.col) * 22 + 'px'
      },
      bh: function() {
        return parseInt(this.ruleForm.row) * 18.2 + 'px'
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
      },
      change(index) {
        if(this.value2){
          if(this.num[index]!=2){
            this.num[index] = 2
          }else{
            this.num[index] = 0
          }
        }else{
          if(this.num[index]!=1){
            this.num[index] = 1
          }else{
            this.num[index] = 0
          }
        }
        this.num = [...this.num]
      }
    },
    watch: {
      'ruleForm.row': {
        handler: function(val, oldVal) {
          this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0);
        },
        deep: true
      },
      'ruleForm.col': {
        handler: function(val, oldVal) {
          this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0);
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .img {
    width: 15px;
    height: 13px;
    margin-left: 7px;
  }
</style>
