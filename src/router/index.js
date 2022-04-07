import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/Login.vue'
const routes = [
  {
    path: '/',
    component: ()=> import('@/views/index/Index.vue'),
    children: [
      {
        path: '/configurationManagement',
        component: ()=> import('@/views/configurationManagement/configurationManagement.vue')
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
