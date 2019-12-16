<template>
    <div style="width: 270px; margin-top: 50px;">
        <div style="text-align:left;font-weight: 400;color: #666;ont: 400 14px/1.5 'Hiragino Sans GB','WenQuanYi Micro Hei',tahoma,sans-serif;">账号登陆</div>
        <el-form :model="login" ref="login" label-width="0" class="demo-ruleForm" style="margin: 0; padding: 0;">
            <el-form-item label="" prop="user" :rules="[
                { required: true, message: '用户名不能为空'},
              ]">
                <el-input style="margin-top: 8px;" placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="login.user">
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password" :rules="[
              { required: true, message: '密码不能为空'},
            ]">
                <el-input style="margin-bottom: 8px;" placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="login.password"
                    show-password>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" style="margin-top: 10px; margin-bottom: 8px;" @click="submitForm('login')">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    登陆
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </el-button>
            </el-form-item>
        </el-form>

        <div style="text-align:left;font-weight: 400;color: #666;ont: 400 14px/1.5 'Hiragino Sans GB','WenQuanYi Micro Hei',tahoma,sans-serif;">
            还没有账号？<router-link :to="link" tag="span" style="color:red;cursor:pointer">立即注册</router-link>
        </div>
    </div>
</template>

<script>
    import Axios from '@/axios'
    export default {
        data() {
            return {
                link: '/log/logon',
                login: {
                    user: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        Axios.send('/login', 'post', {
                            username: this.login.user,
                            password: this.login.password
                        }).then(res => {
                            console.log(res)
                            this.$router.push('/user')
                        }, error => {
                            console.log('registerAxiosError', error)
                        }).catch(err => {
                            throw err
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style scoped>

</style>
