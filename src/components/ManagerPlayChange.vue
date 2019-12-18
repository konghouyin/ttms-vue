<template>
    <div>
        <div class="change">
            <el-input placeholder="请输入影片编号" v-model="input3" class="input-with-select" style="width: 190px;float: left; margin-left: 40px;">
                <el-button slot="append" icon="el-icon-refresh"></el-button>
            </el-input>
            <el-button type="primary" round style="float: right; margin-right: 40px;" @click="red()">重新选择</el-button>
        </div>
        <play-add :id="id"></play-add>
    </div>

</template>

<script>
    import Axios from '@/axios'
    import playAdd from './ManagerPlayAdd'
    export default {
        data() {
            return {
                input3: '',
                id: -1
            }
        },
        methods: {
            red() {
                window.location = '#/manager/play/query'
            }
        },
        components: {
            playAdd
        }
    }
</script>

<style scoped>
    .change {
        width: 100%;
        height: 40px;
        margin-bottom: 15px;
    }
</style>
