<template>
  <div class="z-t-r">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        个人中心<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="cpn">个人信息</el-dropdown-item>
        <el-dropdown-item command="cpn">订单信息</el-dropdown-item>
        <el-dropdown-item command="">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    methods: {
      handleCommand(command) {
        /* this.$message('click on item ' + command); */
        this.$router.push("/user/"+command);
      }
    }

  }
</script>



<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .z-t-r{
    display: flex;
    align-items:center;
    height: 80px;
    width: 73px;
    z-index: 2000px;
    margin-top: 6px;
  }
</style>
