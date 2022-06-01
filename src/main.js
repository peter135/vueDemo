import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from "./plugins/emitter";
import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms({
    // Global Options go here
});
  
export const app = createApp(App)
app.use(store)
app.use(router)
app.use(emitter)
app.use(VueDynamicForms)
app.mount('#root')

