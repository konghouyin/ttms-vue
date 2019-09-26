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
          text: '本周票房'
        },
        subtitle: {

        },
        yAxis: {
          title: {
            text: '票房单位（元）'
          }
        },xAxis:{
          title:{
            text:'日期'
          },
      categories: ['星期0','星期1','星期2','星期3','星期4','星期5','星期6','星期7',]
   },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth:0
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 1
          }
        },
        series: [{
          name: '罗小黑战记',
          data: [439, 123, 23, 517
          ]
        },{
          name: '罗小黑战记',
          data: [439, 123, 23, 517,23, 517, 517,23, 517
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
