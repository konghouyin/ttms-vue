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
    data() {
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
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    },
    mounted() {

      var chart = Highcharts.chart('container', {

        chart: {
          scrollablePlotArea: {
            minWidth: 700
          }
        },

        data: {
          csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
          beforeParse: function(csv) {
            return csv.replace(/\n\n/g, '\n');
          }
        },

        title: {
          text: 'Daily sessions at www.highcharts.com'
        },

        subtitle: {
          text: 'Source: Google Analytics'
        },

        xAxis:{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   }
,

        yAxis: [{ // left y axis
          title: {
            text: null
          },
          labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
          },
          showFirstLabel: false
        }, { // right y axis
          linkedTo: 0,
          gridLineWidth: 0,
          opposite: true,
          title: {
            text: null
          },
          labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
          },
          showFirstLabel: false
        }],

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
            point: {
              events: {
                click: function(e) {
                  hs.htmlExpand(null, {
                    pageOrigin: {
                      x: e.pageX || e.clientX,
                      y: e.pageY || e.clientY
                    },
                    headingText: this.series.name,
                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                      this.y + ' sessions',
                    width: 200
                  });
                }
              }
            },
            marker: {
              lineWidth: 1
            }
          }
        },
        series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
      });
    }
  }
</script>

<style>
</style>
