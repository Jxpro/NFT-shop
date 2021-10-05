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
                <van-cell is-link>
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

            <van-goods-action>
                <van-goods-action-icon text="分享" @click="showShare = true">
                    <template #icon>
                        <i class="fas fa-share-alt"></i>
                    </template>
                </van-goods-action-icon>
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="onClickButton"
                />
            </van-goods-action>

            <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
            />
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
        };
    },
    methods: {
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
        onClickButton() {},
    },
};
</script>

<style>
.wrapper {
    padding: 0 5%;
}
</style>
