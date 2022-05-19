import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: "/:pathMatch(.*)*", redirect:'/home' },
    {
      path: '/login',
      name: 'Login',
      component: () =>
          import ("../components/views/LoginComponent.vue")
    },
    {
      path: '/app',
      name: 'App',
      component: () =>
          import ("../components/HomeApp.vue"),
      children:[
          {
            path: '/home',
            name: 'Home',
            component: () =>
                import ("../components/views/Home.vue"),
          },
          {
            path: '/create-blog',
            name: 'CreateBlog',
            component: () =>
                import ("../components/views/CreateBlog.vue"),
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
    },


  ]
})

export default router
