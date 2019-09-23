<template>
  <div class="manager-main-body">
    <m-top></m-top>
    <div class="manager-local-father">
        <el-container style="height: 600px; border: 1px solid #eee; margin-top: 3px;" >
          <m-form></m-form>
            <router-view/>
        </el-container>
    </div>
  </div>

</template>

<script>
  import mTop from './ManagerTop.vue'
  import mForm from './ManagerForm.vue'
  export default {
    data() {
        return{

        }
        },
    components: {
      mTop,mForm
    },
    props:{
      
    }
  }
</script>

<style>
  .manager-main-body{
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
  }
  .manager-local-father{
    width: 900px;
  }
</style>
