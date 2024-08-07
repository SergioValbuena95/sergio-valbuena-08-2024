// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Layout from './layout/layout.vue'
import Home from './pages/home.vue'
import Team from './pages/team.vue'
import TeamDetails from './pages/teamDetails.vue'

const routes = [
    {
        path: '',
        name: 'main',
        component: Home,
        meta: { layout: 'base' },
        redirect: { name: 'home' },
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/team',
                name: 'team',
                component: Team,
            },
            {
                path: '/team/:id',
                name: 'team.details',
                component: TeamDetails,
             }
        ]

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
