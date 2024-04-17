import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
    .use(BootstrapVue)
    .use(IconsPlugin)
    .mount('#app')
