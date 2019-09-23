<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu >
        <formfather v-for="(item,index) in formdata" :title="item.title" :index = "index+1+''" :son = "item.son"></formfather>
      </el-menu>
    </el-aside>
</template>

<script>
   import formfather from './ManagerFormFather.vue'
  export default {
    data() {
          return {
              formdata:[{title:"剧目管理",
              son:[{
                title:"剧目查询",
                link:"/manager/play/query"
              },
              {
                title:"增加剧目",
                link:"/manager/play/add"
                },
                {
                title:"修改剧目",
                link:"/manager/play/change",
                }
              ]},
              {title:"影厅管理",
              son:[{
                title:"影厅查询",
                link:"/manager/cinema/query"
              },
              {
                title:"增加影厅",
                link:"/manager/cinema/add"
                },
                {
                title:"修改影厅",
                link:"/manager/cinema/change",
                }
              ]},
              {title:"计划管理",
              son:[{
                title:"计划查询",
                link:"/manager/plan/query"
              },
              {
                title:"增加计划",
                link:"/manager/plan/add"
                }
              ]}]
          }
        },
    components: {
      formfather
    },
    props:{
      
    }
  }
</script>

<style>
  .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }

    .el-aside {
      color: #333;
    }
</style>
