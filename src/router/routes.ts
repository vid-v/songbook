import { RouteConfig } from 'vue-router'
import { MainLayout } from 'layouts/MainLayout'
import { Pdc } from 'pages/Pdc'
import { Ld } from 'pages/Ld'
import { Imnuri } from 'pages/Imnuri'
import { Tineri } from 'pages/Tineri'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pdc', component: () => import('pages/Pdc.vue') },
      { path: 'ld', component: () => import('pages/Ld.vue') },
      { path: 'imnuri', component: () => import('pages/Imnuri.vue') },
      { path: 'tineri', component: () => import('pages/Tineri.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
