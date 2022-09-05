import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GAuth from './config/google_oAuth'
// import 'element-plus/lib/theme-chalk/base.css'
import "./styles/index.scss";
import 'uno.css'
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"
import  appSetting from './config/appSetting'
const app = createApp(App)
app.config.globalProperties.$appSetting = appSetting
const gAuthOptions = { clientId: '734152041521-3da39udq2rrh2h52n0ga1j7d7rm1uhal.apps.googleusercontent.com',
                       scope: 'email',
                       prompt: 'consent',
                       fetch_basic_profile: true,
                       plugin_name:'chat',
                      //  RedirectURL:  "postmessage",
                      //  ux_mode:'redirect',
                      //  redirect_uri: 'http://localhost:9999/home',
                      //  redirect_uri: 'https://english-book.chohailua.vn/home',
                      //  cookiepolicy: 'single_host_origin',
                     }
app.use(GAuth, gAuthOptions)
app.use(router)
app.mount('#app')
