import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vantInstall from '@/vant'

createApp(App).use(vantInstall).use(store).use(router).mount('#app')
