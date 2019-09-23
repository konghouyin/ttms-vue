<template>
  <el-submenu :index="index">
    <template slot="title">{{title}}</template>
    <el-menu-item-group>
      <router-link :to="item.link" tag="el-menu-item" v-for="(item,sonindex) in son"  :index="index+sonindex">{{item.title}}</router-link>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:{
      title:{
        type:String
      },
      index:{
        type:String
      },
      son:{
        type:Array
      }
    }
  }
</script>

<style>
</style>
