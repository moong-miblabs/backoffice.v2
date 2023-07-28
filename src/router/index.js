import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/index'
import * as CONSTANT from '@/constant'
import HomeView from '../views/HomeView.vue'

import Header from '../views/template/HeaderView.vue'
import Sidebar from '../views/template/SidebarView.vue'
import Footer from '../views/template/FooterView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/',
            name: 'blank',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/BlankView.vue'),
                Footer
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        }
    ]
})

router.beforeEach(async (to,from,next)=>{
    const $store = useStore()
    const token = $store.getToken
    if(to.name === 'login'){
        next()
    } else {
        if(!token){
            next({name : 'login'})
        } else {
            var response = await axios.post(CONSTANT.serverURL+'/validate',{ token })
            if(response.data){
                next()
            } else {
                $store.$reset()
                next({name : 'login'})
            }
        }
    }
})

export default router
