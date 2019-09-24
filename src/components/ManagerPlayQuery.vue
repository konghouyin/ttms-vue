<template>
  <el-container >
    <el-main style="overflow: auto; padding: 0;">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;">
        <el-table-column prop="order" label="编号">
        </el-table-column>
        <el-table-column prop="name" label="片名">
        </el-table-column>
        <el-table-column prop="length" label="片长">
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column
          align="right" style="padding: 0;" width="160px">
          <div slot="header" slot-scope="scope" style="width: 100%; height: 100%; margin: 0; padding: 0; display: flex;align-items:center">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </div>
          <div slot-scope="scope" style="display: flex;align-items:center;justify-content:space-around">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
            name: '罗小黑战记',
            length: '110min',
            status: '正在热映'
          };
          return {
            tableData: Array(20).fill(item),
            search: ''
          }
        },
    methods: {
      handleEdit(index, row) {
        window.location = '#/manager/play/change'
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
