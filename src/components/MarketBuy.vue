<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="影片" width="200">
        <template slot-scope="scope">
          <el-popover placement="top">

            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="addlink()">购买</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import eventBus from '../eventBus.js'
  export default {
    data() {
      return {
        active: '0',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: ''
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: ''
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: ''
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: ''
        }]
      }
    },
    mounted() {
      eventBus.$emit('buyadd', 0)
    },
    methods: {
      addlink: function() {
        window.location = '#/manager/market/time'
      }
    }
  }
</script>

<style scoped>

</style>
