<template>
  <el-main style="width: 100%; height: 476px;">
    <el-table :data="tableData">
      <el-table-column prop="order" label="编号" >
      </el-table-column>
      <el-table-column prop="name" label="片名">
      </el-table-column>
      <el-table-column prop="length" label="片长">
      </el-table-column>
      <el-table-column prop="status" label="状态">
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
  export default {
    data() {
          const item = {
            order: '1',
            name: '罗小黑战记',
            length: '110min',
            status: '正在热映'
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
