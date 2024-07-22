import { createRouter, createWebHistory } from 'vue-router';
import { getDadosUsuario } from '../services/localStorage/settingSession.js';

import { Home, LoginUser, 
    CadUser, HomeUser,
    EditUser, EditPasswordUser,
    SearchEstablishment, CadEstablishment,
    HomeEstablishment, LoginEstablishment,
    DetailsEstablishment } from '../pages';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/loginUser',
        name: 'loginUser',
        component: LoginUser,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    next('/homeUsuario');
                    return;

                }
                next('/homeEstablishment');
                return;

            }
            next();
            return;

        }
    },
    {
        path: '/cadUser',
        name: 'cadUser',
        component: CadUser,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '1'){
                    next('/homeUser');
                    return;

                }
                next('/homeEstablishment');
                return;

            }
            next();
            return;
            
        }
    },
    {
        path: '/homeUser',
        name: 'homeUser',
        component: HomeUser,
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
        path: '/editUser',
        name: 'editUser',
        component: EditUser,
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
        path: '/editPasswordUser',
        name: 'editPasswordUser',
        component: EditPasswordUser,
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
        path: '/searchEstablishment',
        name: 'searchEstablishment',
        component: SearchEstablishment,
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
        path: '/loginEstablishment',
        name: 'loginEstablishment',
        component: LoginEstablishment,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '2'){
                    next('/homeEstablishment');
                    return;

                }
                next('/homeUser');
                return;

            }
            next();
            return;

        }
    },
    {
        path: '/cadEstablishment',
        name: 'cadEstablishment',
        component: CadEstablishment,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '2'){
                    next('/homeEstablishment');
                    return;

                }
                next('/homeUser');
                return;

            }
            next();
            return;

        }
    },
    {
        path: '/homeEstablishment',
        name: 'homeEstablishment',
        component: HomeEstablishment,
        beforeEnter: (_, __, next) => {
            if(getDadosUsuario()){
                if(getDadosUsuario().tipoUsuario == '2'){
                    next();
                    return;

                }
                next('/homeUser');
                return;

            }
            next('/');
            return;
            
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'home',
        component: Home,
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