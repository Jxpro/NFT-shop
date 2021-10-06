<template>
    <div class="sub-components">
        <van-search
            v-model="SearchValue"
            placeholder="请输入搜索关键词"
            input-align="center"
            shape="round"
        />
        <van-dropdown-menu active-color="#1989fa">
            <van-dropdown-item v-model="OptionValue1" :options="option1" />
            <van-dropdown-item v-model="OptionValue2" :options="option2" />
        </van-dropdown-menu>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <van-card
                    :price="goods.price"
                    :desc="`已售${goods.sold}件`"
                    :title="goods.title"
                    :thumb="goods.src"
                    v-for="goods in goodslist"
                    :key="goods.id"
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
                            >by {{ goods.author }}
                        </van-button>
                        <van-button
                            round
                            size="small"
                            type="warning"
                            @click="goPurchase(goods)"
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
            SearchValue: '',
            OptionValue1: 0,
            OptionValue2: 0,
            option1: [
                { text: '全部商品', value: 0 },
                { text: '分类一', value: 1 },
                { text: '分类二', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 0 },
                { text: '价格由高到低', value: 1 },
                { text: '价格由高到低', value: 2 },
            ],
            rawgoodslist: this.$store.state.images,
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    computed: {
        goodslist() {
            let arr = this.rawgoodslist;
            switch (this.OptionValue1) {
                case 1:
                    arr = arr.filter(img => img.id < 4);
                    break;
                case 2:
                    arr = arr.filter(img => img.id > 3);
                    break;
                default:
                    break;
            }
            switch (this.OptionValue2) {
                case 1:
                    arr.sort((img1, img2) => img2.price - img1.price);
                    break;
                case 2:
                    arr.sort((img1, img2) => img1.price - img2.price);
                    break;
                default:
                    break;
            }
            return arr.filter(
                img => img.title.indexOf(this.SearchValue) !== -1
            );
        },
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
                    this.refreshing = false;
                }
                this.loading = false;
                this.finished = true;
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
