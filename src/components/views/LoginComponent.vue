<template>
      <div class="container">
      <div class="background__page"></div>
        <div class="main__login">
          <div class="title__login-box">
            <span class="text__title">Login</span>
          </div>
          <div class="input__box">
            <el-input v-model="input.username" placeholder="Username" clearable />
            <div style="margin: 20px 0" />
            <el-input
                v-model="input.password"
                type="password"
                placeholder="Password"
                show-password
            />
            <div style="margin: 20px 0" />
            <el-button style="width: 100%" type="success">Login</el-button>
          </div>
          <el-divider content-position="center">or Sign In with</el-divider>
          <div class="login__with">
              <SocialLogin/>
          </div>
        </div>

      </div>
</template>

<script>
import SocialLogin from "../Common/SocialLogin.vue";
export default {
  name: "LoginComponent",
  data(){
    return{
      input:{
        username:'',
        password:''
      }
    }
  }
}
</script>

<style scoped>
  @import '../../assets/scss/login.scss';
</style>
