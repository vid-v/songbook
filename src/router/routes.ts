import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pdc', component: () => import('components/Pdc.vue') },
      { path: 'ld', component: () => import('components/Ld.vue') },
      { path: 'imnuri', component: () => import('components/Imnuri.vue') },
      { path: 'tineri', component: () => import('components/Tineri.vue') }
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
