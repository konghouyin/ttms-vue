<template>
  <el-submenu :index="index">
<template slot="title">{{title}}</template>
    <el-menu-item-group>
      <div class="child">
        <router-link :to="item.link" tag="el-menu-item" v-for="(item,sonindex) in son" :index="index+sonindex">
          <i class="el-icon-arrow-right manager-icon" style="font-size: 12px;"></i>{{item.title}}</router-link>
      </div>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      title: {
        type: String
      },
      index: {
        type: String
      },
      son: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .manager-icon {
    font-size: 12px;
    position: absolute;
    left: 40px;
    top: 18px
  }

  .child {
    background-color: #FFFFFF;
  }
</style>
