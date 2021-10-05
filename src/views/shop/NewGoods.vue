<template>
    <div style="margin-top:8px">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-card
                    :price="$store.state.images[item % 5].price"
                    :desc="`已售${$store.state.images[item % 5].sold}件`"
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
                        <van-button
                            round
                            size="small"
                            type="primary"
                            @click="visitAuthor"
                            >by {{ $store.state.images[item % 5].author }}
                        </van-button>
                        <van-button
                            round
                            size="small"
                            type="warning"
                            @click="goPurchase($store.state.images[item % 5])"
                            >立即购买
                        </van-button>
                    </template>
                </van-card>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    methods: {
        visitAuthor() {
            this.$router.push('/author');
        },
        goPurchase(img) {
            this.$router.push({
                name: 'Detail',
                query: img,
            });
        },
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
