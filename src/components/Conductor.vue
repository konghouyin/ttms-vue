<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" sortable width="180" column-key="date" :filters="datecomputed"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="name" label="姓名" column-key="name" :filters="namecomputed" :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="number" label="售票数" :formatter="formatter">
      </el-table-column>

      <el-table-column prop="money" label="销售业绩" :formatter="formatter">

      </el-table-column>
    </el-table>

    <div class="block">
      <el-autocomplete style="width:150px; margin-right: 20px; margin-top: 10px;" v-model="state" :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
      <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
      </el-date-picker>
    </div>
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
          name: 'ada',

          money: '长的帅'

        }],
        restaurants: [],
        state: '',
        timeout: null,
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      }
    },
    computed: {
      namecomputed() {
        let back = [];
        let set = new Set();
        this.tableData.forEach((item) => {
          set.add(item.name)
        })
        set = [...set]
        set.forEach((item) => {
          back.push({
            text: item,
            value: item
          })
        })
        return back
      },
      tagcomputed() {
        let back = [];
        let set = new Set();
        this.tableData.forEach((item) => {
          set.add(item.tag)
        })
        set = [...set]
        set.forEach((item) => {
          back.push({
            text: item,
            value: item
          })
        })
        return back
      },
      datecomputed() {
        let back = [];
        let set = new Set();
        this.tableData.forEach((item) => {
          set.add(item.date)
        })
        set = [...set]
        set.forEach((item) => {
          back.push({
            text: item,
            value: item
          })
        })
        return back
      }
    },
    methods: {
      loadAll() {
        return [{
            "value": "王小虎"
          },
          {
            "value": "王中虎"
          },
          {
            "value": "王大虎"
          }
        ];
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
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      var chart = Highcharts.chart('container', {

        chart: {
          scrollablePlotArea: {
            minWidth: 700
          }
        },
        title: {
          text: '销售员销售情况'
        },
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
