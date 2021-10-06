// 该文件专门用于创建整个应用的路由器
import Vue from 'vue';
import VueRouter from 'vue-router';
import { Toast } from 'vant';

Vue.use(VueRouter);

const Home = () => import('@/views/home');
const About = () => import('@/views/about');
const Profile = () => import('@/views/profile');
const Market = () => import('@/views/shop');

const Login = () => import('@/views/profile/Login');
const Register = () => import('@/views/profile/Register');

const Author = () => import('@/views/profile/author');
const Detail = () => import('@/views/shop/Detail');
const NewGoods = () => import('@/views/shop/NewGoods');


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
};

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        // 主页
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        // 关于
        {
            path: '/about',
            name: 'About',
            component: About
        },
        // 新品
        {
            path: '/new_goods',
            name: 'NewGoods',
            component: NewGoods
        },
        // 市场
        {
            path: '/market',
            name: 'Market',
            component: Market
        },
        // 详情
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        },
        // 作者
        {
            path: '/author',
            name: 'Author',
            component: Author
        },
        // 个人信息
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requireAuth: true
            }
        },
        // 登录
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        // 注册
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (!localStorage.getItem('user')) {
            next({ name: 'Login' });
        }
    }
    next();
});

export default router;
