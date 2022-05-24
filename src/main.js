import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from "./plugins/emitter";

// import './assets/css/index.css'


createApp(App)
.use(store)
.use(router)
.use(emitter)
.mount('#root')
