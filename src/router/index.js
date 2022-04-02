import { createRouter, createWebHistory } from 'vue-router'
import FilterSearch from '../components/FilterSearch.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/FilterSearch',
      component: FilterSearch
    }
  ]
})

export default router