import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import Login from '@/views/login/Login.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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
        path: '/createConfiguration',
        component: ()=> import('@/views/configurationManagement/createConfiguration/createConfiguration.vue')
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = store.getters.token
  if (to.matched.length === 0) {  //如果未匹配到路由
    router.push('/404.html')
  } else if(to.path === '/login'){
    if(token===undefined){
      next()
    }else{
      router.push('/')
    }
  }else{
    if(token === undefined){
      router.push('/login?redirect='+to.path)
    }
    next();   //如果匹配到正确跳转
  }
});
router.afterEach(()=>{
  NProgress.done()
})

export default router
