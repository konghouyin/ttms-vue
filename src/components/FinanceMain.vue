<template>
  <div>
    <div style="width:540">
      <el-table :data="tableData3" height="250" border style="width: 100%;">
        <el-table-column prop="name" label="电影名"  column-key="name" :filters="namecomputed"
          :filter-method="filterHandler">
        </el-table-column>
        <el-table-column prop="time" label="上映时长" width="200">
        </el-table-column>
        <el-table-column prop="money" label="票房" width="200">
        </el-table-column>
      </el-table>

    </div>

    <div style="height: 10px;"></div>
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
        restaurants: [],
                state: '',
                timeout:  null,
        tableData3: [{
          name: '罗小黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗大黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗中黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗小黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗小黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗中黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗小黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗大黑战记',
          time: '15',
          money: '17231314'
        }, {
          name: '罗小黑战记',
          time: '15',
          money: '17231314'
        }],
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
        this.tableData3.forEach((item) => {
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
      }},
    methods: {
      loadAll() {
              return [
                { "value": "罗小黑战记" },
                { "value": "罗中黑战记" },
                { "value": "罗大黑战记" }
              ];
            }, querySearchAsync(queryString, cb) {
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
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    },
    mounted() {
       this.restaurants = this.loadAll();
      var chart = Highcharts.chart('container', {
        title: {
          text: '本周票房'
        },
        subtitle: {

        },
        yAxis: {
          title: {
            text: '票房单位（元）'
          }
        },
        xAxis: {
          title: {
            text: '日期'
          },
          categories: ['星期1', '星期2', '星期3', '星期4', '星期5', '星期6', '星期7', ]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        plotOptions: {
          series: {

            pointStart: 0
          }
        },
        series: [{
          name: '罗小黑战记',
          data: [439, 123, 223, 517]
        }, {
          name: '罗小黑战记',
          data: [ 517, 243, 439, 123, 231]
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
      });
    }
  }
</script>
