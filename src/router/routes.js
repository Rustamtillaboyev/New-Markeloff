
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/AvvalIkki', component: () => import('pages/AvvalIkki.vue') },
      { path: '/Narxlar', component: () => import('components/Narxlar.vue') },
      { path: '/Blogclassic', component: () => import('components/Blogclassic.vue') },

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
