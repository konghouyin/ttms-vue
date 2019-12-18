<template>
  <div class="Cshow_body" style="width:100%;margin-top: 20px;">
    <div class="block">
      <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
      </el-date-picker>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <span style="color: #409EFF; display: flex; align-items: center;">该评论由用户
            <el-tag effect="light" type="info" style="display: flex; align-items: center;margin: 0 10px;">
              {{props.row.user}}
            </el-tag>
            发表，所评论影片为
            <el-tag effect="light" type="info" style="display: flex; align-items: center;margin: 0 10px;">
              {{props.row.film}}
            </el-tag>
          </span>
          <el-form label-position="left" inline class="demo-table-expand">
            <div class="showList_title">
              <el-form-item label="详细内容">
                <span>{{ props.row.name }}</span>
              </el-form-item>
            </div>
          </el-form>
          <div class="coList_btn">
            <el-button size="mini" @click="handleEdit(props.$index, props.row)">驳回</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(props.$index, props.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="评论时间" sortable prop="date">
      </el-table-column>
      <el-table-column label="内容" prop="comm">
      </el-table-column>
      <el-table-column label="影片名" prop="film" column-key="film" :filters="fnamecomputed" :filter-method="filterHandler">
      </el-table-column>
      <el-table-column label="举报类型" prop="ftype" :filters="ftypecomputed" :filter-method="filterHandler">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" class="card">{{scope.row.ftype}}</el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
	import Axios from '@/axios'
export default {
  data () {
    
    return {
      tableData: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: ''
    }
  },
  mounted() {
  	this.refresh ()
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
	  console.log(row.id)
	  
	  Axios.send('/report/overrule', 'post', {
	  	comment_id : row.id
	  }).then(res => {
		 this.refresh ()
	  }, error => {
	    alert('驳回添加失败')
	    console.log('commentOverruleError', error)
	  }).catch(err => {
	    throw err
	  })
    },
    handleDelete (index, row) {
      console.log(index, row)
	  Axios.send('/report/del', 'post', {
	  	comment_id : row.id
	  }).then(res => {
	  	this.refresh () 
	  }, error => {
	    alert('删除失败')
	    console.log('commentDelError', error)
	  }).catch(err => {
	    throw err
	  })
	 },
	 refresh () {
		  Axios.send('/report/comment', 'get', {
		  		
		  }).then(res => {
		    console.log(res)
		  	var list=[]
		  	res.obj.forEach(function(item){
		  		list.push({
		  	  id:item.comment_id,
		  	  date: item.comment_time,
		  	  name: item.comment_message,
		  	  comm: item.comment_message.substr(0, 10) + '........',
		  	  user: item.username,
		  	  film: item.playname,
		  	  ftype: item.type
				})
		  	})
		  	this.tableData = list
			}, error => {
				alert('*****添加失败')
				console.log('commentOverruleError', error)
			}).catch(err => {
				throw err
			})
		},
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  },
  computed: {
    fnamecomputed () {
      let back = []
      let set = new Set()
      this.tableData.forEach((item) => {
        set.add(item.film)
      })
      set = [...set]
      set.forEach((item) => {
        back.push({
          text: item,
          value: item
        })
      })
      return back
    },
    ftypecomputed () {
      let back = []
      let set = new Set()
      this.tableData.forEach((item) => {
        set.add(item.ftype)
      })
      set = [...set]
      set.forEach((item) => {
        back.push({
          text: item,
          value: item
        })
      })
      return back
    }
  }
}
</script>

<style scoped="scoped">
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .showList_title {
    text-align: center;
  }

  .Cshow_body_top {
    margin-top: 30px;
  }

  .coList_btn {
    float: right;
  }

  span {
    height: 28px;
  }
</style>
