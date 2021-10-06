<template>
    <div>
        <div class="wrapper">
            <van-image width="100%" height="300" :src="$route.query.src" />
            <van-cell-group>
                <van-cell is-link>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title"
                            >作 品 名 称：&nbsp;{{ $route.query.title }}
                        </span>
                    </template>
                </van-cell>
                <van-cell is-link to="author">
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title"
                            >创&nbsp;&nbsp;&nbsp;作&nbsp;&nbsp;&nbsp;者
                            ：&nbsp;{{ $route.query.author }}
                        </span>
                    </template>
                </van-cell>
                <van-cell is-link>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title"
                            >编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：&nbsp;{{
                                $route.query.id
                            }}
                        </span>
                    </template>
                </van-cell>
                <van-cell is-link>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title"
                            >合 约 地 址：&nbsp;{{ $route.query.address }}
                        </span>
                    </template>
                </van-cell>
                <van-cell is-link>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title"
                            >艺术品地址：&nbsp;{{ $route.query.address }}
                        </span>
                    </template>
                </van-cell>
                <van-cell is-link>
                    <!-- 使用 title 插槽来自定义标题 -->
                    <template #title>
                        <span class="custom-title"
                            >拥&nbsp;&nbsp;&nbsp;有&nbsp;&nbsp;&nbsp;者：&nbsp;{{
                                $route.query.author
                            }}
                        </span>
                    </template>
                </van-cell>
            </van-cell-group>

            <van-divider
                :style="{
                    color: '#333333',
                    borderColor: '#333333',
                    padding: '0 16px',
                    fontSize: '1.3em',
                }"
            >
                作品简介
            </van-divider>
            <van-divider
                :style="{
                    color: '#333333',
                    borderColor: '#333333',
                    padding: '0 16px',
                    fontSize: '1.3em',
                }"
            >
                购买说明
            </van-divider>
            <van-divider
                :style="{
                    color: '#333333',
                    borderColor: '#333333',
                    padding: '0 16px',
                    fontSize: '1.3em',
                }"
            >
                成交记录
            </van-divider>

            <div class="placeholder"></div>

            <van-goods-action>
                <van-goods-action-icon text="分享" @click="showShare = true">
                    <template #icon>
                        <i class="fas fa-share-alt"></i>
                    </template>
                </van-goods-action-icon>
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="onClickBuyButton"
                />
            </van-goods-action>

            <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
            />

            <van-popup
                v-model="show"
                position="bottom"
                closeable
                style="height: 60%; margin-top: 46px"
                :overlay-style="{ 'margin-top': '46px' }"
            >
                <h3 style="text-align: center;">订单信息</h3>
                <van-cell-group>
                    <div class="cell-wrapper">
                        <van-cell
                            title="存储账户"
                            label="0xc1b******e33"
                            style="background-color: #F0F0F0;"
                        />
                    </div>
                    <van-cell title="存储账户" label="0xc1b******e33">
                        <template #icon>
                            <van-image
                                width="80"
                                height="80"
                                :src="$route.query.src"
                            />
                        </template>
                        <template #title>
                            <h2 class="title">{{ $route.query.title }}</h2>
                        </template>
                        <template #label>
                            <div class="label-wrapper">
                                <div>ID: {{ $route.query.id }}</div>
                                <div>￥ {{ $route.query.price }}</div>
                            </div>
                        </template>
                    </van-cell>
                    <van-cell
                        :title="`余额支付：￥ ${$route.query.price}`"
                        :value="`余额:￥ ${this.$store.state.balance}`"
                        title-class="title-class-extra"
                        value-class="value-class-extra"
                    />
                </van-cell-group>
                <div class="warn">注意:请注意核实付款价格,谨慎付款。</div>
                <div style="display: flex;justify-content: center;">
                    <div style="width:90%">
                        <van-button
                            type="danger"
                            block
                            round
                            @click="onClickVertifyButton($route.query)"
                            >确认购买</van-button
                        >
                    </div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            showShare: false,
            options: [
                { name: '微信', icon: 'wechat' },
                { name: '微博', icon: 'weibo' },
                { name: '复制链接', icon: 'link' },
                { name: '分享海报', icon: 'poster' },
                { name: '二维码', icon: 'qrcode' },
            ],
            show: false,
        };
    },
    methods: {
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
        onClickBuyButton() {
            if (!localStorage.getItem('user')) {
                Toast('请先登录');
                this.$router.push('/Login');
            } else {
                this.show = true;
            }
        },
        onClickVertifyButton(item) {
            if (item.price <= this.$store.state.balance) {
                this.$store.state.boughtlist.push(item);
                this.$store.state.balance -= item.price;
                this.show = false;
                Toast('购买成功');
            } else {
                this.show = false;
                Toast('余额不足');
            }
        },
    },
};
</script>

<style>
.wrapper {
    padding: 0 5%;
}
.puchase-wrapper {
    text-align: center;
}
.cell-wrapper {
    margin: 0 0.5em;
    border-radius: 10px;
    overflow: hidden;
}
.warn {
    color: red;
    margin: 0.8em;
}
h2.title {
    margin-left: 1em;
    margin-top: 0;
    margin-bottom: 1.6em;
}
.label-wrapper {
    margin-left: 1em;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
}
.title-class-extra {
    margin: 0.5em 0;
    font-size: 16px;
}
.value-class-extra {
    margin: 0.5em 0;
    font-size: 16px;
}
.placeholder {
    height: 50px;
    background-color: transparent;
}
</style>
