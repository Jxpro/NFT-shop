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
            <van-field
                v-model="verify"
                type="password"
                label="确认密码"
                placeholder="请输入确认密码"
            />
            <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="primary"
                        >发送验证码</van-button
                    >
                </template>
            </van-field>
        </van-cell-group>
        <div class="my-part">
            <div style="margin-bottom: 0.5em; width:15em;">
                <van-button block round plain type="info" @click="Register"
                    >立即注册</van-button
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
            verify: '',
            tel: '',
            sms: '',
        };
    },
    methods: {
        Register() {
            if (this.username.trim() === '') {
                Toast('用户名不能为空');
                return false;
            }

            if (this.password.trim() === '') {
                Toast('密码不能为空');
                return false;
            }

            if (this.password !== this.verify) {
                Toast('两次密码输入不一致');
                return false;
            }

            Toast('注册成功');
            localStorage.setItem(
                'user',
                JSON.stringify({
                    username: this.username,
                    password: this.password,
                })
            );
            this.$router.push('/login');
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
