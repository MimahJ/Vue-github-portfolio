import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ErrorView from '../views/ErrorView.vue'
import ReposView from '../views/ReposView.vue'
import Reposdetails from '../views/Reposdetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/repos',
      name: 'ReposView',
      component: ReposView,

      children: [
        {
          path: '/repos/:id',
          name: 'Reposdetails',
          component: Reposdetails
        },
      ],
},

    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: ErrorView

    },
    
    
  

  ]
})

export default router
