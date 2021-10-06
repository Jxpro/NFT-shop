<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <div class="author-wrapper">
                <van-image
                    width="150"
                    height="150"
                    round
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qq548.com%2Ftou2%2F2017%2F0605%2F4cdd581805860d17be379afa1d4087f9.jpg&refer=http%3A%2F%2Fwww.qq548.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636032266&t=3d7e3e98d5a3ce484b89ea08faf57c7a"
                />
                <div
                    style="display:flex;justify-content: center;align-items: center;"
                >
                    <p class="author-name">薛之谦&nbsp;&nbsp;</p>
                    <van-button type="primary" size="mini" round
                        >艺术家</van-button
                    >
                </div>
                <p>ID：Oxc1b***493ee</p>
                <p class="introduce">个人简介</p>
            </div>
            <article>
                薛之谦（JokerXue），1983年7月17日出生于上海市，中国内地流行乐男歌手、音乐制作人、影视演员，毕业于格里昂酒店管理学院
                2005年，参加选秀节目《我型我秀》正式出道。2006年，发行首张同名专辑《薛之谦》，2007年，凭借专辑《你过得好吗》获得MusicRadio中国TOP排行榜内地年度最受欢迎男歌手奖。
            </article>
            <van-divider
                :style="{
                    color: '#333333',
                    borderColor: '#333333',
                    padding: '0 16px',
                    fontSize: '1.3em',
                }"
            >
                他创作的
            </van-divider>
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
                        <van-button round size="small" type="primary"
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
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            goodslist: this.$store.state.images,
        };
    },
    methods: {
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
        goPurchase(img) {
            this.$router.push({
                name: 'Detail',
                query: img,
            });
        },
    },
};
</script>

<style scoped>
.author-wrapper {
    text-align: center;
    margin-top: 1em;
}
.author-name {
    font-size: 20px;
    font-weight: bold;
}
p {
    margin: 0.5em 0;
    color: #666666;
}

p.introduce {
    margin: 1.3em 0;
    color: #000;
}

article {
    padding: 0 1em;
    color: #aaaaaa;
}
</style>
