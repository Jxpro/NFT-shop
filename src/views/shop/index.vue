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
    </div>
</template>

<script>
export default {
    data() {
        return {
            SearchValue: '',
            OptionValue1: 0,
            OptionValue2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
        };
    },
};
</script>

<style></style>
