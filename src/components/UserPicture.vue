<template>
    <div class="u-pic-cc">
      <div class="block">
        <el-carousel height="370px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="http://gw.alicdn.com/tfs/TB1GRxRfZLJ8KJjy0FnXXcFDpXa-1920-360.jpg" style="height: 370px;" />
            <h3 class="small"></h3>
          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return{}
    },
  }
</script>

<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  /* .u-pic-cc{
    margin-top:81px;
  } */
</style>
