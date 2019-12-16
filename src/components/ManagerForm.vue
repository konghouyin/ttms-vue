<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <formfather v-for="(item,index) in data" :title="item.title" :index="index+1+''" :son="item.son"></formfather>
    </el-menu>
  </el-aside>
</template>

<script>
  import eventBus from '../eventBus.js'
  import formfather from './ManagerFormFather.vue'
  export default {
    data() {
      return {

      }
    },
    props: {
      data:Array
    },
    components: {
      formfather
    },
     created:function(){      
        this.addlink()
     },
    methods:{
      addlink: function(){
        eventBus.$on('playadd',function(data){
          console.log(223)
            console.log(data)
        })
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
