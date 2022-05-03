import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/user/User.vue'
import UserHome from '../views/user/UserHome.vue'
import UserProfile from '../views/user/UserProfile.vue'
import UserPosts from '../views/user/UserPosts.vue'


const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/users/:username',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /users/:username is matched
        { path: '', component: UserHome },

        // UserProfile will be rendered inside User's <router-view>
        // when /users/:username/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /users/:username/posts is matched
        { path: 'posts', component: UserPosts },
      ],
    },
  ]
})

export default router