<template>
  <div style="width: 100%;">
    <div style="width: 100%; padding-top: 30px;">
      <el-steps :active="active" align-center>
        <el-step title="请选择影片" description=""></el-step>
        <el-step title="请选择场次" description=""></el-step>
        <el-step title="请选择座位" description=""></el-step>
        <el-step title="购买成功" description=""></el-step>
      </el-steps>
    </div>
    <br />
    <br />
    <hr />
    <br />
    <div style="width: 80%; margin: auto;">
      <router-view />
    </div>
  </div>

</template>

<script>
  import eventBus from '../eventBus.js';
  export default {
    data() {
      return {
        active: 0,
      }
    },
    mounted() {

      eventBus.$on('buyadd', (data) => {
        this.active = data;
      })
    },

    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    }

  }
</script>

<style scoped>

</style>
