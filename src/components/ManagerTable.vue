<template>
  <el-container style="position: relative;overflow: auto;">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <tableplay style="position: absolute; top: 80px;"></tableplay>
    </el-container>
  </el-container>
</template>

<script>
  import tableplay from './ManagerTablePlay.vue'
  import formplay from './ManagerFormPlay.vue'
  export default {
    data() {
          return {
          }
        },
    components: {
      tableplay,formplay
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
