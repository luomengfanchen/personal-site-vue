import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
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
        path:'/search',
        name: 'Search',
        component: () => import('../views/Search.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
