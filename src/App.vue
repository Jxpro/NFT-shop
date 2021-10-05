<template>
    <div id="app">
        <div id="reset-nav-bar">
            <van-nav-bar
                title="NFT Shop"
                @click-left="showPopup"
                left-arrow
                fixed
                style="z-index:999999;height:50px;"
            >
                <template #left>
                    <i
                        class="fas fa-list-ul"
                        style="font-size:1.6em;color:rgb(63, 62, 62)"
                    ></i>
                </template>
                <template #right>
                    <i
                        class="fas fa-user-circle"
                        style="font-size:1.8em;color:rgb(63, 62, 62)"
                    ></i>
                </template>
            </van-nav-bar>
        </div>
        <van-popup
            v-model="leftshow"
            position="left"
            style="width: 60%; height: 100%; margin-top: 50px"
        >
            <van-cell-group inset>
                <van-cell
                    title="首页"
                    is-link
                    center
                    title-class="side-bar-item"
                />
                <van-cell
                    title="新品"
                    is-link
                    center
                    title-class="side-bar-item"
                />
                <van-cell
                    title="市场"
                    is-link
                    center
                    title-class="side-bar-item"
                />
                <van-cell
                    title="关于"
                    is-link
                    center
                    title-class="side-bar-item"
                />
            </van-cell-group>
        </van-popup>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            leftshow: false,
        };
    },
    methods: {
        showPopup() {
            this.leftshow = !this.leftshow;
        },
    },
};
</script>

<style scoped>
.side-bar-item {
    text-align: center;
    font-weight: bolder;
    font-size: 16px;
    line-height: 30px;
}
#reset-nav-bar /deep/ .van-nav-bar__title {
    font-weight: bold;
    font-size: 17px;
}
</style>
