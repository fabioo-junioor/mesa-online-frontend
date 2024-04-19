import { createApp } from 'vue'
import App from './App.vue'

// Vue router
import router from './config/router/router.js'

// Bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App)
    .use(BootstrapVue)
    .use(IconsPlugin)
    .use(router)
    .mount('#app')
