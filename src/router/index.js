import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPageView from '../views/LandingPageview.vue'
import ErrorView from '../views/ErrorView.vue'
import ReposView from '../views/ReposView.vue'
import Reposdetails from '../views/Reposdetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/repos",
      name: "repos",
      component: ReposView,

      children: [
        {
          path: "/repos/repo.name",
          name: "repo-details",
          component: () => import("../views/Reposdetails.vue"),
        },
      ],
},

    {
      path: "/:error*",
      name: "error",
      component: () => import("../views/ErrorView.vue"),

    },
    {
      path: "/:landing",
      name: "LandingPage",
      component: LandingPageView,
    }
  

  ]
})

export default router
