<template>
  <div class="manager-main-body">
    <m-top></m-top>
    <div class="manager-local-father">
      <el-container style="height: 100%; border: 1px solid #eee; margin-top: 3px;">
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
  data () {
    return {
      formdata: [{
        title: '剧目管理',
        son: [{
          title: '剧目查询',
          link: '/manager/play/query'
        },
        {
          title: '增加剧目',
          link: '/manager/play/add'
        },
        {
          title: '修改剧目',
          link: '/manager/play/change'
        }
        ]
      },
      {
        title: '影厅管理',
        son: [{
          title: '影厅查询',
          link: '/manager/cinema/query'
        },
        {
          title: '增加影厅',
          link: '/manager/cinema/add'
        },
        {
          title: '修改影厅',
          link: '/manager/cinema/change'
        }
        ]
      },
      {
        title: '计划管理',
        son: [{
          title: '计划查询',
          link: '/manager/plan/query'
        },
        {
          title: '增加计划',
          link: '/manager/plan/add'
        }
        ]
      },
      {
        title: '财务管理',
        son: [{
          title: '统计报表',
          link: '/manager/finance'
        },
        {
          title: '员工业绩',
          link: '/manager/conductor'
        }
        ]
      },
      {
        title: '人员管理',
        son: [{
          title: '人员查询',
          link: '/manager/user/show'
        },
        {
          title: '人员添加',
          link: '/manager/user/add'
        }, {
          title: '人员修改',
          link: '/manager/user/modify'
        }
        ]
      }, {
        title: '评论管理',
        son: [{
          title: '评论规则',
          link: '/manager/comment/filter'
        },
        {
          title: '评论举报',
          link: '/manager/comment/show'
        }
        ]
      }, {
        title: '销售管理',
        son: [{
          title: '售票',
          link: '/manager/market/buy'
        },
        {
          title: '退票',
          link: '/manager/market/refund'
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
