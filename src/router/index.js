import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


//注册路由
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})

export default router