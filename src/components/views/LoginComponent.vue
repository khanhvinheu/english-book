<template>
      <div class="container">
        <div class="background__page"></div>
          <div class="main__login">
            <div class="title__login-box">
              <el-avatar  :size="130"  class="login-logo-img" fit="fill" src="./img/logo_new.png" />
<!--              <span class="text__title">BETTER-ENGLISH</span>-->
            </div>
            <div class="input__box">
              <el-input
                  v-model="input.username" size="large" placeholder="Username" clearable>
                <template #prepend><el-icon size="20px" color="#f05123"><UserFilled /></el-icon></template>
              </el-input>
              <div style="margin: 20px 0" />
              <el-input

                  size="large"
                  v-model="input.password"
                  type="password"
                  placeholder="Password"
                  show-password
              >
                <template #prepend><el-icon size="20px" color="#f05123"><Key /></el-icon></template>
              </el-input>
              <div style="margin: 20px 0" />
              <el-button style="width: 100%; height: 50px; border-radius: 0px; background-color: #f05123; color: #ffffff; font-weight: 100; font-size: 16px" >Login</el-button>
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
import {
 UserFilled,Key
} from "@element-plus/icons-vue";
export default {
  name: "LoginComponent",
  components:{
    UserFilled,Key
  },
  data(){
    return{
      icon:{
        UserFilled,Key
      },
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
