<template>
    <div class="">
        <div class="total-xy move-top">
            <span>正在热映</span>
            <div>
                <a>
                    <router-link to="/user/smovie">查看全部></router-link>
                </a>
            </div>
        </div>

        <div class="outbox">
            <div class="user_movie total-xy">
                <u-modl v-bind:ggh="formdata"></u-modl>
            </div>
        </div>


        <div class="imge total-xy">
            <img src="../assets/xiangmu.png" />
        </div>
    </div>
</template>

<script>
    import uModl from './UseruModl.vue'
    import Axios from '@/axios'
    export default {
        data() {
            return {
                formdata: [{pic:"https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c",id:null}
					,
                ]
            }
        },
        mounted() {
            Axios.send('/display', 'post', {}).then(res => {
                console.log(res)
                let list = []
                if (res.obj.length > 4) {
                    for (var i = 0; i < 4; i++) {
                        list.push({pic:res.obj[i].play_pic,id:res.obj[i].play_id})

                    }
                } else {
                    res.obj.forEach(function(item) {
                        list.push({pic:item.play_pic,id:item.play_id})
                    })
                }

                this.formdata = list
            }, error => {
                console.log('displayAxiosError', error)
            }).catch(err => {
                throw err
            })
        },
        components: {
            uModl,
        },
        props: {

        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .imge {
        height: 93.32px;
        margin: 0 auto;
    }

    .imge img {
        width: 1050px;
    }

    .user_movie {
        height: 357px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        margin-left: 11px;
    }


    .move-top {
        margin: 0 auto;
        height: 60px;
        display: flex;
        align-items: flex-end;
    }

    .move-top span {
        height: 20px;
        width: 70px;
        border-bottom: 2px solid red;
        padding: 20px;
    }

    .move-top div {
        height: 40px;
        width: 986px;
        border-bottom: 2px solid rgb(229, 229, 229);
    }

    .move-top a {
        float: right;
        font-size: 14px;
        color: rgb(235, 0, 42);
    }

    .total-xy {
        width: 1050px;
    }

    .outbox {
        height: 357px;
        width: 1060px;
        margin: 0 auto;
    }
</style>
