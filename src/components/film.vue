<template>
    <div>
        <div style="width: 100%; height: 81px; position: fixed; top: 0; background: rgb(255,255,255); z-index: 20;"></div>
        <top></top>
        <div class="banner">
            <div class="faimg">
                <div class="timg">
                    <el-image :src="src"></el-image>
                </div>
                <div class="nei">
                    <h3 class="name">{{name}}</h3>
                    <div style="margin-bottom: 14px; height: 23.2px; font-size: 18px;">{{ename}}</div>
                    <div style="margin-bottom: 20px; font-size: 14px; height: 64.8px;">
                        <div style="height: 13.6px;">{{type}}</div>
                        <div style="margin-top: 12px; margin-bottom: 12px; height: 13.6px;">{{local}}/{{length}}</div>
                        <div style="height: 13.6px;"> {{time}}</div>
                    </div>
                    <div class="action">
                        <div class="wish" @click="love=!love">
                            <el-image :src="isrc[rate?1:love?1:0]" style="width: 16px;height: 16px; margin-right: 2px;"></el-image>{{rate?'已看':love?'已想看':'想看'}}
                        </div>
                        <div class="wish" @click="centerDialogVisible = true">
                            <el-image :src="isrc[rate?3:2]" style="width: 16px;height: 16px; margin-right: 2px;"></el-image>{{rate?'已评,'+mark2*2+'分':'评分'}}
                        </div>
                        <div class="buy"> 特惠购票</div>
                    </div>
                    <div class="ping">
                        <div style="height: 12px; font-size: 12px; margin-bottom: 8px;">用户评分</div>
                        <div style="height: 32px; margin-bottom: 16px;">
                            <span style="margin-top: 2px; float: left;">{{mark*2}}</span>
                            <el-rate id="star-show" v-model="mark" disabled text-color="#ff9900" style="float: left;margin-left: 10px; margin-top: 6px;">
                            </el-rate>
                        </div>
                        <div style="height: 12px; font-size: 12px; margin-bottom: 9px;">累积票房</div>
                        <div><span style="color: #FFFFFF;">{{money}}</span>
                            <div style="padding-left: 4px;display: inline;">万</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;display: flex; justify-content: center;">
            <div class="clear" style="min-width: 1200px;">
                <div class="tj">
                    <div class="mod-title">相关电影</div>
                    <div style="width: 100%; padding-top: 20px;">
                        <f-image v-for="item in 6"></f-image>
                    </div>
                </div>
                <div style="width: 730px; ">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" id="menu"
                        active-text-color="#EF4238" style="height: 49.6px;">
                        <el-menu-item index="1">介绍</el-menu-item>
                        <el-menu-item index="2" disabled>演职人员</el-menu-item>
                        <el-menu-item index="3" disabled>奖项</el-menu-item>
                        <el-menu-item index="4" disabled>图集</el-menu-item>
                    </el-menu>
                    <div style="margin-top: 40px;width: 100%;height: 20.6px;">
                        <div class="mod-title mod-title2">剧情介绍</div>
                    </div>
                    <div style="margin-top: 20px; display: block; font-size: 14px; text-align: left;line-height: 26px;margin-bottom: 60px;">{{text}}</div>
                    <div class="mod-title mod-title2" style="margin-bottom: 20px;">演职员表</div>
                    <div style="width: 100%; display: inline-block; margin-bottom: 60px;">
                        <p-image v-for="item in 5"></p-image>
                    </div>
                    <div class="mod-title mod-title2" style="margin-bottom: 20px;">图集</div>
                    <div style="width: 100%; height: 258px; display: inline-block; margin-bottom: 51px;">
                        <div style="float: right; width: 260px;">
                            <el-image :src="psrc2"></el-image>
                            <el-image :src="psrc3"></el-image>
                            <el-image :src="psrc4"></el-image>
                            <el-image :src="psrc5"></el-image>
                        </div>
                        <el-image :src="psrc1"></el-image>
                    </div>
                    <div class="mod-title mod-title2" style="margin-top: 9px; margin-bottom: 20px;">热门评论</div>
                    <button class="but" @click="centerDialogVisible = true">写短评</button>

                    <div style="width: 730px; display: inline-block;">
                        <f-comment v-for="item in 10"></f-comment>
                    </div>
                    <el-dialog :visible.sync="centerDialogVisible" width="550px" center>
                        <div style="padding-top: 30px;margin-bottom: 15px;color: #ffc600; text-align: center;">
                            <span v-show="mark2===0" style="font-size: 16px;">点击星星评分</span>
                            <span v-show="mark2!==0">{{mark2*2}} <span style="font-size: 16px;">分</span></span>
                        </div>
                        <div style="display: flex;justify-content: center; margin-bottom: 30px; ">
                            <el-rate id="lar-star" v-model="mark2" text-color="#ff9900"></el-rate>
                        </div>
                        <el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="textarea">
                        </el-input>
                        <el-button :disabled="textarea===''? true:mark2===0" type="danger" style="margin-top: 20px; margin-left: 430px;"
                            @click="open('评价成功','您评分'+mark2*2+'分:'+textarea),centerDialogVisible = false,rate = true">确
                            定</el-button>

                    </el-dialog>
                    <el-dialog :visible.sync="bjVisible" width="490px" center>
                        <div style="height: 27.4px; padding-bottom: 10px; margin-bottom: 20px; color: #222222; font-size: 18px; border-bottom: 1px solid #eee;text-align: center;">请选择举报理由</div>
                        <div v-for="item in reporttype">
                            <el-radio v-for="it in item" v-model="radio" :label="it">{{it}}</el-radio><br /><br /><br />
                        </div>
                        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea2">
                        </el-input>
                        <el-button :disabled="radio===''" type="danger" style="margin-top: 20px; margin-left: 370px;"
                            @click="open('举报成功','正在等待管理员审核') ,bjVisible = false">确定</el-button>
                    </el-dialog>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    import eventBus from '../eventBus.js'
    import fImage from './filmRecommend.vue'
    import pImage from './filmPerson.vue'
    import fComment from './filmComment.vue'
    import top from './UserTopTest'
    import Axios from '@/axios'
    export default {
        data() {
            return {
                radio: '',
                reporttype: [
                    ['违法违规', '色情', '低俗', '赌博诈骗'],
                    ['人身攻击', '侵犯隐私'],
                    ['垃圾广告', '引战', '剧透', '刷屏'],
                    ['抢楼', '视频不相关', '青少年不良信息']
                ],
                love: false,
                rate: false,
                isrc: [require('@/assets/x1.png'), require('@/assets/x2.png'), require('@/assets/x3.png'), require(
                    '@/assets/x4.png')],
                textarea: '',
                textarea2: '',
                mark2: 0,
                centerDialogVisible: false,
                bjVisible: false,
                activeIndex: '1',
                src: 'https://p0.meituan.net/movie/c5975d98fc484027ff55d813ab3b2daa427032.jpg@464w_644h_1e_1c',
                name: '小Q',
                ename: 'Little Q',
                type: '剧情',
                local: '中国大陆',
                length: '147分钟',
                time: '2019-09-20大陆上映',
                mark: 4.6,
                money: 9256,
                psrc1: 'https://p1.meituan.net/movie/e4806ecd8b0d5847e37600bf4dabd51b842595.jpg@465w_258h_1e_1c',
                psrc2: 'https://p0.meituan.net/movie/b675273b881fd51011f50b9a20efeadf1225608.jpg@126w_126h_1e_1c',
                psrc3: 'https://p0.meituan.net/movie/03a0fa1a2da20e950f5587d88dc1a7eb1359343.jpg@126w_126h_1e_1c',
                psrc4: 'https://p0.meituan.net/movie/db977983f55ca4eb9af6e383e1f7c8071223335.jpg@126w_126h_1e_1c',
                psrc5: 'https://p0.meituan.net/movie/39e304e30fe560ec867a2ae8feed8ab6925188.jpg@126w_126h_1e_1c',
                text: '聪明可爱的小Q在训练师悉心照料和训练过程中成长为一只合格的导盲犬，并遇到了主人李宝庭（任达华 饰）——中年失明、孤僻又坏脾气的天才糕点师。他们共同生活的日子里，小Q逐渐融化并走入了宝庭的心里，温情的陪伴令处于低谷期的宝庭有了新生活，一人一犬，深深的羁绊，他们谁也无法再失去彼此'
            }
        },
        components: {
            fImage,
            pImage,
            fComment,
            top
        },
        mounted() {
            console.log(this.$router)
            Axios.send('/displayone', 'post', {
                playid: this.$router.history.current.query.id,
            }).then(res => {
                this.src=res.obj.play_pic;
                this.text=res.obj.play_message;
                this.name=res.obj.play_name;
                this.type=res.obj.play_type;
                this.length=res.obj.play_length;
                this.local=res.obj.play_country;
                console.log(res)
            }, error => {
                console.log('displayoneAxiosError', error)
            }).catch(err => {
                throw err
            })


        eventBus.$on('bjevent', () => {
            this.bjVisible = !this.bjVisible;
        })
    },
    methods: {
        open(title, msg) {
            const h = this.$createElement;

            this.$notify({
                title: title,
                message: h('i', {
                    style: 'color: teal'
                }, msg),
                duration: 1500
            });
        }
    }
    }
