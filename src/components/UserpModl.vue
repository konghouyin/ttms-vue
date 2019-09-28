<template>
  <div>
    <div v-for="item in pph" class="ask">
      <div class="three_box_min_min_1" >{{item}}</div>
      <div class="three_box_min_min_2" ><router-link to="/user/dmovie" style="color:white">选座购票</router-link></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{

        formdata:[{

        }]
      }
    },
    components: {
    },
    props: {
      pph:Array
    },
  }
</script>

<style scoped>


  .three_box_min_min_1{
      text-align: left;
      height:25px;width:200px;
  }
  .three_box_min_min_2{
      height:25px;width:100px;
      background-color:#eb002a;
  }
  .three_box_min_min_2 a{
      text-decoration: none;

   }

  .ask{
    height:50px;width:300px;  display: flex; flex-direction: row;
    align-items:center;
    border-bottom: 1px solid rgb(220,220,220);
  }
</style>
