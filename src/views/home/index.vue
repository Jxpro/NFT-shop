<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <van-image
                        width="100%"
                        height="270"
                        lazy-load
                        :src="image"
                    />
                </van-swipe-item>
            </van-swipe>
            <van-divider
                :style="{
                    color: '#333333',
                    borderColor: '#333333',
                    padding: '0 16px',
                    fontSize: '1.3em',
                }"
            >
                新品推荐
            </van-divider>
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-card
                    :price="$store.state.images[item % 5].price"
                    :desc="$store.state.images[item % 5].author"
                    :title="$store.state.images[item % 5].title"
                    :thumb="$store.state.images[item % 5].src"
                    v-for="item in list"
                    :key="item"
                >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-button round size="small" type="primary"
                            >NFT 艺术家
                        </van-button>
                        <van-button round size="small" type="warning"
                            >立即购买
                        </van-button>
                    </template>
                </van-card>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
const hs = require('@/assets/img/hs.jpg');
const lldq = require('@/assets/img/lldq.jpg');
const mhss = require('@/assets/img/mhss.jpg');
const mhxs = require('@/assets/img/mhxs.jpg');
const zsars = require('@/assets/img/zsars.jpg');
const swk = require('@/assets/img/swk.png');

export default {
    data() {
        return {
            images: [hs, lldq, mhss, mhxs, swk, zsars],
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
};
</script>

<style></style>
