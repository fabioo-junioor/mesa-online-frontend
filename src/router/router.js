import { createRouter, createWebHistory } from 'vue-router';
import { getDadosUsuario } from '../services/localStorage/settingSession.js';

import { Inicio, LoginUsuario, 
    CadastroUsuario, HomeUsuario,
    EditarUsuario, EditarSenhaUsuario,
    BuscarEstabelecimento, CadastroEstabelecimento,
    HomeEstabelecimento, LoginEstabelecimento,
    DetailsEstablishment } from '../pages';

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
                if(getDadosUsuario().tipoUsuario == '1'){
                    next('/homeUsuario');
                    return;

                }
                next('/homeEstabelecimento');
                return;

            }
            next();
            return;

        }
    },
    {
        path: '/cadastroUsuario',
        name: 'cadastroUsuario',
        component: CadastroUsuario,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    next('/homeUsuario');
                    return;

                }
                next('/homeEstabelecimento');
                return;

            }
            next();
            return;
            
        }
    },
    {
        path: '/homeUsuario',
        name: 'homeUsuario',
        component: HomeUsuario,
        beforeEnter: (_, __, next) => {
            /*if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    */next();
                    return;/*

                }
                next('/homeEstabelecimento');
                return;

            }
            next('/');
            return;*/

        }
    },
    {
        path: '/editarUsuario',
        name: 'editarUsuario',
        component: EditarUsuario,
        beforeEnter: (_, __, next) => {
            /*if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    */next();
                    return;/*
                    
                }
                next('/homeEstabelecimento');
                return;
                
            }
            next('/');
            return;*/

        }
    },
    {
        path: '/editarSenhaUsuario',
        name: 'editarSenhaUsuario',
        component: EditarSenhaUsuario,
        beforeEnter: (_, __, next) => {
            /*if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    */next();
                    return;/*
                    
                }
                next('/homeEstabelecimento');
                return;
                
            }
            next('/');
            return;*/

        }
    },
    {
        path: '/buscarEstabelecimento',
        name: 'buscarEstabelecimento',
        component: BuscarEstabelecimento,
        beforeEnter: (_, __, next) => {
            /*if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    */next();
                    return;/*

                }
                next('/homeEstabelecimento');
                return;

            }
            next('/');
            return;*/

        }
    },
    {
        path: '/detailsEstablishment/:id',
        name: 'detailsEstablishment',
        component: DetailsEstablishment,
        beforeEnter: (_, __, next) => {
            next();
            return;

        }
    },
    {
        path: '/loginEstabelecimento',
        name: 'loginEstabelecimento',
        component: LoginEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '2'){
                    next('/homeEstabelecimento');
                    return;

                }
                next('/homeUsuario');
                return;

            }
            next();
            return;

        }
    },
    {
        path: '/cadastroEstabelecimento',
        name: 'cadastroEstabelecimento',
        component: CadastroEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '2'){
                    next('/homeEstabelecimento');
                    return;

                }
                next('/homeUsuario');
                return;

            }
            next();
            return;

        }
    },
    {
        path: '/homeEstabelecimento',
        name: 'homeEstabelecimento',
        component: HomeEstabelecimento,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '2'){
                    next();
                    return;

                }
                next('/homeUsuario');
                return;

            }
            next('/');
            return;
            
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'inicio',
        component: Inicio,
        beforeEnter: (_, __, next) => {
            next();
            return;

        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router