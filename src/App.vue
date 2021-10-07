<template>
    <div id="app">
        <van-nav-bar
            title="NFT Shop"
            @click-left="showPopup"
            @click-right="goProflie"
            left-arrow
            fixed
            placeholder
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
        <van-popup
            v-model="leftshow"
            position="left"
            style="width: 60%; height: 100%; margin-top: 46px"
            :overlay-style="{ 'margin-top': '46px' }"
        >
            <van-cell-group inset>
                <van-cell
                    title="首页"
                    is-link
                    center
                    title-class="side-bar-item"
                    to="home"
                    @click="showPopup"
                />
                <van-cell
                    title="新品"
                    is-link
                    center
                    title-class="side-bar-item"
                    to="new_goods"
                    @click="showPopup"
                />
                <van-cell
                    title="市场"
                    is-link
                    center
                    title-class="side-bar-item"
                    to="market"
                    @click="showPopup"
                />
                <van-cell
                    title="我的"
                    is-link
                    center
                    title-class="side-bar-item"
                    to="profile"
                    v-if="$store.state.loging"
                    @click="showPopup"
                />
                <van-cell
                    title="关于"
                    is-link
                    center
                    title-class="side-bar-item"
                    to="about"
                    @click="showPopup"
                />
                <van-cell
                    title="退出"
                    is-link
                    center
                    title-class="side-bar-item"
                    to="home"
                    v-if="$store.state.loging"
                    @click="exituser"
                />
            </van-cell-group>
        </van-popup>
        <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios';
export default {
    name: 'App',
    data() {
        return {
            leftshow: false,
        };
    },
    created() {
        this.$store.state.loging = localStorage.getItem('user');
        axios.get('http://localhost:5000/students');
    },
    methods: {
        showPopup() {
            this.leftshow = !this.leftshow;
        },
        goProflie() {
            this.$router.push('/profile');
        },
        exituser() {
            localStorage.removeItem('user');
            this.leftshow = !this.leftshow;
            this.$store.state.loging = false;
            Toast('退出成功');
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
/* 要改 van-nav-bar__title 必须加scoped*/
#app /deep/ .van-nav-bar__title {
    font-weight: bold;
    font-size: 17px;
}
</style>
