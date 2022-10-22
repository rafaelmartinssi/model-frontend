import { RouteRecordRaw } from 'vue-router'
import { login, callback } from './guards'
import AppRouterWrapper from '../components/AppRouterWrapper.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/index',
    name: 'index',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: AppRouterWrapper,
    beforeEnter: login
  },
  {
    path: '/callback',
    component: AppRouterWrapper,
    beforeEnter: callback
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/MainPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
