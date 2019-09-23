<template>
  <el-main style="width:100%;height: 100%; padding: 0;">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main style="width: 100%; height: 476px;">
      <el-table :data="tableData">
        <el-table-column prop="order" label="编号">
        </el-table-column>
        <el-table-column prop="name" label="影厅名称">
        </el-table-column>
        <el-table-column prop="type" label="影厅大小">
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
      </el-table>
    </el-main>
  </el-main>
</template>

<script>
  export default {
    data() {
      const item = {
        order: '1',
        name: '1号厅',
        type: '4X5',
        status: '启用'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    components: {

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
