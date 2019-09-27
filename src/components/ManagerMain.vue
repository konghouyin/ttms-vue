<template>
  <div class="manager-main-body">
    <m-top></m-top>
    <div class="manager-local-father">
      <el-container style="height: 600px; border: 1px solid #eee; margin-top: 3px;">
        <m-form :data="formdata"></m-form>
        <router-view />
      </el-container>
    </div>
  </div>

</template>

<script>
  import mTop from './ManagerTop.vue'
  import mForm from './ManagerForm.vue'
  export default {
    data() {
      return {
        formdata: [{
            title: "剧目管理",
            son: [{
                title: "剧目查询",
                link: "/manager/play/query"
              },
              {
                title: "增加剧目",
                link: "/manager/play/add"
              },
              {
                title: "修改剧目",
                link: "/manager/play/change",
              }
            ]
          },
          {
            title: "影厅管理",
            son: [{
                title: "影厅查询",
                link: "/manager/cinema/query"
              },
              {
                title: "增加影厅",
                link: "/manager/cinema/add"
              },
              {
                title: "修改影厅",
                link: "/manager/cinema/change",
              }
            ]
          },
          {
            title: "计划管理",
            son: [{
                title: "计划查询",
                link: "/manager/plan/query"
              },
              {
                title: "增加计划",
                link: "/manager/plan/add"
              }
            ]
          }
        ]
      }
    },
    components: {
      mTop,
      mForm
    },
    props: {

    }
  }
</script>

<style scoped>
  .manager-main-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .manager-local-father {
    width: 900px;
  }
</style>
