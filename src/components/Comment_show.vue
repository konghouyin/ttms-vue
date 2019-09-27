<template>
	<div class="Cshow_body">
		<div class="Cshow_body_top">
		</div>
		<div>
			  <div class="block">
			    <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至"
			      start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
			    </el-date-picker>
			  </div>
			<el-table
			  :data="tableData"
			  style="width: 100%">
			  <el-table-column type="expand">
			    <template slot-scope="props">
					<span style="color: #409EFF; display: flex; align-items: center;" >该评论由用户
					<el-tag effect="dark" type="danger" style="display: flex; align-items: center;">
					{{props.row.user}}
					</el-tag>
					发表，所评论影片为
					<el-tag effect="dark" type="success" style="display: flex; align-items: center;">
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
					  <el-button
					    size="mini"
					    @click="handleEdit(scope.$index, scope.row)">驳回</el-button>
					  <el-button
					    size="mini"
					    type="danger"
					    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				  </div>
			    </template>
			  </el-table-column>
			  <el-table-column
			    label="评论时间"
				sortable
			    prop="date">
			  </el-table-column>
			  <el-table-column
			    label="内容"
			    prop="comm">
			  </el-table-column>
			  <el-table-column
			    label="影片名"
			    prop="film"
				column-key="film"
				:filters="fnamecomputed"
				:filter-method="filterHandler"
				>
			  </el-table-column>
			  <el-table-column
			    label="举报类型"
			    prop="ftype"
				:filters="ftypecomputed"
				:filter-method="filterHandler">
				<template slot-scope="scope">
				          <div slot="reference" class="name-wrapper">
				            <el-tag size="medium" class="card">{{scope.row.ftype}}</el-tag>
				          </div>
				      </template>
			  </el-table-column>
			</el-table>
		</div>
	</div>
	  
</template>

<script>
	export default{
		data(){
			const llist = "To the time to life, rather than to life in time to the time to life, rather than to life in time..Life had a lot of things is futile, but we still want to experience.";
			
			return {
				tableData:[{
					date:'2016-05-02',
					name:llist,
					comm : llist.substr(0,10)+"........",
					user: "wolfsky",
					film:"打工姐妹花",
					ftype: "黄色"
				},{
					date: '2016-05-04',
					name:llist,
					comm : llist.substr(0,10)+"........",
					user:"wolf",
					film:"老友记",
					ftype:"暴力"
				},{
					date:'2015-05-01',
					name:llist,
					comm : llist.substr(0,10)+"........",
					user: "sky",
					film:"老友记",
					ftype:"反动"
				},{
					date: '2016-05-03',
					name:llist,
					comm : llist.substr(0,10)+"........",
					user:"skywolf",
					film:"老友记",
					ftype:"粗鄙"
				}],
				pickerOptions: {
				          shortcuts: [{
				            text: '最近一周',
				            onClick(picker) {
				              const end = new Date();
				              const start = new Date();
				              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
				              picker.$emit('pick', [start, end]);
				            }
				          }, {
				            text: '最近一个月',
				            onClick(picker) {
				              const end = new Date();
				              const start = new Date();
				              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
				              picker.$emit('pick', [start, end]);
				            }
				          }, {
				            text: '最近三个月',
				            onClick(picker) {
				              const end = new Date();
				              const start = new Date();
				              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
				              picker.$emit('pick', [start, end]);
				            }
				          }]
				        },
				        value1: '',
				        value2: ''
				      }
		},
		methods:{
		      handleEdit(index, row) {
		        console.log(index, row);
		      },
		      handleDelete(index, row) {
		        console.log(index, row);
		      },
			  filterHandler(value, row, column) {
			    const property = column['property'];
			    return row[property] === value;
			  }
		    },
		computed:{
			fnamecomputed() {
			  let back = [];
			  let set = new Set();
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
			ftypecomputed(){
				let back = [];
				let set = new Set();
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
	  .showList_title{
		  text-align: center;
	  }
	  .Cshow_body_top{
		  margin-top: 30px;
	  }
	  .coList_btn{
		  float: right;
	  }
	  span{
		  height: 20px;
	  }
</style>
