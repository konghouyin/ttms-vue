<template>
  <div>
    <m-top></m-top>
    <div class="body">
      <div class="left">
        <m-form :data="formdata"></m-form>
      </div>
      <div class="right">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first" class="asd"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import mForm from './ManagerForm.vue'
  import mTop from './ManagerTop.vue'
  export default {
    data() {
      return {
        activeName: 'first',
        formdata: [{
            title: "财务管理",
            son: [{
                title: "财务查询",
                link: "/play/query"
              },
              {
                title: "增加财务",
                link: "/play/add"
              },
              {
                title: "修改财务",
                link: "/play/change",
              }
            ]
          },
          {
            title: "计划管理",
            son: [{
                title: "计划查询",
                link: "/plan/query"
              },
              {
                title: "增加计划",
                link: "/plan/add"
              },
              {
                title: "修改计划",
                link: "/plan/change",
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      mTop,
      mForm
    }
  }
</script>

<style scoped>
  .body{
    width:800px;
    margin: 0 auto;
  }
  .left {
    float: left;
    width: 200px;
  }

  .right {
    margin-left: 200px;
  }
  .asd{
    font-size: 30px;
    }
</style>
