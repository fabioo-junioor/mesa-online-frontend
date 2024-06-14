import { createRouter, createWebHistory } from 'vue-router'
import { getDadosUsuario } from '../utils/settingSession.js'

import Inicio from '../../pages/Inicio.vue'

// Components usuário
import LoginUsuario from '../../pages/usuario/LoginUsuario.vue'
import HomeUsuario from '../../pages/usuario/HomeUsuario.vue'
import EditarUsuario from '../../pages/usuario/EditarUsuario.vue'
import BuscarEstabelecimento from '../../pages/usuario/BuscarEstabelecimento.vue'
import EditarSenhaUsuario from '../../pages/usuario/EditarSenhaUsuario.vue'

// Components estabelecimento
import LoginEstabelecimento from '../../pages/estabelecimento/LoginEstabelecimento.vue'
import HomeEstabelecimento from '../../pages/estabelecimento/HomeEstabelecimento.vue'

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
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '1'){
                    next('/homeUsuario')
                    return

                }
                next('/homeEstabelecimento')
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
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '1'){
                    next('/homeUsuario')
                    return

                }
                next('/homeEstabelecimento')
                return

            }
            next()
            return
            
        }
    },
    {
        path: '/homeUsuario',
        name: 'homeUsuario',
        component: HomeUsuario,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '1'){
                    next()
                    return

                }
                next('/homeEstabelecimento')
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
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '1'){
                    next()
                    return
                    
                }
                next('/homeEstabelecimento')
                return
                
            }
            next('/')
            return

        }
    },
    {
        path: '/editarSenhaUsuario',
        name: 'editarSenhaUsuario',
        component: EditarSenhaUsuario,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '1'){
                    next()
                    return
                    
                }
                next('/homeEstabelecimento')
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
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '1'){
                    next()
                    return

                }
                next('/homeEstabelecimento')
                return

            }
            next('/')
            return

        }
    },
    {
        path: '/loginEstabelecimento',
        name: 'loginEstabelecimento',
        component: LoginEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '2'){
                    next('/homeEstabelecimento')
                    return

                }
                next('/homeUsuario')
                return

            }
            next()
            return

        }
    },
    {
        path: '/cadastrarEstabelecimento/:cadE',
        name: 'cadastrarEstabelecimento',
        component: LoginEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '2'){
                    next('/homeEstabelecimento')
                    return

                }
                next('/homeUsuario')
                return

            }
            next()
            return

        }
    },
    {
        path: '/homeEstabelecimento',
        name: 'homeEstabelecimento',
        component: HomeEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario === '2'){
                    next()
                    return

                }
                next('/homeUsuario')
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
            next()
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