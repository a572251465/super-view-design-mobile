import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'

const NotFound = () => import('@/views/NotFound/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        components: {
          main: NotFound
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
