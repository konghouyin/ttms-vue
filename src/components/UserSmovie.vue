<template>
  <div>
    <div id="jdj">
      <div class="us-top">
        <div class="us-top-l">
          <div class="thkk">
            <div class="thkk-in"><router-link to="/user">首页</router-link></div>
          </div>
          <div class="thkk1">
            <div class="thkk-in1">></div>
          </div>
          <div class="thkk">
            <div class="thkk-in"><router-link to="/user/smovie">影片</router-link></div>
          </div>
        </div>
        <div class="us-top-r"> </div>
      </div>
    </div>

    <div class="us-body">
      <u-modl v-bind:ggh="formdata"></u-modl>
    </div>
  </div>

</template>

<script>
  import uModl from './UseruModl.vue'
  export default {
    data() {
      return{
        formdata:['https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c','https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c',
        'https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c','https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c',
        'https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c','https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c',
        'https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c','https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c',
        'https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c','https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c']
      }
    },
    components: {
      uModl,
    },
    props: {

    },
  }
</script>

<style>
  #jdj{
    height: 50px;
    border-top:1px solid rgb(229,229,229);
  }

  .us-top{
    height: 50px;
    margin: 0 auto;
    width:1050px;
    display: flex;
    flex-direction: row;
  }

  .us-body{
    margin: 0 auto;
    width:1050px;
    border:1px solid rgb(229,229,229);
    padding-left: 10px;
  }

  .us-top-l{
    width:200px;
    height:50px;
    display: flex;
    flex-direction: row;
  }

  .thkk{
    width: 60px;
    height: 50px;
    display: flex;
    align-items: center;
   }

   .thkk-in{
     width: 60px;
     height: 20px;
   }

   .thkk-in a{
     text-decoration: none;
    }

   .thkk1{
     width: 10px;
     height: 50px;
     display: flex;
     align-items: center;
   }
   .thkk-in2{
     width: 10px;
     height: 20px;
   }
</style>
