<template>
  <div class="ch">
  	<div class="ch-m">
  		<div class="t-img">
  			<img class="t-img-o" src="../assets/top.png"></img>
  		</div>
  		<div class="ch-m-2">

  		</div>
  		<div class="ch-m-34">
        <button class="tsp"><router-link to="/user">首页</router-link></button>
  		</div>
  		<div class="ch-m-34">
  			<button class="tsp"><router-link to="/user/smovie">影片</router-link></button>
  		</div>
  		<div class="ch-m-5">
      </div>

      <u-tr></u-tr>
    </div>
  </div>
</template>

<script>
import uTr from './UserTopright1.vue'
export default {
    data() {
      return{
      }
    },
    components: {
      uTr,
    },
    props: {

    },
  }

</script>

<style scoped>
  *{
  	margin:0;
  }

  .ch{
  	height:80px;
  	border-bottom:1px solid rgb(216,216,216);
    position: fixed;
    top:0;
    z-index: 1000;
    width: 100%;
    background-color: white;
  }

  .ch-m{
  	margin: 0 auto;
  	width: 1200px;
  	height: 80px;
  	display: flex;
  	flex-direction: row;
  }

  .t-img{
  	width: 133px;
  	height: 80px;
  	display: flex;
  	align-items:center;
  }

  .t-img-o{
  	width: 133px;
  	height: 40px;
  }

  .ch-m-2{
  	width:50px;
  	height: 80px;
  	margin-left:10px;
  	margin-right:10px;
  }

  .ch-m-34{
  	width:70px;
  	height:80px;
  	margin-left:5px;
  	margin-right:5px;
  	display: flex;
  	align-items:center;
  }

  .tsp{
  	width: 70px;
  	text-align: center;
  	font-size: 18px;

    border: 0px;

    background-color: transparent;


  }

  .tsp a{
    text-decoration: none;
  }

  .ch-m-5{
  	width:730px;
  	height: 80px;
  }

  li{
  	list-style: none;
  }
</style>
