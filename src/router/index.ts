import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/index.vue'

const NotFound = () => import('@/views/NotFound/index.vue')
const CssWorld = () => import('@/views/CssWorld/index.vue')
const JavascriptWorld = () => import('@/views/JavascriptWorld/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/css-world',
        name: 'css-world',
        components: {
          main: CssWorld
        }
      },
      {
        path: '/javascript-world',
        name: 'javascript-world',
        components: {
          main: JavascriptWorld
        }
      },
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
  history: createWebHashHistory(),
  routes
})

export default router
