import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import PageNotFound from '../views/notFound/PageNotFound.vue'
import About from '../views/about/about.vue'
import AirportDetail from '../views/airportDetail/airportDetail.vue'
import AirportDestinations from '../views/airportDestinations/airportDestinations.vue'
import Login from '../views/login/index.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { name: "login", 
      path: "/login", 
      meta: { title: "login" }, 
      component: Login, 
    },
    {
      path: '/',
      name:'Home',
      component: Home
    },
    {
      path: '/:catchAll(.*)*',
      name:'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/airport/:code',
      name: "AirportDetail",
      component: AirportDetail,
      children: [
        {
          path: 'destinations',
          name: 'AirportDestinations',
          component: AirportDestinations
        }
      ]
    },
    {
      path: '/about',
      name:'About',
      component: About
    },

  ]
})

export default router