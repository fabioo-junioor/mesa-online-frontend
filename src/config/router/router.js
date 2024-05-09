import { createRouter, createWebHistory } from 'vue-router'
import { getTokenUser } from '../utils/settingSession.js'

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
        component: LoginUsuario,
        beforeEnter: (_, __, next) => {
            if(getTokenUser()){
                next('/homeUsuario')
                return

            }
            next()
            return
        }
    },
    {
        path: '/cadastrarUsuario/:cadU',
        name: 'cadastrarUsuario',
        component: LoginUsuario,
        beforeEnter: (_, __, next) => {
            if(getTokenUser()){
                next('/homeUsuario')
                return

            }
            next()
            return
            
        }
    },
    {
        path: '/loginEstabelecimento',
        name: 'loginEstabelecimento',
        component: LoginEstabelecimento
    },
    {
        path: '/cadastrarEstabelecimento/:cadE',
        name: 'cadastrarEstabelecimento',
        component: LoginEstabelecimento
    },
    {
        path: '/homeUsuario',
        name: 'homeUsuario',
        component: HomeUsuario,
        beforeEnter: (_, __, next) => {
            if(getTokenUser()){
                next()
                return

            }
            next('/')
            return

        }
    },
    {
        path: '/editarUsuario',
        name: 'editarUsuario',
        component: EditarUsuario,
        beforeEnter: (_, __, next) => {
            if(getTokenUser()){
                next()
                return

            }
            next('/')
            return

        }
    },
    {
        path: '/buscarEstabelecimento',
        name: 'buscarEstabelecimento',
        component: BuscarEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getTokenUser()){
                next()
                return

            }
            next('/')
            return

        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'inicio',
        component: Inicio,
        beforeEnter: (_, __, next) => {
            if(getTokenUser() == null){
                next()
                return

            }
            next('/homeUsuario')
            return

        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router