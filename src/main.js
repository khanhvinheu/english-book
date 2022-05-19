import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GAuth from './config/google_oAuth'

const app = createApp(App)
const gAuthOptions = { clientId: '734152041521-3da39udq2rrh2h52n0ga1j7d7rm1uhal.apps.googleusercontent.com',
                       scope: 'email',
                       prompt: 'consent',
                       fetch_basic_profile: true,
                       plugin_name:'chat' }
app.use(GAuth, gAuthOptions)
app.use(router)
app.mount('#app')
