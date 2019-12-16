<template>
  <div style="width: 100%; height: 100%; padding-top: 10px;">
	  
    <slot></slot>
    <div style="font-size: 25px; font-weight: bold;">
    		  星云剧院7厅银幕
    </div>
	<div style="padding-top: 10px;">
		 《 两只老虎 》
	</div>
    
    <div style="display: flex; width: 100%; justify-content:center; height: 450px; align-items:center; ">
		
      <div :style=" {width: bw,height: bh}">
		  
        <el-image  v-for="(item,index) in num" class="img" @click="change(index)" :src="imgsrc[item]"></el-image>
		<div style="padding-top: 25px; padding-right: 200px;">
			<span style="font-weight: bold; font-size: 20px; padding-top: 2px;">座位 :</span>
			<el-tag
			  v-for="tag in tags"
			  :key="tag.name"
			  closable
			  :type="tag.type">
			  {{tag.name}}
			</el-tag>
		</div>
		<div style="float: right; padding-top: 20px;">
			<router-link to="/manager/market/success"><el-button type="primary">选座购票</el-button></router-link>
		</div>
      </div>
	  
    </div>
	
  </div>

</template>

<script>
	import eventBus from '../eventBus.js';
  export default {
    data() {
      return {        
        ifshow:false,
        num: [],
        imgsrc: [require('@/assets/set.png'), require('@/assets/stop.png'), require('@/assets/none.png')],
		tags: [
		          { name: '3行4列', type: '' },
		          
		        ],
        value2: true,
        ht: false,
        ruleForm: {
          name: '',
          row: 10,
          col: 8,
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
	    eventBus.$emit('buyadd', 2);
    },
    computed: {
      bw: function() {
        return parseInt(this.ruleForm.col) * 48 + 'px'
      },
      bh: function() {
        return parseInt(this.ruleForm.row) * 38 + 'px'
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
    width: 30px;
    height: 28px;
    margin-left: 7px;
  }
</style>
