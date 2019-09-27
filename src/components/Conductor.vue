<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" sortable width="180" column-key="date" :filters="datecomputed"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="number" label="编号" width="100">
      </el-table-column>
      <el-table-column prop="name" label="姓名"  column-key="name" :filters="namecomputed"
        :filter-method="filterHandler" >
      </el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="100" :filters="tagcomputed"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tag === '长的帅' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
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
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '长的帅'
        },{
          date: '2016-05-02',
          number: '9527',
          name: 'qwdq',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '长的帅'
        }, {
          date: '2016-05-03',
          number: '9527',
          name: 'asxa',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '老的快'
        }, {
          date: '2016-05-01',
          number: '9527',
          name: '1212',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '老的快'
        }],
        restaurants: [],
                state: '',
                timeout:  null,
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
              return [
                { "value": "王小虎" },
                { "value": "王中虎" },
                { "value": "王大虎" }
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

        data: {
          csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
          beforeParse: function(csv) {
            return csv.replace(/\n\n/g, '\n');
          }
        },

        title: {
          text: '售票员销售额'
        },

        subtitle: {
          text: 'from:heaven theatre'
        },

        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        },

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
