import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../../pages/Inicio.vue'
import LoginUsuario from '../../pages/LoginUsuario.vue'
import LoginEstabelecimento from '../../pages/LoginEstabelecimento.vue'
import HomeUsuario from '../../pages/HomeUsuario.vue'

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
    },
    {
        path: '/loginEstabelecimento',
        name: 'loginEstabelecimento',
        component: LoginEstabelecimento
    },
    {
        path: '/homeUsuario',
        name: 'homeUsuario',
        component: HomeUsuario
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router