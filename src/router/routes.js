
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', name: 'Home', component: () => import('pages/IndexPage.vue')},
      {path: 'publications', name: 'Publications', component: () => import('pages/Publications.vue')},
      {path: 'people', name: 'People', component: () => import('pages/People.vue')},
      {path: 'vpatch', name: 'Virtual Patch Clamp', component: () => import('pages/IndexPage.vue'),
        beforeEnter() {
          window.location.href = "https://compbio.fhs.um.edu.mo/virtualpatch/#/";
        }
      },
      {path: 'chonloklei', name: 'Contact', component: () => import('pages/IndexPage.vue'),
        beforeEnter() {
          window.location.href = "https://chonlei.github.io/";
        }
      },
      {path: 'github', name: 'GitHub', component: () => import('pages/IndexPage.vue'),
        beforeEnter() {
          window.location.href = "https://github.com/compbio-fhs";
        }
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
