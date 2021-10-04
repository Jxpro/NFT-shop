<template>
    <div id="app">
        <GlobalHeader msg="Welcome to Your Vue.js App" />
        <router-view></router-view>
    </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue';

export default {
    name: 'App',
    components: {
        GlobalHeader,
    },
};
</script>

<style></style>
