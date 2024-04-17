import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../../pages/Inicio.vue'
import Login from '../../pages/Login.vue'

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router