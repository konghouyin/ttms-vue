<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="padding-top: 20px;">
        <el-form-item label="影片名称" prop="name" style="display: inline-block;">
            <el-select v-model="ruleForm.name" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="影厅名称" prop="room" style="display: inline-block;">
            <el-select v-model="ruleForm.room" filterable placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="开始时间" required prop="date">
            <el-date-picker style="width:540px" v-model="ruleForm.date" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="排片次数" style="display: inline-block; float: left">
            <el-input-number v-model="ruleForm.num" controls-position="right" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="排片间隔(min)" style="display: inline-block;">
            <el-input-number v-model="ruleForm.long" controls-position="right" :min="10"></el-input-number>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import Axios from '@/axios'
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '罗小黑战记'
                }],
                options2: [{
                    value: '选项1',
                    label: '1号厅'
                }],
                value: '',
                ruleForm: {
                    num: '',
                    long: '',
                    name: '',
                    room: '',
                    date: '',
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请选择影片名称',
                        trigger: 'change'
                    }],
                    room: [{
                        required: true,
                        message: '请选择影厅名称',
                        trigger: 'change'
                    }],
                    date: [{
                        type: 'date',
                        required: true,
                        message: '请选择日期',
                        trigger: 'change'
                    }]
                }
            };
        },
        mounted() {
            Axios.send('/display', 'post', {}).then(res => {
                console.log(res)
                let list = []
                res.obj.forEach((item) => {
                    list.push({
                        value: item.play_id,
                        label: item.play_name
                    })
                })
                this.options = list
            }, error => {
                console.log('displayAxiosError', error)
            }).catch(err => {
                throw err
            })
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>

</style>
