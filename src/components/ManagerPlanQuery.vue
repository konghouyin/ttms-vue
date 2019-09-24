<template>
  <el-container>
    <el-main style="overflow: auto; padding: 0;">
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.pname.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;">
        <el-table-column prop="order" label="编号" width="50px">
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
        <el-table-column align="right" style="padding: 0;" width="160px">
          <div slot="header" slot-scope="scope" style="width: 100%; height: 100%; margin: 0; padding: 0; display: flex;align-items:center">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </div>
          <div slot-scope="scope" style="display: flex;align-items:center;justify-content:space-around">
            <el-button size="small" type="primary" icon="el-icon-edit" circle disabled @click="handleEdit(scope.$index, scope.row)"></el-button>
            <el-button size="small" type="danger"  icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
          </div>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
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
        tableData: Array(20).fill(item),
        search:''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>

<style>

</style>
