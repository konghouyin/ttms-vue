<template>

    <div>
        <div v-for="item in formdata"  style="width: 730px; display: flex;align-items: flex-start;">
            <el-avatar size="large" :src="circleUrl" style="margin-right: 20px;"></el-avatar>
            <div style="width: 660px; float: right;">
                <div class="name">{{item.name}}
                    <el-image  :src="imgsrc" style="width: 20px; height: 20px;margin-left: 10px;" @click="bj(item.id)"></el-image>
                </div>
                <div style="display: flex; align-items: center;margin-top: 4px;margin-bottom: 20px;">
                    <div class="date">{{item.date}}</div>
                    <el-rate id="star-show1" :v-model="item.mark" disabled text-color="#ff9900"></el-rate>
                </div>
                <div class="text">{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from '../eventBus.js'
    import Axios from '@/axios'
    export default {
        data() {
            return {
                imgsrc: require('../assets/report.png'),
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                /* name: 'Leo',
                date: '9-20',
                mark: 4.4, */


                formdata: [{
                    id:0,
                    name: 'Leo',
                    date: '9-20',
                    mark: 4.4,
                    text: '从愤怒到温情，到泪洒影院，从导盲犬身上感受狗狗对人类的忠诚，狗狗真的可以改变人的一生，又有了强烈养狗的欲望！'
                }, ]
            }
        },
        mounted(){
            Axios.send('/getplaycomment', 'post', {
                playid: this.$router.history.current.query.id,
            }).then(res => {
                console.log(res)
                let list = []

                res.obj.forEach(function(item) {
                    list.push({
                        id: item.comment_id,
                        name: item.user_name,
                        text: item.comment_message,
                    })
                })
                this.formdata = list
            }, error => {
                console.log('displayAxiosError', error)
            }).catch(err => {
                throw err
            })
        },


        methods: {
            bj(id) {
                eventBus.$emit('bjevent',id)
            }
        }
    }
</script>

<style scoped>
    .name {
        text-align: left;
        color: #333333;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
    }

    .date {
        text-align: left;
        color: #999999;
        font-size: 16px;

    }

    .text {
        padding-bottom: 30px;
        border-bottom: 1px solid #e5e5e5;
        color: #666;
        line-height: 26px;
        font-size: 14px;
        text-align: left;
    }
</style>
