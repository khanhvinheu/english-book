import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import GAuth from './config/google_oAuth.js'
import GAuth from 'vue3-google-oauth2'
const app = createApp(App)
// const gauthOption = {
//     clientId: '734152041521-3da39udq2rrh2h52n0ga1j7d7rm1uhal.apps.googleusercontent.com',
//     scope: 'profile email',
//     prompt: 'select_account'
// }
// app.use(GAuth,gauthOption)
app.use(router)
app.mount('#app')
