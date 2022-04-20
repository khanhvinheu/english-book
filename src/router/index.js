import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: "/:pathMatch(.*)*", redirect:'/home' },
    {
      path: '/home',
      name: 'Home',
      component: () =>
          import ("../components/Home.vue")
    },
    {
      path: '/book',
      name: 'Book',
      component: () =>
          import ("../components/views/About.vue")
    }, {
      path: '/video',
      name: 'Video',
      component: () =>
          import ("../components/views/About.vue")
    }, {
      path: '/course',
      name: 'Course',
      component: () =>
          import ("../components/views/About.vue")
    },

  ]
})

export default router
