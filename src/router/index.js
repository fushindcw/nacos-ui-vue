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
      },
      {
        path: '/404.html',
        component: ()=>import('@/views/404/404.vue')
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

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {  //如果未匹配到路由
    router.push('/404.html')
  } else {
    next();    //如果匹配到正确跳转
  }
});

export default router
