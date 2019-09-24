<template>
  <el-main style="width:100%;height: 100%; padding: 0;">
    <el-header style="text-align: right; font-size: 12px">
    </el-header>
    <el-main style="width: 100%; height: 476px;">
      <el-table :data="tableData">
        <el-table-column prop="order" label="编号">
        </el-table-column>
        <el-table-column prop="pname" label="影片名称">
        </el-table-column>
        <el-table-column prop="name" label="影厅名称">
        </el-table-column>
        <el-table-column prop="date" label="开始日期">
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间">
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
        pname: '罗小黑战记',
        name: '1号厅',
        date: '2019/10/1',
        startTime: '10:00',
        endTime: '11:50'
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