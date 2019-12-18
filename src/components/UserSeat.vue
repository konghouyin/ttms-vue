<template>
    <div class="ust-body">

        <div class="ub-l">
            <div class="seat-example">
                <div class="selectable-example example">
                    <span>可选座位</span>
                </div>
                <div class="sold-example example">
                    <span>已售座位</span>
                </div>
                <div class="selected-example example">
                    <span>已选座位</span>
                </div>
            </div>
        </div>

        <div class="ub-r">
            <div class="ub-r-b">
                <div class="ub-r-b-ob-1">
                    <img src="https://p0.meituan.net/movie/c5975d98fc484027ff55d813ab3b2daa427032.jpg@115w_158h_1e_1c"
                        class="urbo1-l"></img>
                    <div class="urbo1-r ">
                        <div class="urbo1-r-1">
                            <h3>{{movieData.m_name}}</h3>
                        </div>
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
                    <el-button type="primary" style="margin-top: 50px; width:180px;"><a style="color: white;">确认选座</a></el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
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
        mounted() {
            this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0)
        },
        computed: {
            bw: function() {
                return parseInt(this.ruleForm.col) * 22 + 'px'
            },
            bh: function() {
                return parseInt(this.ruleForm.row) * 18.2 + 'px'
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!')
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            },
            change(index) {
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
                handler: function(val, oldVal) {
                    this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0)
                },
                deep: true
            },
            'ruleForm.col': {
                handler: function(val, oldVal) {
                    this.num = new Array(this.ruleForm.col * this.ruleForm.row).fill(0)
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .seat-example {
        margin: 30px 0 30px 118px;
    }

    .example {
        display: inline-block;
        font-size: 16px;
        color: #666;
        height: 26px;
        line-height: 26px;
        padding-left: 38px;
        background-repeat: no-repeat;
        margin-right: 50px;
    }
    .selectable-example{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAY9JREFUSA3tVs1qg0AQ3l1/i5eCFC8+QSC0+BQ999QeC32t9lLovac8RQwk6BOUXLzVitFE0/mEDVIiJsbkUgeM7jjzfd/OjpvlrGZhGL6uVqvnsix5zX3yoxBia5rm22g0etkL5vt+WRTFtm8DJrDrpKI+wExJXd3VyzMw/1axf5YDpe6IqRSPUJZlGdQdmN4eBixgAps4nmRGRUyOCTneXddlnHOWJEkv5CAFFjCBTeOP2Wz2CXI+nU7vqZkmnudVAXBuNptKpWVZGHa2OI4ZdTPTNK3CIB42n89TarYHQWpuHcfJoEqaqqqViFNKDhKUV5ICGxy2bQt6d4cfU1EUQ5LKO4KQ3NWQW5+MxAEXCbraNZd8can7QHypSrOh1EOpz1YBtQkZOw+2zK67V1teI7FhGGy9XjfpavWDWNf1xrhGYtpTGa5z2f/6jmkZFPwff0VR1H0xj1yL5XKJhv3hQRDoaZriILClKz8S5+hwIk3ptHNTHTtowBeLxXWe5/2d8vZIoi4X4/H4myZY/AJMWAAq2pF/7QAAAABJRU5ErkJggg==);
        }
    .sold-example{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAeRJREFUSA3tlr9Lw0AUx99dmyZtpRbBX6AOoiAG1KF1EXFUcBMEHRX/LV0EFyfBUhwFJwWdXC2CIKKIttU0TXLPd6kJaaFQz3bSB0kud+99P3ePl7swiNjZ4uz+h+PueAgs0v3rZowBpjXtYPXydi8QiwcN+ZTQlbEBFmNd5YKHyM4fXncJEYJ5FCxX2m2o1JearVlsAkcn0et2CD7NmVt6nMPdu0Up97rGrdY9X1NqFxbN7UDYBxfzs0XO4HCqPwVxzuH6uQIVxw18lJ9VWsDNSwU0EpfaQoijYt48kYKskDfXBIri0mgWaNy3Z8uBUtmC3FAm7GuMdH5HBLh4fIPpbBJGUrofKKjv6qlsuQgbHBnMj/cZdgCVHoNJzS8IyxWdk1o8bSFAi/EQKoclYzitySwvcCbQoKJrTCkSnCAvh4JVzaXlGdHVfAtxYDoCJsPiUgWoxv2DVTP347j/VP84ZaoBfy/VTT8C0bQ5KKDmefBiqe1etB+D3JvbWVvwZCYFj582xan9jSCdEhMZox0X2oKzehzk1Sv7Y8WFLMaR48PTZ93pVUpbde8rNaBjuMpuN83EXUnYVEJIx2e91bHb7/SNWOn08KBfslSBrLA8l9WNhNq30+Hs7Fqdr4/OlNnxsfcFxEaatII5mN4AAAAASUVORK5CYII=);
    }
    .selected-example{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAoxJREFUSA3Fls9LFGEYx78z7rq7WuEiQqEVi1SHwjrVSU9aghURJYa2UUgd+nEuKAg6dK7cQ6FSCYrdosK/oFupFF46CLkFBZm7s+K4P2benmfGHRx3t5nZXdln2Zl5n3me5/O+z/vMMyNhk0RfY0zL4qrQIW1SV3wpyRA+P8ZfRTGcD+bLX/CZoeF9kMiwqiIEpJXvuEZBLbANwSutNpRXIFH+tmbRBq7qMh2CWeDLoxjgnV1bNlLu4Ob+di5txuTYQ+O4lPc0wEOjmNGAicZmUpMmEQfYoVLhGMmflOo6gGPrGiYHx/CW40oE7dUFZpojPDJR6RTNcgVo2mvuj6n1flxeJGALENy54SuAv0tQJR3nZR042hBGOg9lkwAZcpFRlXuSPY1H4JODho+eoxj0zFhQ1tLCgrsgU5Ufk2kQpIkEthJkSg9VomvparuDeye+4vjuqOFDaYVsVZAtTICYoeK3bHbOg66227hw8AmWlE+Y/T3t7EAWrsFXDk+he//dgqCdrbcI+tSAxuZ7sK4lC2yKKVyD6+UGnG1/jL7IIytOZ+tNXDz0jKCfEZs/CTWXsO45Xdha5v+MXy4M4HrHO5yK3Iegn5L5RdARxFOzBO0hKD0GHsQ1OKurePHlDG50vEdv5IGBiKfmMDLX7RnKzq5TzcYMf07whT8fsJj4iFiZUI7lesVszJLV1wh+2hxUcPS04go4Ba41A5dMNXceLUONnVpfWUJdb6P1F3UvCea3ybpS1MedkvpwKFzatCTYHwL4v11Ssz2uFbiOwT8yCjy+ecvfAJU7q8Cq9PAN6r8ljQ8BQbOgOt5eoZpTD7Sjxah4/u4dnETTDj88vPq9T3A1C/mcH0p/P7R/ODnAZaZCuGEAAAAASUVORK5CYII=)
    }
    .ust-body {
        margin: 0 auto;
        width: 1050px;
        border: 1px solid rgb(229, 229, 229);
        display: flex;
        flex-direction: row;

        height: 620px;

    }

    .ub-l {
        width: 750px;
        height: 620px;
    }

    .ub-r {
        width: 300px;
        height: 620px;

        display: flex;
        flex-direction: column;
    }

    .ub-r-b {
        width: 260px;
        height: 580px;
        padding: 20px;

        display: flex;
        flex-direction: column;
    }

    .urbo1-r-1 {
        width: 150px;
        height: 40px;
    }

    .ub-r-b-ob {
        width: 260px;
        height: 145px;

    }

    .ub-r-b-ob-1 {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .urbo1-l {
        width: 100px;
        height: 145px;
    }

    .urbo1-r {
        width: 150px;
        height: 145px;
        margin-left: 10px;
    }

    .ub-r-b-ob-2 {
        display: flex;
        flex-direction: column;

    }

    .urbo2-o {
        width: 260px;
        height: 36px;
        text-align: left;
    }

    .ub-r-b-ob-4 {
        display: flex;
        flex-direction: row;
        justify-content: center;

    }

    .ticket {
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
