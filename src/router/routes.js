const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/sobre',
    component: () => import('layouts/SobreLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Sobre.vue') }
    ]
  },

  {
    path: '/produtos',
    component: () => import('layouts/ProdutosLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Produtos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
