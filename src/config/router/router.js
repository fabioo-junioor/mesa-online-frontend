import { createRouter, createWebHistory } from 'vue-router'

import Inicio from '../../pages/Inicio.vue'
import LoginUsuario from '../../pages/usuario/LoginUsuario.vue'
import LoginEstabelecimento from '../../pages/estabelecimento/LoginEstabelecimento.vue'
import HomeUsuario from '../../pages/usuario/HomeUsuario.vue'
import EditarUsuario from '../../pages/usuario/EditarUsuario.vue'
import BuscarEstabelecimento from '../../pages/usuario/BuscarEstabelecimento.vue'

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
    },
    {
        path: '/editarUsuario',
        name: 'editarUsuario',
        component: EditarUsuario
    },
    {
        path: '/buscarEstabelecimento',
        name: 'buscarEstabelecimento',
        component: BuscarEstabelecimento
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router