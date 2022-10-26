import { RouteRecordRaw } from 'vue-router'
import { login, callback, logout, isAuthenticated } from './guards'
import AppRouterWrapper from '../components/AppRouterWrapper.vue'
import MainLayout from '../layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'index' }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('layouts/IndexLayout.vue')
  },
  {
    path: '/registre',
    name: 'registre',
    component: () => import('layouts/RegistreLayout.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: AppRouterWrapper,
    beforeEnter: login
  },
  {
    path: '/logout',
    name: 'logout',
    component: AppRouterWrapper,
    beforeEnter: logout
  },
  {
    path: '/callback',
    component: AppRouterWrapper,
    beforeEnter: callback
  },
  {
    path: '/',
    component: MainLayout,
    beforeEnter: isAuthenticated,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/MainPage.vue')
      }
    ]
  }
]

export default routes
