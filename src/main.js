import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from "./plugins/emitter";
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './index.css'

const VueDynamicForms = createDynamicForms({
    // Global Options go here
});
  
export const app = createApp(App)
app.use(store)
app.use(Antd)
app.use(router)
app.use(emitter)
app.use(VueDynamicForms)
app.mount('#root')
