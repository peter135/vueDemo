import { createRouter, createWebHistory } from 'vue-router'
import FilterSearch from '../views/FilterSearch.vue'
import Home from '../views/Home.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/filterSearch',
      component: FilterSearch
    },
    {
      path: '/home',
      component: Home
    }

  ]
})

export default router