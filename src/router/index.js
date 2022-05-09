import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import PageNotFound from '../views/notFound/PageNotFound.vue'
import About from '../views/about/about.vue'
import AirportDetail from '../views/airportDetail/airportDetail.vue'
import AirportDestinations from '../views/airportDestinations/airportDestinations.vue'
import Login from '../views/login/index.vue'
import store from "../store/index";

const routerHistory = createWebHistory()

//静态路由
export const routes = [
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
      path: '/airport/:code',
      name: "AirportDetail",
      component: AirportDetail,
      meta:{
        need_login:true //需要登录
      },
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
    {
      path: '/:catchAll(.*)*',
      name:'PageNotFound',
      component: PageNotFound
    }
]
    
//动态路由
export const dynamic_routes = [
   {
       path:"/list", // 列表页
       name:"List",
       component: Home
   },
   {
       path:"/detail", // 详情页
       name:"Detail",
       component: Home
   },
   {
       path:"/manage", // 内容管理页
       name:"Manage",
       component: Home
   },
   {
       path:"/admin", // 人员管理页
       name:"Admin",
       component: Home
   }
]  

//用户角色权限
export const permission_list = {
  member:["List","Detail"], //普通会员
  admin:["List","Detail","Manage"],  // 管理员
  super_admin:["List","Detail","Manage","Admin"]  // 超级管理员
}


const router = createRouter({
  history: routerHistory,
  routes: routes
})

router.beforeEach((to,from,next) => {

  // 【用户角色权限控制 | 动态添加路由】
  // const store = useStore();
  if(store.state.userinfo.user != null){ //从vuex中拿到用户信息
    //用户已经登录
    const { permission_list } = store.state.userinfo.user; // 从用户信息中获取权限列表
    const allow_routes = dynamic_routes.filter((route)=>{ //过滤允许访问的路由
      return permission_list.includes(route.name); 
    })
    console.log('store',allow_routes)

    allow_routes.forEach((route)=>{ // 将允许访问的路由动态添加到路由栈中
      router.addRoute(route);
    })
  }

  // 【登录 | 非登录判断】
  const {need_login = false} = to.meta
  if(need_login) {
      // 如果页面需要登录但用户没有登录跳到登录页面
    const next_page = to.name; // 配置路由时,每一条路由都要给name赋值
    next({
      name: 'login',
      params: {
        redirect_page: next_page,
        ...from.params, //如果跳转需要携带参数就把参数也传递过去
      },
    });

  }else{
    next()
  }

})



export default router