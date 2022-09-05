import { createRouter, createWebHistory } from 'vue-router'
import appSetting from '../config/appSetting';

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
          },{
            path: '/blog',
            name: 'Blog',
            component: () =>
                import ("../components/views/Blog.vue")
          },
      ]
    },


  ]
})
const DEFAULT_TITLE = appSetting.NAME_APP;
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE + ' - '+to.name;  
});
(function() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = appSetting.LOGO_APP;
  document.getElementsByTagName('head')[0].appendChild(link);
})();

export default router
