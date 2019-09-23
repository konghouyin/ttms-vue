<template>
<el-container style="height: 600px; border: 1px solid #eee; margin-top: 3px;" >
  <m-form></m-form>
    <router-view/>
  </el-container>
</template>

<script>
  import mForm from './ManagerForm.vue'
  export default {
    data() {
          return {
          }
        },
    components: {
        mForm
    },
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
