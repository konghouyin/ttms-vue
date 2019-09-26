<template>
  <div>
    <div style="width:540">
      <el-table :data="tableData3" height="250" border style="width: 100%;">
        <el-table-column prop="name" label="电影名" width="300">
        </el-table-column>
        <el-table-column prop="time" label="上映时长" width="180">
        </el-table-column>
        <el-table-column prop="money" label="票房" width="200">
        </el-table-column>
      </el-table>

    </div>
    <div style="height: 10px;"></div>

    <div id="container" style="width:700px;height:400px"></div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          name: '罗小黑战记',
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
          name: '罗小黑战记',
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
          name: '罗小黑战记',
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
        }]
      }
    },
    mounted() {
      var chart = Highcharts.chart('container', {
        title: {
          text: '票房统计'
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
          type: 'datetime',
          dateTimeLabelFormats: { // don't display the dummy year
            month: '%m月%d日',
            year: '%b'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        plotOptions: {
        		series: {
        			marker: {
        				enabled: true
        			}
        		}
        	},
        series: [{
          name: '罗小黑战记',
          data: [
            [Date.UTC(1970, 9, 27), 156],
            [Date.UTC(1970, 10, 10), 266],
            [Date.UTC(1970, 10, 18), 257],
            [Date.UTC(1970, 11, 2), 368],
            [Date.UTC(1970, 11, 9), 466],
            [Date.UTC(1970, 11, 16), 566],
            [Date.UTC(1970, 11, 28), 667],
            [Date.UTC(1971, 0, 1), 681],
            [Date.UTC(1971, 0, 8), 678],
            [Date.UTC(1971, 0, 12), 698],
            [Date.UTC(1971, 0, 27), 624],
            [Date.UTC(1971, 1, 10), 580],
            [Date.UTC(1971, 1, 18), 540],
            [Date.UTC(1971, 1, 24), 492],
            [Date.UTC(1971, 2, 4), 459],
            [Date.UTC(1971, 2, 11), 479],
            [Date.UTC(1971, 2, 15), 473],
            [Date.UTC(1971, 2, 25), 561],
            [Date.UTC(1971, 3, 2), 576],
            [Date.UTC(1971, 3, 6), 482],
            [Date.UTC(1971, 3, 13), 458],
            [Date.UTC(1971, 4, 3), 451],
            [Date.UTC(1971, 4, 26), 431],
            [Date.UTC(1971, 5, 9), 315],
            [Date.UTC(1971, 5, 12), 254]
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
      });
    }
  }
</script>
