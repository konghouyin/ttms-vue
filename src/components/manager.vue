<template>
  <div class="manager-title">
    <el-table :data="message" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      message: {
        type: Array
      }
    },
    methods: {
      tableRowClassName({
        row,

        rowIndex
      }) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    }
  }
</script>

<style>
  .manager-title {
    height: 42px;
    width: 100%;
    background-color: #409EFF;
  }
</style>
