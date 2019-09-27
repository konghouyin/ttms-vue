<template>
   <div class="三个并排的盒子 total-xy three_box" >
    <div class="three_box_min">
      <div  style="height:60px;width:300px;text-align: left;display: flex;align-items:flex-end;border-bottom: 2px solid rgb(220,220,220);">
        <div class="ud-t1">上周票房排行</div>
        <span class="ud-t2"><router-link to="/user/smovie">查看全部></router-link></span>
      </div>

      <p-modl v-bind:pph="formdata"></p-modl>

    </div>
    <div class="three_box_min">
      <div  style="height:60px;width:300px;text-align: left;display: flex;align-items:flex-end;border-bottom: 2px solid rgb(220,220,220);">
        <div class="ud-t1">热门预告片</div>
      </div>
    </div>
   </div>

</template>

<script>
 import pModl from './UserpModl.vue'
 export default {
   data() {
     return{
       formdata:['1.我和我的祖国','2.攀登者','3.中国机长','4.小Q','5.小小的愿望']
     }
   },
   components: {
     pModl,
   },
   props: {

   },
 }
</script>

<style>
  *{
  		margin: 0;
  		padding: 0;
  	}

  .three_box{
   height: 455px; margin: 0 auto;
  	     display: flex; flex-direction: row;
  }
  .three_box_min{
  	margin-right:70px; height:455px;width: 300px;

  }

  .ud-t1{
    width: 200px;
    height: 30px;
  }

  .ud-t2{
    width: 70px;
    height: 30px;
    font-size:12px;
    color: rgb(235,0,42);
    text-align: center;
    padding-left: 70px;
  }

  
</style>
