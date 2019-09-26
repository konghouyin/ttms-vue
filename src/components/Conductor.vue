<template>
  <div>
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" sortable width="180" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="number" label="编号" width="100">
      </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="100" column-key="name" :filters="[{text: '王小虎', value: '王小虎'},{text: '王中虎', value: '王中虎'},{text: '王大虎', value: '王大虎'}]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '长的帅', value: '长的帅' }, { text: '老的快', value: '老的快' }]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag === '长的帅' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div id="container" style="width:700px;height:400px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        number: '9527',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '长的帅'
      }, {
        date: '2016-05-03',
        number: '9527',
        name: '王中虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '老的快'
      }, {
        date: '2016-05-01',
        number: '9527',
        name: '王大虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '老的快'
      }]
    }
  },
  methods: {
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  },
  mounted () {
    Highcharts.chart('container', {

      title: {
        text: '销售员销售情况'
      },

      // xAxis: {
      //   title: {
      //     text: '日期'
      //   },
      //   type: 'datetime',
      //   dateTimeLabelFormats: {
      //     month: '%m月%d日',
      //     year: '%b'
      //   }
      // },
      xAxis: {
        title: {
          text: '日期'
        },
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%m月%d日',
          year: '%b'
        }
      },
      yAxis: { // left y axis
        title: {
          text: '销售额'
        }
      },

      legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
      },

      tooltip: {
        shared: true,
        crosshairs: true
      },

      plotOptions: {
        series: {
          cursor: 'pointer',
          marker: {
            lineWidth: 1
          }
        }
      },
      series: [{
        name: '小虎',
        data: [
          [Date.UTC(2019, 9, 7), 3.0],
          [Date.UTC(2019, 9, 8), 4.9],
          [Date.UTC(2019, 9, 9), 4.5],
          [Date.UTC(2019, 9, 10), 6.5],
          [Date.UTC(2019, 9, 11), 8.4],
          [Date.UTC(2019, 9, 12), 9.5],
          [Date.UTC(2019, 9, 13), 12.2],
          [Date.UTC(2019, 9, 14), 8.5],
          [Date.UTC(2019, 9, 15), 7.3],
          [Date.UTC(2019, 9, 16), 5.3],
          [Date.UTC(2019, 9, 17), 6.9],
          [Date.UTC(2019, 9, 18), 7.9]
        ]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 1000
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    })
  }
}
</script>

<style>
</style>
