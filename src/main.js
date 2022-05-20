import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GAuth from './config/google_oAuth'
import { ElCollapseTransition } from 'element-plus'
// import 'element-plus/lib/theme-chalk/base.css'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
const gAuthOptions = { clientId: '734152041521-3da39udq2rrh2h52n0ga1j7d7rm1uhal.apps.googleusercontent.com',
                       clientSecret:'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',
                       scope: 'email',
                       prompt: 'consent',
                       fetch_basic_profile: true,
                       plugin_name:'chat' }
app.use(GAuth, gAuthOptions)
app.use(router)
app.mount('#app')
