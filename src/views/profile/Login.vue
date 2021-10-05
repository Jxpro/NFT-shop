<template>
    <div>
        <div class="logo">
            <img src="../../assets/img/lldq.jpg" width="50%" />
        </div>
        <van-cell-group>
            <van-field
                v-model="username"
                type="text"
                label="用户名"
                placeholder="请输入用户名"
            />
            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
            />
        </van-cell-group>
        <div class="my-part">
            <div style="margin-bottom: 0.5em; width:15em;">
                <van-button block round plain type="info" @click="login"
                    >马上登录</van-button
                >
            </div>
            <div style="margin-bottom: 0.5em; width:15em;">
                <van-button block round plain type="info" @click="jumpRegister"
                    >没有账号？立即注册</van-button
                >
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            username: '',
            password: '',
            tel: '',
            sms: '',
        };
    },
    methods: {
        login() {
            if (this.username.trim() === '') {
                Toast('请输入用户名');
                return false;
            }

            if (this.password.trim() === '') {
                Toast('请输入密码');
                return false;
            }

            if (
                !localStorage.getItem('user') ||
                JSON.parse(localStorage.getItem('user')).username !==
                    this.username ||
                JSON.parse(localStorage.getItem('user')).password !==
                    this.password
            ) {
                Toast('用户名或密码不正确');
                return false;
            }
            Toast('登陆成功');
            this.$router.push('/profile');
            this.$store.state.loging = true;
        },
        jumpRegister() {
            this.$router.push('/register');
        },
    },
};
</script>

<style scoped>
.logo {
    margin-top: 1.2em;
    text-align: center;
    margin-bottom: 1em;
}
div /deep/ .van-field__label {
    text-align: center;
}
.my-part {
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
