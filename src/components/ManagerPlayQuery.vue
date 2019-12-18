<template>
    <el-container style="max-height: 670px;">
        <el-main style="overflow: auto; padding: 0;">
            <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%;">
                <el-table-column prop="order" label="编号" sortable>
                </el-table-column>
                <el-table-column prop="name" label="片名">
                </el-table-column>
                <el-table-column prop="length" label="片长">
                </el-table-column>
                <el-table-column prop="status" :filters="[{ text: '正在热映', value: '正在热映' }, { text: '已经下线', value: '已经下线' },{ text: '即将上映', value: '即将上映' }]"
                    :filter-method="filterTag" label="状态">
                </el-table-column>
                <el-table-column align="right" style="padding: 0;" width="160px">
                    <div slot="header" slot-scope="scope" style="width: 100%; height: 100%; margin: 0; padding: 0; display: flex;align-items:center">
                        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                    </div>
                    <div slot-scope="scope" style="display: flex;align-items:center;justify-content:space-around">
                        <el-button size="small" type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.row)"></el-button>
                        <el-button size="small" type="danger" icon="el-icon-delete" circle @click="handleDelete()"></el-button>
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
            Axios.send('/display', 'post', {}).then(res => {
                console.log(res)
                let list = []
                res.obj.forEach((item) => {
                    list.push({
                        order: item.play_id,
                        name: item.play_name,
                        length: item.play_length + "min",
                        status: item == 1 ? '正在热映' : item == 2 ? "即将上映" : "已经下线"
                    })
                })
                this.tableData = list
            }, error => {
                console.log('displayAxiosError', error)
            }).catch(err => {
                throw err
            })
        },
        methods: {
            handleEdit(row) {
                this.$router.push({
                    path: '/manager/play/change',
                    query: {
                        id: row.order
                    }
                })
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            filterTag(value, row) {
                return row.status === value;
            },
        },
    }
</script>

<style>

</style>
