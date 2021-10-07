<template>
    <div>
        <van-notice-bar
            left-icon="volume-o"
            text="薛之谦（Joker Xue），1983年7月17日出生于上海市，中国内地流行乐男歌手、音乐制作人、影视演员，毕业于格里昂酒店管理学院"
        />
        <div class="person-info">
            <van-row type="flex" justify="center" align="center">
                <van-col span="6">
                    <van-button round plain type="info" size="small">
                        认证&nbsp;&nbsp;<i class="fas fa-user-shield"></i
                    ></van-button>
                </van-col>
                <van-col span="10" style="  text-align: center;">
                    <van-image
                        width="120"
                        height="120"
                        round
                        src="https://img01.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>
                <van-col span="6">
                    <van-button round plain type="info" size="small"
                        ><i class="fas fa-file-signature"></i
                        >&nbsp;&nbsp;签到</van-button
                    >
                </van-col>
            </van-row>
            <p>
                {{ `用户名：${username} (213***364)` }}
                <i class="fas fa-user-edit"></i>
            </p>
            <p>
                {{ `ID：Oxc1b***493ee` }}
                <i class="fas fa-copy"></i>
            </p>
        </div>

        <div class="top-wapper">
            <div class="msg-wapper">
                <div class="msg-nums">0</div>
                <div class="msg-type">邀请好友</div>
            </div>
            <div class="line"></div>
            <div class="msg-wapper">
                <div class="msg-nums">99</div>
                <div class="msg-type">我的积分</div>
            </div>
            <div class="line"></div>
            <div class="msg-wapper">
                <div class="msg-nums">￥{{ $store.state.balance }}</div>
                <div class="msg-type">我的余额</div>
            </div>
        </div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <p
                    class="options"
                    :class="{ active: accessKey === 0 }"
                    @click="changeaccessKey(0)"
                >
                    已购买
                </p>
            </van-grid-item>
            <van-grid-item>
                <p
                    class="options"
                    :class="{ active: accessKey === 1 }"
                    @click="changeaccessKey(1)"
                >
                    已卖出
                </p>
            </van-grid-item>
            <van-grid-item>
                <p
                    class="options"
                    :class="{ active: accessKey === 2 }"
                    @click="changeaccessKey(2)"
                >
                    挂售中
                </p>
            </van-grid-item>
        </van-grid>

        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-card
                :price="goods.price"
                :thumb="goods.src"
                v-for="(goods, index) in list"
                :key="index"
            >
                <template #title>
                    <h2 style="margin-top:0">{{ goods.title }}</h2>
                </template>
                <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </template>
                <template #footer>
                    <van-button
                        size="small"
                        round
                        plain
                        hairline
                        type="danger"
                        @click.stop="sellItem(index)"
                        >{{ btntext }}
                    </van-button>
                </template>
            </van-card>
        </van-list>
        <van-popup
            v-model="show"
            position="bottom"
            closeable
            style="height: 33%; margin-top: 46px"
            :overlay-style="{ 'margin-top': '46px' }"
        >
            <h3 style="text-align: center;">挂售价格</h3>
            <div class="warn">&nbsp;注意: 请合理填写价格</div>
            <van-field
                v-model="price"
                label="挂售价格"
                placeholder="请输入价格"
                label-class="b-space"
            />
            <div style="display: flex;justify-content: center;">
                <div style="width:90%">
                    <van-button
                        type="danger"
                        block
                        round
                        @click="onClickVertifyButton"
                        >立即出售</van-button
                    >
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            accessKey: 0,
            loading: false,
            finished: false,
            refreshing: false,
            show: false,
            sellIndex: 0,
            price: 0,
        };
    },
    computed: {
        btntext() {
            let text = '按钮';
            switch (this.accessKey) {
                case 0:
                    text = '出售';
                    break;
                case 2:
                    text = '取消';
                    break;
                default:
                    break;
            }
            return text;
        },
        username() {
            return JSON.parse(localStorage.getItem('user')).username;
        },
        list() {
            let result = [];
            // return this.accessKey === 0 ? this.$store.state.boughtlist : [];
            switch (this.accessKey) {
                case 0:
                    result = this.$store.state.boughtlist;
                    break;
                case 2:
                    result = this.$store.state.selllist;
                    break;
                default:
                    break;
            }
            return result;
        },
    },
    methods: {
        changeaccessKey(k) {
            this.accessKey = k;
        },
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.loading = false;
                    this.finished = true;
                }
            }, 1000);
        },
        sellItem(i) {
            if (this.accessKey === 0) {
                this.show = true;
                this.sellIndex = i;
            } else {
                Toast('取消成功');
                this.$store.state.selllist.splice(i, 1);
            }
        },
        onClickVertifyButton() {
            if (this.price !== '0') {
                Toast('已添加至挂售中');
                this.show = false;
                this.$store.state.selllist.push({
                    ...this.$store.state.boughtlist[this.sellIndex],
                    price: this.price,
                });
            }
        },
    },
};
</script>

<style scoped>
.person-info {
    padding: 0.5em 0;
    background-color: white;
    text-align: center;
}
p {
    color: #666666;
}
.top-wapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #f0f0f0;
}

.msg-wapper {
    text-align: center;
    width: 30%;
    padding: 1em 0;
}

.msg-wapper .msg-nums {
    font-size: 20px;
    margin-bottom: 0.3em;
}
.msg-wapper .msg-type {
    color: #666;
}

.line {
    height: 50px;
    border-left: solid #dadada 1px;
}

p.options {
    margin-top: 0.3em;
    font-size: 20px;
}

p.active {
    font-weight: bolder;
}

div /deep/ .b-space {
    padding-bottom: 0.5em;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5em;
}
div /deep/ .van-field__control {
    padding-bottom: 0.5em;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5em;
}
div /deep/ .van-button.van-button--danger.van-button--small {
    width: 10em;
}
</style>
