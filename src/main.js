import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-plus"
import 'element-plus/dist/index.css'
import './index.css'
// import "./router/router-config"  // 路由守卫，做动态路由的地方

createApp(App)
.use(store)
.use(router)
.use(ElementUI)
.mount('#app')
