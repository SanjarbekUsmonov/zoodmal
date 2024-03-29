
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/ayollar', component: () => import('pages/Ayollar.vue') },
      { path: '/erkaklar', component: () => import('pages/Erkaklar.vue') },
      { path: '/telefonlar', component: () => import('pages/Telefonlar.vue') },
      { path: '/kompyuter', component: () => import('pages/Kompyuter.vue') },
      { path: '/maishiy', component: () => import('pages/Maishiy.vue') },
      { path: '/narxlar', component: () => import('pages/Narxlar.vue') },

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
