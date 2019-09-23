<template>
  <div class="hello">
    <tableas v-bind:message="tabledata"></tableas>
    <div class="click" @click="add">add one</div>
  </div>
</template>

<script>
  import tableas from './manager.vue'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        value1: true,
        value2: true,
        tabledata: [{
            date: '2016-05-02',
            name: '王小虎',
            ddress: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王jikjk',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    },
    components: {
      tableas
    },
    methods: {
      add() {
        this.tabledata.push({
          date: '2016-05-04',
          name: 'xiaozhao',
          address: '上海da'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
