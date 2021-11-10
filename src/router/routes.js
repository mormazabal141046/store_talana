
const routes = [
  {
    path: '/',
    redirect: '/category/1/products',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/category/:id/products', component: () => import('pages/Products.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
