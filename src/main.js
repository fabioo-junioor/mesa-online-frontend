import { createApp } from 'vue'
import App from './App.vue'

// Vue router
import router from './config/router/router.js'

// Bootstrap-vue
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

// Quasar
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
    .use(Quasar, {
            plugins: {Notify}
        }
    )
    .use(router)
    .mount('#app')
