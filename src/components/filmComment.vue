<template>
    <div style="width: 730px; display: flex;align-items: flex-start;">
      <el-avatar size="large" :src="circleUrl" style="margin-right: 20px;"></el-avatar>
      <div style="width: 660px; float: right;">
        <div class="name">{{name}} <el-image :src="imgsrc" style="width: 20px; height: 20px;margin-left: 10px;" @click="bj()"></el-image> </div>
        <div style="display: flex; align-items: center;margin-top: 4px;margin-bottom: 20px;">
        <div class="date">{{date}}</div>
        <el-rate id="star-show1" v-model="mark" disabled text-color="#ff9900" ></el-rate>
        </div>
        <div class="text">{{text}}</div>
      </div>
    
    </div>
</template>

<script>
  import eventBus from '../eventBus.js'
  export default{
    data(){
      return{
         imgsrc: require('../assets/report.png'),
         circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
         name:'Leo',
         date: '9-20',
         mark: 4.4,
         text: '从愤怒到温情，到泪洒影院，从导盲犬身上感受狗狗对人类的忠诚，狗狗真的可以改变人的一生，又有了强烈养狗的欲望！'
      }
    },
    methods:{
        
      bj(){
        eventBus.$emit('bjevent')
      }
    }
  }
</script>

<style scoped>
  .name{
    text-align: left;
    color: #333333;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  .date{
    text-align: left;
    color: #999999;
    font-size: 16px;

  }
  .text{
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    color: #666;
    line-height: 26px;
    font-size: 14px;
    text-align: left;
  }
</style>
