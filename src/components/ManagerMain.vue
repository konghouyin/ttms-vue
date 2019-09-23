<template>
  <div class="manager-main-body">
    <m-top></m-top>
    <div class="manager-local-father">
        <router-view/>
    </div>
  </div>

</template>

<script>
  import mTop from './ManagerTop.vue'
  export default {
    data() {
        return{
          
        }
        },
    components: {
      mTop
    },
  }
</script>

<style>
  .manager-main-body{
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
  }
  .manager-local-father{
    width: 900px;
  }
</style>
