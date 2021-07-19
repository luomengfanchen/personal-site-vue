import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
    // 访客可访问的页面
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: '悠闲小站の登录'
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
        meta: {
            title: '悠闲小站の注册'
        }
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import('../views/Program.vue')
    },
    {
        path: '/Anime',
        name: 'Anime',
        component: () => import('../views/Anime.vue')
    },
    {
        path: '/Game',
        name: 'Game',
        component: () => import('../views/Game.vue')
    },
    {
        path: '/friend',
        name: 'friend-link',
        component: () => import('../views/Friend.vue')
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: () => import('../views/Article.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },

    // 访客不可访问的页面
    {
        path: '/user/manager',
        name: 'Manager',
        component: () => import('../views/user/Manager.vue'),
    },
    {
        path: '/user/modify/:id',
        name: 'Modify',
        component: () => import('../views/user/Modify.vue')
    },
    
    {
        path: '/user/create',
        name: 'Create',
        component: () => import('../views/user/Create.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        //判断是否有标题
        document.title = to.meta.title
    } else {
        document.title = '落梦繁城の悠闲小站'
    }

    next()
})

export default router
