<template>
  <div class="">
    <div class="total-xy move-top" >
    	<span >正在热映</span>
    	<div>
    		<a ><router-link to="/user/smovie">查看全部></router-link></a>
    	</div>
    </div>

    <div class="outbox">
      <div class="user_movie total-xy" >
        <u-modl v-bind:ggh="formdata"></u-modl>
      </div>
    </div>


    <div class="imge total-xy" >
      <img src="../assets/xiangmu.png"/>
    </div>
  </div>
</template>

<script>
  import uModl from './UseruModl.vue'
  export default {
    data() {
      return{
        formdata:['https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c','https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c',
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

<style scoped>
    *{
    		margin: 0;
    		padding: 0;
    	}

    .imge{
      height: 93.32px;  margin: 0 auto;
      }
    .imge img{
      width:1050px ;
    }

    .user_movie{
    	 height: 357px; margin: 0 auto;
    	display: flex; flex-direction: column;
      margin-left:11px;
    }


    .move-top{
    	 margin: 0 auto;height:40px;
    								display: flex;align-items:flex-end;
    }
    .move-top span{
    	height:20px;width: 64px;margin-top:20px;border-bottom: 2px solid red;
    }
    .move-top div{
    	height:20px;width: 986px;border-bottom: 2px solid rgb(229,229,229);
    }
    .move-top a{
    	float: right; font-size:12px; color: rgb(235,0,42);
    }

    .total-xy{
    	width: 1050px;
    }

    .outbox{
      height: 357px;
      width: 1060px;
      margin: 0 auto;
    }
</style>
