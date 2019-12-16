<template>
  <el-container style="max-height: 670px;">
    <el-main style="overflow: auto; padding: 0;">
      <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;">
        <el-table-column prop="order" label="编号" sortable>
        </el-table-column>
        <el-table-column prop="name" label="影厅名称" >
        </el-table-column>
        <el-table-column prop="type" label="影厅大小" >
        </el-table-column>
        <el-table-column prop="status" label="状态" :filters="[{ text: '启用', value: '启用' }, { text: '停用', value: '停用' }]"
          :filter-method="filterTag">
        </el-table-column>
        <el-table-column align="right" style="padding: 0;" width="160px">
          <div slot="header" slot-scope="scope" style="width: 100%; height: 100%; margin: 0; padding: 0; display: flex;align-items:center">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </div>
          <div slot-scope="scope" style="display: flex;align-items:center;justify-content:space-around;">
            <el-button size="small" type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
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
        name: '1号厅',
        type: '4X5',
        status: '启用'
      };
      return {
        tableData: Array(20).fill(item),
        search:''
      }
    },
    methods: {
      handleEdit(index, row) {
        window.location = '#/manager/cinema/change'
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      filterTag(value, row) {
              return row.status === value;
            },
    },
  }
</script>

<style>

</style>
