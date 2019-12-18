<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 10px;">
        <el-form-item label="URL地址" prop="url">
            <el-input v-model="ruleForm.url" style="width: 450px; float: left;"></el-input>
            <el-button type="success" @click="analysis">解析</el-button>
        </el-form-item>
        <el-form-item label="电影名称" prop="name" style="display: inline-block;">
            <el-input v-model="ruleForm.name" style="width: 230px; float: left;"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type" style="display: inline-block;">
            <el-input v-model="ruleForm.type" style="width: 230px; float: left; margin-right: 30px;"></el-input>
        </el-form-item>
        <el-form-item label="导演" prop="director" style="display: inline-block;">
            <el-input v-model="ruleForm.director" style="width: 230px; float: left; "></el-input>
        </el-form-item>
        <el-form-item label="片长" prop="length" style="display: inline-block;">
            <el-input v-model="ruleForm.length" style="width: 230px; float: left; margin-right: 30px;"></el-input>
        </el-form-item>
        <el-form-item label="语言" prop="language" style="display: inline-block;">
            <el-input v-model="ruleForm.language" style="width: 230px; float: left; "></el-input>
        </el-form-item>
        <el-form-item label="国家" prop="country" style="display: inline-block;">
            <el-input v-model="ruleForm.country" style="width: 230px; float: left; margin-right: 30px;"></el-input>
        </el-form-item>
        <el-form-item label="演出人员" prop="actor">
            <el-input v-model="ruleForm.actor" style="width: 570px; float: left;"></el-input>
        </el-form-item>
        <el-form-item label="海报链接" prop="img">
            <el-input v-model="ruleForm.img" style="width: 570px; float: left;"></el-input>
        </el-form-item>
        <el-form-item label="推广链接" prop="link">
            <el-input v-model="ruleForm.link" style="width: 570px; float: left;"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status" style="display: inline-block; ">
            <el-select v-model="ruleForm.status" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="爬取评论" prop="comment" style="display: inline-block; ">
            <el-switch v-model="ruleForm.comment"></el-switch>
        </el-form-item>
        <el-form-item style="display: inline-block; ">
            <el-button type="primary" @click="submitForm('ruleForm')">{{type}}</el-button>
            <el-button type="info" @click="resetForm('ruleForm')" style="margin-right: 35px;">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import Axios from '@/axios'
    export default {
        data() {
            return {
                type: "立即添加",
                options: [{
                        value: '正在热映',
                        label: '正在热映'
                    },
                    {
                        value: '即将上线',
                        label: '即将上线'
                    },
                    {
                        value: '已下线',
                        label: '已下线'
                    }
                ],
                ruleForm: {
                    url: '',
                    name: '',
                    type: '',
                    director: '',
                    length: '',
                    language: '',
                    country: '',
                    actor: '',
                    img: '',
                    link: '',
                    status: '',
                    comment: true
                },
                rules: {
                    url: [{
                        message: '请输入影片的豆瓣地址',
                        trigger: 'blur'
                    }],
                    name: [{
                            required: true,
                            message: '请输入影片名称',
                            trigger: 'blur'
                        },
                        {
                            min: 1,
                            max: 50,
                            message: '长度在 1 到 50 个字符',
                            trigger: 'blur'
                        }
                    ],
                    length: [{
                        required: true,
                        message: '请输入影片时长',
                        trigger: 'blur'
                    }],
                    img: [{
                        required: true,
                        message: '请输入海报 `地址',
                        trigger: 'blur'
                    }],
                    status: [{
                        required: true,
                        message: '请选择影片状态',
                        trigger: 'blur'
                    }]
                }
            }
        },
        props: ["id"],
        methods: {
            analysis() {
                Axios.send('/analysis', 'post', {
                    path: this.ruleForm.url
                }).then(res => {
                    console.log(res)
                    let msg = res.obj
                    this.ruleForm.name = msg.name
                    this.ruleForm.type = msg.type
                    this.ruleForm.director = msg.director.map((item) => {
                        return item.name
                    }).join(' / ')
                    this.ruleForm.length = msg.runtime
                    this.ruleForm.language = msg.language
                    this.ruleForm.country = msg.place
                    this.ruleForm.actor = msg.actors.map((
                        item) => {
                        return item.name
                    }).join(' / ')
                    this.ruleForm.img = msg.img
                }, error => {
                    alert('解析错误')
                    console.log('analysisAxiosError', error)
                }).catch(err => {
                    throw err
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.id) {
                            Axios.send('/updateplay', 'post', {
                                id: this.id,
                                path: this.ruleForm.url,
                                name: this.ruleForm.name,
                                type: this.ruleForm.type,
                                director: this.ruleForm.director,
                                performer: this.ruleForm.actor,
                                length: this.ruleForm.length,
                                country: this.ruleForm.country,
                                language: this.ruleForm.language,
                                status: this.ruleForm.status,
                                pic: this.ruleForm.img,
                                link: this.ruleForm.link,
                                comment: this.ruleForm.comment
                            }).then(res => {
                                console.log(res)
                                alert("更新成功")
                            }, error => {
                                console.log(
                                    'updateplayAxiosError',
                                    error)
                                     alert("更新失败")
                            }).catch(err => {
                                throw err
                            })
                        } else {
                            Axios.send('/addplay', 'post', {
                                path: this.ruleForm.url,
                                name: this.ruleForm.name,
                                type: this.ruleForm.type,
                                director: this.ruleForm.director,
                                performer: this.ruleForm.actor,
                                length: this.ruleForm.length,
                                country: this.ruleForm.country,
                                language: this.ruleForm.language,
                                status: this.ruleForm.status,
                                pic: this.ruleForm.img,
                                link: this.ruleForm.link,
                                comment: this.ruleForm.comment
                            }).then(res => {
                                console.log(res)
                                alert("添加成功")
                            }, error => {
                                console.log(
                                    'addplayAxiosError',
                                    error)
                                    alert("添加失败")
                            }).catch(err => {
                                throw err
                            })
                        }

                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        },
        watch: {
            id(newValue, oldValue) {
                this.ruleForm.comment = false
                Axios.send('/displayone', 'post', {
                    playid: newValue
                }).then(res => {
                    let msg = res.obj
                    this.ruleForm.url = msg.play_path
                    this.ruleForm.name = msg.play_name
                    this.ruleForm.type = msg.play_type
                    this.ruleForm.director = msg.play_director
                    this.ruleForm.length = msg.play_length
                    this.ruleForm.language = msg.play_language
                    this.ruleForm.country = msg.play_country
                    this.ruleForm.actor = msg.play_performer
                    this.ruleForm.img = msg.play_pic
                    this.ruleForm.link = msg.play_link
                    this.ruleForm.status = msg.play_status
                    this.type = "更新"
                    console.log(res)
                }, error => {
                    console.log('displayoneAxiosError', error)
                    this.ruleForm = {
                        url: '',
                        name: '',
                        type: '',
                        director: '',
                        length: '',
                        language: '',
                        country: '',
                        actor: '',
                        img: '',
                        link: '',
                        status: '',
                        comment: false
                    }
                }).catch(err => {
                    throw err
                })
            }
        }
    }
</script>

<style>
</style>
