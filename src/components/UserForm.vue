<template>
  <div>
      <div  style="height: 387px;">
         <div style="margin: 0 auto;height: 387px;width:1050px;" >
           <div style="width:1050px;height: 80px;border-bottom:1px solid rgb(229,229,229) ;display: flex; align-items: center;">
              <h2 style="width:200px;text-align: left;">攀登者</h2>
           </div>
           <div  style="width:1050px;height: 380px;display: flex; flex-direction: row;">
             <img src="https://img.alicdn.com/bao/uploaded/i2/TB1yyzHe3mH3KVjSZKzXXb2OXXa_.jpg_300x300.jpg" style="width:210px;height: 280px;margin-top:10px;">
             </img>
             <div class="dmtxt" >
                <div class="dmtxt1">
                  导演：李仁港
                </div>
                <div class="dmtxt2">
                  主演：吴京,章子怡,张译,井柏然,胡歌,王景春,何琳,陈龙,刘小锋,曲尼次仁,拉旺罗布,多布杰
                </div>
                <div class="dmtxt3">
                  类型：冒险,动作,爱情
                </div>
                <div class="dmtxt4">
                  制片国家/地区：中国大陆
                </div>
                <div class="dmtxt5">
                  片长：125分钟
                </div>
                <div class="dmtxt6">
                  剧情介绍：1960 年，中国登山队向珠峰发起冲刺，完成了世界首次北坡登顶这一不可能的任务。15 年后，方五洲和 曲松林在气象学家徐缨的帮助下，带领李国梁、杨光等年轻队员再次挑战世界之巅。迎接他们的将是更加 严酷的现实，也是生与死的挑战......
                </div>
              </div>
              <div class="uftime">
                <div class="uftime-1">
                  上映时间：2019-09-30 08:00
                </div>
                <img class="uftime-img" src="https://img.alicdn.com/bao/uploaded/i2/TB1RstSXmSD3KVjSZFKXXb10VXa_.jpg_160x160.jpg"></img>
                <img class="uftime-img" src="https://img.alicdn.com/bao/uploaded/i2/TB1RstSXmSD3KVjSZFKXXb10VXa_.jpg_160x160.jpg"></img>
              </div>
           </div>

         </div>
      </div>

      <div style="margin: 0 auto;height: 50px;width:1050px; border-bottom:1px solid rgb(229,229,229) ;">
         <div style="float: left; height:20px; width:100px; margin-top:25px;margin-left: -15px;">
            选座购票
         </div>
      </div>



      <div style="margin: 0 auto; width:1050px;margin-top: 30px;" >
        <el-table
          :data="tableData"
          stripe
          style="width: 1050px " class="tex">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="地址" >
             <el-button type="danger"><router-link to="/user/seat" style="color:white;text-decoration: none;">
                  选座购票</router-link></el-button>
          </el-table-column>
        </el-table>
     </div>
  </div>





</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
</script>

<style>
  .total-xy{
  	width: 1050px;
  }

  tex.{
    margin: 0 auto;
  }

  .dmtxt{
    height: 280px;width:600px;margin-left:20px;margin-top:10px;
  }

  .dmtxt1{
    width: 590px;height: 30px;margin-bottom:10px;text-align: left;
  }

  .dmtxt2{
    width: 590px;height: 41px;margin-bottom:10px;text-align: left;
  }

  .dmtxt3{
    width: 590px;height: 30px;margin-bottom:10px;text-align: left;
  }

  .dmtxt4{
    width: 590px;height: 30px;margin-bottom:10px;text-align: left;
  }

  .dmtxt5{
    width: 590px;height: 20px;margin-bottom:10px;text-align: left;
  }

  .dmtxt6{
    width: 590px;height: 90px;margin-bottom:10px;text-align: left;
  }

  .uftime{
    margin-top: 10px;
    width: 200px;
    height: 280px;
  }

  .uftime-1{
    width: 200px;
    height: 50px;
  }

  .uftime-img{
    width: 160px;
    height: 107px;
    margin-bottom: 5px;
  }


</style>
