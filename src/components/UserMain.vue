<template>
  <!-- 接入五个初始组件 -->
  <div>

     <div class="copy"></div>
     <u-pt></u-pt>


      <div>
         <router-view/>
      </div>
      
      
    <div>

      <u-bottom></u-bottom>
    </div>
  </div>
</template>

<script>
  import uTop from './UserTop.vue'
/*  import uPicture from './UserPicture.vue'
  import uMovie from './UserMovie.vue'
  import uDouble from './UserDouble.vue' */
  import uBottom from './UserBottom.vue'

  import fPage from './UserfPage.vue'

  import uPt from './UserTopTest'

  export default {
    data() {
      return {
        formdata: [{

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
      uTop,
      uBottom,
      fPage,
      uPt,
    },
    props: {

    },
   }
</script>

<style>
  .copy{
    height: 81px;
    width: 100%;
  }
</style>
