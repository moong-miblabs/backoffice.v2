import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores/index'
import * as CONSTANT from '@/constant'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'

import Header from '../views/template/HeaderView.vue'
import Sidebar from '../views/template/SidebarView.vue'
import Footer from '../views/template/FooterView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/default',
            name: 'default',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/',
            name: 'home',
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
            beforeEnter : async (to,from,next) => {
                const $store = useStore()
                const token = $store.getToken
                if(!token){
                    next()
                } else {
                    var response = await axios.post(CONSTANT.serverURL+'verify',{ token })
                    if(response.data){
                        next({ name : 'home' })
                    } else {
                        $store.$reset()
                        next()
                    }
                }
            },
            component: () => import('../views/LoginView.vue')
        },
        // Responden
        {
            path: '/responden',
            name: 'responden',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/ListRespondenView.vue'),
                Footer
            }
        },
        {
            path: '/create-responden',
            name: 'create-responden',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/CreateRespondenView.vue'),
                Footer
            }
        },
        {
            path: '/update-responden/:id',
            name: 'update-responden',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/UpdateRespondenView.vue'),
                Footer
            }
        },
        {
            path: '/delete-responden/:id',
            name: 'delete-responden',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/DeleteRespondenView.vue'),
                Footer
            }
        },
        // END Responden
        // Chart
        {
            path : '/chartjs',
            name : 'chartjs',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/ChartjsView.vue'),
                Footer
            }
        },
        {
            path : '/apex',
            name : 'apex',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/ApexView.vue'),
                Footer
            }
        },
        {
            path : '/echart',
            name : 'echart',
            components : {
                Header,
                Sidebar,
                default : () => import('../views/EchartView.vue'),
                Footer
            }
        },
        // END Chart
        // 404 Not Found
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
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
            var response = await axios.post(CONSTANT.serverURL+'verify',{ token })
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
