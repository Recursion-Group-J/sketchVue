import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sketchpage from '../views/Sketchpage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/sketch',
    name: 'Sketchpage',
    component: Sketchpage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
