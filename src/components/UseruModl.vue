<template>
  <div class="flexm">
    <div class="movie_object" v-for="item in ggh">
      <!-- <img :scr="item" class="movie_object_1"></img> -->
      <router-link :to="{path:'/film',query: {id:item.id}}" style="color:white"><img class="movie_object_1" :src="item.pic" /></router-link>
      <div class="movie_object_2">
        <router-link to="/user/dmovie" style="color:white;text-decoration: none;">选座购票</router-link>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        formdata: [{

        }]
      }
    },
    components: {},
    props: {
      ggh: Array
    },
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    color: #333;
  }

  .flexm {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;

    width: 1050px;
  }

  .total-xy {
    width: 1050px;
  }

  .movie_object {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
    height: 330px;
    width: 198px;
    text-align: center;
    background-color: peachpuff
  }

  .movie_object_1 {
    height: 273px;
    width: 198px
  }

  .movie_object_2 {
    height: 57px;
    width: 198px;
    background-color: #eb002a;
    text-align: center;
    line-height: 57px
  }
</style>
