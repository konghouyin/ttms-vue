`<template>
  <div class="manager">
    <div class="manager-body">
      <div class="manager-title">星云影院</div>
      <div class="manager-router"><span>首页</span><span>我的</span><span>注销</span><span>联系我们</span></div>
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

<style scoped>
  .manager {
    height: 42px;
    width: 100%;
    background-color: #409EFF;
    display: flex;
    justify-content: center;
  }

  .manager-body {
    position: relative;
    width: 900px;
    height: 100%;
  }

  .manager-title {
    height: 100%;
    position: absolute;
    left: 30px;
    display: flex;
    align-items: center;
    font-size: 25px;
    color: #FDF5E6;
    font-weight: 900;
    font-family: "黑体";
    cursor: default;
  }

  .manager-router {
    width: 400px;
    height: 100%;
    position: absolute;
    left: 500px;
    display: flex;
    justify-content: space-around;
  }

  span {
    display: flex;
    align-items: center;
    color: #FDF5E6;
    font-weight: 500;
    cursor: pointer;
  }
</style>