</script>

<style scoped>
    .but {
        outline: none;
        float: right;
        cursor: pointer;
        background: #FFFFFF;
        display: block;
        height: 30px;
        padding: 0 10px;
        border-radius: 15px;
        border: 1px solid #ef4238;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        color: #ef4238;
    }

    .banner {
        width: 100%;
        height: 376px;
        margin-top: 80px;
        min-width: 1200px;
        background: #392f59 url(https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/banner_bg.f7fd103e3b8c16b6f449cce43fc57f45.png) no-repeat 50%;
    }

    .clear {
        margin-top: 80px;
        height: 2000px;
        width: 1200px;
    }

    .faimg {
        width: 1200px;
        margin: 0 auto;
        height: 376px;
        position: relative;
        color: #FFFFFF;
        text-align: left;
        font-family: "微软雅黑";
    }

    .timg {
        margin-left: 30px;
        margin-right: 30px;
        border: 4px solid #FDF5E6;
        height: 330px;
        width: 232px;
        float: left;
        position: relative;
        top: 70px;
        overflow: hidden;
        z-index: 7;
    }

    .nei {

        width: 870px;
        height: 300px;
        margin-top: 70px;
        float: right;
        margin-right: 30px;
        z-index: 10;

    }

    .name {
        height: 32px;
        font-size: 26px;
    }

    .action {
        position: absolute;
        bottom: 30px;
        width: 260px;
        height: 80px;
    }

    .wish {
        cursor: pointer;
        float: left;
        display: block;
        width: 120px;
        height: 36px;
        background-color: #756189;
        margin-right: 10px;
        text-align: center;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buy {
        display: inline-block;
        margin-top: 10px;
        width: 250px;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        border-radius: 2px;
        padding: 0;
        color: #fff;
        background-color: #df2d2d;
        cursor: pointer;
    }

    .ping {
        width: 223.35px;
        height: 136.8px;
        z-index: 10;
        margin-bottom: 10px;
        margin-left: 342px;
    }

    span {
        font-family: stonefont;
        font-size: 30px;
        color: #ffc600;
        height: 30px;
        line-height: 30px;
    }

    .tj {
        width: 380px;
        float: right;
    }

    .mod-title {
        display: inline-block;
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 18px;
        color: #333;
        line-height: 18px;
        float: left;
    }

    .mod-title::before {
        float: left;
        content: "";
        display: inline-block;
        width: 4px;
        height: 18px;
        margin-right: 6px;
        background-color: #ef4238;
        margin-left: 20px;
    }

    .mod-title2::before {
        margin-left: 0;
    }
</style>
