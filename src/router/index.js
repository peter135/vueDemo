import { createRouter, createWebHashHistory} from 'vue-router'
import store from "../store/index";
// pages
import Entry from '../Entry.vue'
import Home from '../views/home/home.vue'
import About from '../views/about/about.vue'
import Team from '../views/team/team.vue'
import Contact from '../views/contact/contact.vue'
import Settings from '../views/settings/settings.vue'
import Shopping from '../views/shopping/ShoppingHome.vue'
import Login from '../views/login/index.vue'
import PageNotFound from '../views/notFound/PageNotFound.vue'
import HomeIndex from '../views/home/homeIndex.vue'

const routerHistory = createWebHashHistory()

//静态路由
export const routes = [
    {
      path: '/',
      name:'Entry',
      component: Entry,
      children: [
        {
          path: '/about',
          name:'About',
          component: About
        },
        {
          path: '/home',
          name:'Home',
          component: Home,
          children: [
            {
              path: 'shopping',
              name:'Shopping',
              component: Shopping
            },
            {
              path: 'index',
              name:'HomeIndex',
              component: HomeIndex
            },
          ]
        },
        {
          path: '/team',
          name:'Team',
          component: Team
        },
        {
          path: '/contact',
          name:'Contact',
          component: Contact
        },
        {
          path: '/settings',
          name:'Settings',
          meta: {
            requiresAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: Settings
        },
     ]
    },
    {
      path: '/login',
      name:'Login',
      component: Login,
    },
    {
      path: '/pageNotFound',
      name:'PageNotFound',
      component: PageNotFound,
      children: [
         {
           path: '/:pathMatch(.*)*',    // 捕获所有路由或 404 Not found 路由
           component: PageNotFound
         }
      ]
    },

]
    
//动态路由
export const dynamic_routes = [
   {
       path:"/detail", // 详情页
       name:"Detail",
       component: About
   },
   {
       path:"/manage", // 内容管理页
       name:"Manage",
       component: About
   },
   {
       path:"/admin", // 人员管理页
       name:"Admin",
       component: About
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

  // console.log('flag',store.state.userinfo.addedRoutes)
  // console.log('route to ',to)
  // console.log('route from ',from)
  // console.log('routes',router.getRoutes())

  // 【用户角色权限控制 | 动态添加路由】
  if(store.state.userinfo.user && !store.state.userinfo.addedRoutes){ //从vuex中拿到用户信息
    //用户已经登录
    const { permission_list } = store.state.userinfo.user; // 从用户信息中获取权限列表
    const allow_routes = dynamic_routes.filter((route)=>{ //过滤允许访问的路由
      return permission_list.includes(route.name); 
    })

    allow_routes.forEach((route)=>{ // 将允许访问的路由动态添加到路由栈中
      router.addRoute(route);
    })
    // store.commit('setAddedRoutesFlag',true) mutation同步操作
    store.dispatch('userinfo/addedRoutesFlagAction', true) // action异步操作
    // next()

  }
  
  // 登录拦截
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('token')
    // console.log("token",token)
    // 若需要登录访问，检查是否为登录状态
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }

  // 【登录 | 非登录判断】
  // const {need_login = false} = to.meta
  // if(need_login) {
  //     // 如果页面需要登录但用户没有登录跳到登录页面
  //   const next_page = to.name; // 配置路由时,每一条路由都要给name赋值
  //   next({
  //     name: 'login',
  //     params: {
  //       redirect_page: next_page,
  //       ...from.params, //如果跳转需要携带参数就把参数也传递过去
  //     },
  //   });

  // }else{
  //   next()
  // }

})



export default router