import { createRouter, createWebHistory } from 'vue-router';

import { Home, LoginUser, 
    CadUser, HomeUser,
    EditUser, EditPasswordUser,
    SearchEstablishment, CadEstablishment,
    HomeEstablishment, LoginEstablishment,
    DetailsEstablishment, DashboardEstablishment,
    EditEstablishment } from '../pages';

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
            next();
            return;
        }
    },
    {
        path: '/cadUser',
        name: 'cadUser',
        component: CadUser,
        beforeEnter: (_, __, next) => {
            next();
            return;
        }
    },
    {
        path: '/user',
        children: [
            { path: 'homeUser', component: HomeUser },
            { path: 'editUser', component: EditUser },
            { path: 'editPasswordUser', component: EditPasswordUser },
            { path: 'searchEstablishment', component: SearchEstablishment }
        ],
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
            next();
            return;
        }
    },
    {
        path: '/cadEstablishment',
        name: 'cadEstablishment',
        component: CadEstablishment,
        beforeEnter: (_, __, next) => {
            next();
            return;
        }
    },
    {
        path: '/establishment',
        children: [
            { path: 'homeEstablishment', component: HomeEstablishment },
            { path: 'dashboardEstablishment', component: DashboardEstablishment },
            { path: 'editEstablishment', component: EditEstablishment }
        ],
        beforeEnter: (_, __, next) => {
            next();
            return;

        }
    },
    {
        path: '/detailsEstablishment/:pk_public',
        name: 'detailsEstablishment',
        component: DetailsEstablishment,
        beforeEnter: (_, __, next) => {
            next();
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

export default router;