import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../../pages/Inicio.vue'
import LoginUsuario from '../../pages/LoginUsuario.vue'

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/loginUsuario',
        name: 'loginUsuario',
        component: LoginUsuario
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router