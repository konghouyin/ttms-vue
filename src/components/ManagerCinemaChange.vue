<template>
  <pdd :inputName="id">
    <div class="change">
      <el-input placeholder="请输入影厅编号" v-model="id" class="input-with-select" style="width: 190px;float: left; margin-left: 40px;">
          <el-button slot="append" icon="el-icon-refresh"></el-button>
        </el-input>
        <el-button type="primary" round style="float: right; margin-right: 40px;" @click="red()">重新选择</el-button>
    </div>
  </pdd>
</template>

<script>
  import pdd from './ManagerCinemaAdd';
  export default {
    data() {
      return {
        id:''
      }
    },
    components:{
      pdd
    },
    methods: {
      red(){
        window.location = '#/manager/cinema/query'
      }
    },
    mounted(){
      this.id = this.$router.history.current.query.id 
    }
  }
</script>

<style scoped>
  .change {
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
  }
</style>
