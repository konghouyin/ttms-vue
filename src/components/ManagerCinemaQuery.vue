<template>
    <el-container style="max-height: 670px;">
        <el-main style="overflow: auto; padding: 0;">
            <el-table :data="tableData.filter(data => !search || data.room_name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%;">
                <el-table-column prop="room_id" label="编号" sortable>
                </el-table-column>
                <el-table-column prop="room_name" label="影厅名称">
                </el-table-column>
                <el-table-column prop="room_row" label="影厅行数">
                </el-table-column>
                <el-table-column prop="room_col" label="影厅列数">
                </el-table-column>
                <el-table-column prop="room_status" label="状态">
                </el-table-column>
                <el-table-column align="right" style="padding: 0;" width="160px">
                    <div slot="header" slot-scope="scope" style="width: 100%; height: 100%; margin: 0; padding: 0; display: flex;align-items:center">
                        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                    </div>
                    <div slot-scope="scope" style="display: flex;align-items:center;justify-content:space-around;">
                        <el-button size="small" type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)"></el-button>
                        <el-button size="small" type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
                    </div>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    import Axios from '@/axios'

    export default {
        data() {

            return {
                tableData: [],
                search: ''
            }
        },
        mounted() {
            Axios.send('/cinemaQuery', 'get', null).then(res => {
                console.log(res)

                this.tableData = res.obj.map((item) => {
                    item.room_status = item.room_status == 1 ? "启用" : "停用"
                    return item
                })
            }, error => {
                console.log('cinemaQueryAxiosError', error)
            }).catch(err => {
                throw err
            })
        },
        methods: {
            handleEdit(index, row) {

                this.$router.push({path: 'change', query: {id: row.room_id}})

            },
            handleDelete(index, row) {
                console.log(index, row);
                Axios.send('/cinemaDelete', 'post', {
                    room_id: row.room_id,

                }).then(res => {
                    console.log(res)
                    Axios.send('/cinemaQuery', 'get', null).then(res => {
                        console.log(res)

                        this.tableData = res.obj.map((item) => {
                            item.room_status = item.room_status == 1 ? "启用" : "停用"
                            return item
                        })
                    }, error => {
                        console.log('cinemaQueryAxiosError', error)
                    }).catch(err => {
                        throw err
                    })
                }, error => {
                    console.log('cinemaDelateAxiosError', error)
                }).catch(err => {
                    throw err
                })
            }
        }
    }
</script>

<style>

</style>
