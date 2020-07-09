import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/login'
import Home from '../views/home'
import Home2 from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home' // 强制跳转
    },
    {
        path: '*',
        component: () => import('@/views/404')
    },
    {
        path: '/login',
        name: 'login',
        component: (resolve) => require(['@/views/login'], resolve)
    },
    {
        path: '/home',
        component: Home,
        children: [{
            path: '', // 二级路由地址什么都不写  代表二级路由默认的组件
            component: Home2
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router
