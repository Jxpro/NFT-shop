//该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
//应用Vuex插件
Vue.use(Vuex);

// 引入图片
const hs = require('@/assets/img/hs.jpg');
const lldq = require('@/assets/img/lldq.jpg');
const mhss = require('@/assets/img/mhss.jpg');
const mhxs = require('@/assets/img/mhxs.jpg');
const zsars = require('@/assets/img/zsars.jpg');
const swk = require('@/assets/img/swk.png');

//准备actions——用于响应组件中的动作
const actions = {

};
//准备mutations——用于操作数据（state）
const mutations = {

};
//准备state——用于存储数据
const state = {
    loging: '',
    images: [
        {
            id: '001',
            src: hs,
            title: '火山',
            price: 199,
            sold: 100,
            author: '薛之谦',
            address: 'xxx-xxx-xxxx'
        },
        {
            id: '002',
            src: lldq,
            title: '流浪地球',
            price: 299,
            sold: 150,
            author: '薛之谦',
            address: 'xxx-xxx-xxxx'
        },
        {
            id: '003',
            src: mhss,
            title: '猛虎上山',
            price: 189,
            sold: 299,
            author: '薛之谦',
            address: 'xxx-xxx-xxxx'
        },
        {
            id: '004',
            src: mhxs,
            title: '猛虎下山',
            price: 249,
            sold: 399,
            author: '薛之谦',
            address: 'xxx-xxx-xxxx'
        },
        {
            id: '005',
            src: zsars,
            title: '战神阿瑞斯',
            price: 29,
            sold: 699,
            author: '薛之谦',
            address: 'xxx-xxx-xxxx'
        },
        {
            id: '006',
            src: swk,
            title: '孙悟空',
            price: 749,
            sold: 79,
            author: '薛之谦',
            address: 'xxx-xxx-xxxx'
        }
    ],
    boughtlist: [],
    selllist: [],
    balance: 1000
};

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
});
