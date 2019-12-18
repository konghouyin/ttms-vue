<template>
    <div style="width: 100%;">
        <div class="show_top">
            <div class="show_top_left">
                <router-link to="/manager/user/add">
                    <el-button type="success" size="small" round>
                        添加用户
                    </el-button>
                </router-link>
            </div>
        </div>
        <div class="show_body">
            <el-main style="width: 100%; height: 476px;">
                <el-table :data="UserData">
                    <el-table-column prop="id" label="用户id">
                    </el-table-column>
                    <el-table-column prop="name" label="用户名">
                    </el-table-column>
                    <el-table-column prop="password" label="密码">
                        <template slot-scope="scope">
                            <i class="el-icon-view"></i>
                            <span style="margin-left: 10px" @click="show(scope.row.password)">{{scope.row.password.isShow?scope.row.password.item:'*****' }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="power" label="权限">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium" v-for="item in scope.row.power" class="card">{{ item }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="email" label="邮箱">
                    </el-table-column>
                    <el-table-column label="操作">
                        <div slot-scope="scope" style="display: flex;align-items:center;justify-content:space-around">
                            <el-button type="primary" icon="el-icon-edit" size="small" circle @click="handleEdit(scope.row)">
                            </el-button>
                            <el-button type="danger" icon="el-icon-delete" size="small" circle @click="del()"></el-button>
                        </div>
                    </el-table-column>
                </el-table>
            </el-main>
        </div>
    </div>
</template>

<script>
    import Axios from '@/axios'
    var k;
    export default {
        data() {
            return {
                UserData: [{
                    id: '',
                    name: '',
                    password: {
                        item: '',
                        isShow: false
                    },
                    power: [],
                    email: ''
                }, ],
            }
        },
        mounted() {
            Axios.send('/PersonQuery', 'post', {

            }).then(res => {
                console.log(res)
                let list = []
                res.obj.forEach(function(item) {
                    list.push({
                        id: item.user_id,
                        name: item.user_name,
                        password: {
                            item: item.user_password,
                            isShow: false
                        },
                        power: item.user_status.split(',').map((item) => {
                            if (item == 1) return "剧目管理"
                            if (item == 2) return "影厅管理"
                            if (item == 3) return "计划管理"
                            if (item == 4) return "财务管理"
                            if (item == 5) return "人员管理"
                            if (item == 6) return "评论管理"
                            if (item == 7) return "销售管理"
                            if (item == 8) return "用户"
                        }),
                        email: item.user_mail ? item.user_mail : '',
                    })
                })

                this.UserData = list
            }, error => {
                console.log('registerAxiosError', error)
            }).catch(err => {
                throw err
            })
        },
        components: {

        },
        methods: {
            del: function() {
                confirm("确定删除吗？")
            },
            show(k) {
                console.log(k);
                k.isShow = !k.isShow;
            },
            handleEdit(row) {
                this.$router.push({path: 'modify', query: {id: row.id}})
            }
        },
        computed: {

        }
    }
</script>

<style scoped>
    .show_top_left {
        margin-top: 15px;
        float: right;
    }

    #add_style {
        color: #FFFFFF;
        text-decoration: none;
    }

    .card {
        display: table;
    }
</style>
