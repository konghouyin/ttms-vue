<template>
    <div class="ust-body">

      <div class="ub-l">
        <div style="display: flex; width: 100%; justify-content:center; height: 400px; align-items:center; margin-bottom: 20px ;margin-top: 80px;">
          <div :style=" {width: bw,height: bh}">
            <el-image  v-for="(item,index) in num" class="img" @click="change(index)" :src="imgsrc[item]"></el-image>
          </div>
        </div>
      </div>

      <div class="ub-r">
        <div class="ub-r-b">
           <div class="ub-r-b-ob-1">
              <img src="https://p0.meituan.net/movie/c5975d98fc484027ff55d813ab3b2daa427032.jpg@115w_158h_1e_1c" class="urbo1-l"></img>
              <div class="urbo1-r ">
                <div class="urbo1-r-1"><h3>{{movieData.m_name}}</h3></div>
                <div class="urbo1-r-23">
                    类型 : {{movieData.type}}
                </div>
                <div class="urbo1-r-23">
                    时长 : {{movieData.time}}
                </div>
              </div>
           </div>
           <div class="ub-r-b-ob-2">

              <div class="urbo2-o">影厅版本 : {{movieData.studio}}</div>
              <div class="urbo2-o">版本 : {{movieData.version}}</div>
              <div class="urbo2-o">场次 : {{movieData.start_time}}</div>
              <div class="urbo2-o">票价 : {{movieData.price}}</div>
           </div>
           <div class="ub-r-b-ob">
              <span class="ticket" data-row-id="5" data-column-id="06" data-index="5-06">
                5排06座
               </span>
           </div>
           <div class="ub-r-b-ob-4">
              <el-button type="primary" style="margin-top: 50px; width:180px;" ><a style="color: white;">确认选座</a></el-button>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      movieData: {
        m_name: '李仁港',
        type: '冒险,动作,爱情',
        version: '国语2D',
        time: '125分钟',
        start_time: '今天 9月26 22:35',
        price: '30',
        studio: '3号厅'
      },

      num: [],
      imgsrc: [require('@/assets/set.png'), require('@/assets/none.png'), require('@/assets/stop.png')],
      ruleForm: {
        name: '',
        row: 20,
        col: 30,
        status: true
      },
      rules: {
        name: [{
          required: true,
          message: '请输入影厅名称',
          trigger: 'blur'
        },
        {
          min: 1,
          max: 10,
          message: '长度在 1 到 10 个字符',
          trigger: 'blur'
        }
        ]
      }
    }
  },
  mounted () {
    this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0)
  },
  computed: {
    bw: function () {
      return parseInt(this.ruleForm.col) * 22 + 'px'
    },
    bh: function () {
      return parseInt(this.ruleForm.row) * 18.2 + 'px'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    change (index) {
      if (this.value2) {
        if (this.num[index] != 2) {
          this.num[index] = 2
        } else {
          this.num[index] = 0
        }
      } else {
        if (this.num[index] != 1) {
          this.num[index] = 1
        } else {
          this.num[index] = 0
        }
      }
      this.num = [...this.num]
    }
  },
  watch: {
    'ruleForm.row': {
      handler: function (val, oldVal) {
        this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0)
      },
      deep: true
    },
    'ruleForm.col': {
      handler: function (val, oldVal) {
        this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.ust-body{
  margin: 0 auto;
  width:1050px;
  border:1px solid rgb(229,229,229);
  display: flex;
  flex-direction:row;

  height: 620px;

}

.ub-l{
  width: 750px;
  height: 620px;
}

.ub-r{
  width: 300px;
  height: 620px;

  display: flex;
  flex-direction:column;
}

.ub-r-b{
  width:260px;
  height: 580px;
  padding: 20px;

  display: flex;
  flex-direction:column;
}

.urbo1-r-1{
  width: 150px;
  height:40px;
}

.ub-r-b-ob{
  width: 260px;
  height: 145px;

}

.ub-r-b-ob-1{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.urbo1-l{
  width: 100px;
  height: 145px;
}

.urbo1-r{
  width:150px;
  height:145px;
  margin-left:10px;
}

.ub-r-b-ob-2{
  display: flex;
  flex-direction: column;

}

.urbo2-o{
  width:260px;
  height:36px;
  text-align: left;
}

.ub-r-b-ob-4{
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.ticket{
  cursor: default;
  position: relative;
  font-size: 12px;
  color: #f03d37;
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 12px 10px 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeCAYAAABwmH1PAAAAAXNSR0IArs4c6QAAAXlJREFUWAlj/Oho7cXAzLTg/89fogzDGDCys71m+PsvgeGji+2r38eP/h/u4Pexo/9BfmUCxSyLhdUwjluI11gsrRhAfmUa9j5F8+Coh9ECZNhxR2N42EUpmodGZgx/TYz9+nvzhn9ogTEsuUysDGxS/548jP4+qe/0l6zUL//fvh2WHoV5ihHGALa0GD872rQxamrm8EybzQMTH070RzsLBngeZmRk/M+7/0jVv9s3rw7n5A33MCgmQZ4GRnn7r3Vrvw+nmEX2C4qHQRLMPxlO/X38kA1Z0XBiY3h4OHkOm18wPPyXncGMWVb+FzbFw0EMxcOgkvo/A0MlW1Aw53DwHDY/wD0Mq5aYVNW1WX0D4OLYNA1lMZavtraSoGT8ydWukklTU5u7uWNY1sGwSGL5zfDrGYuM6ldQMh7OMQv3MIjBPX8xN0xguNPDNq/iirhRD+MKmeEiPhrDwyUmcflj5MUwaM7lz/FjuAJk2IiD/AjyK+NIm0wDAACxUs8MaULTAAAAAElFTkSuQmCC) no-repeat;
}

  .img {
    width: 15px;
    height: 13px;
    margin-left: 7px;
  }

</style>
