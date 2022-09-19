<template>
    <nav class="header__navbar">
        <div class="header__navbar-logo">
          <el-image :src="$appSetting.LOGO_APP" style="width: 60px; height: 60px" />
          <!-- <el-avatar shape="square"  :size="60"  class="header__navbar-logo-img" fit="fill" :src="$appSetting.LOGO_APP" /> -->
          <span class="header__naver-logo-title">{{$appSetting.NAME_APP}}</span>
        </div>
        <div class="header__navbar-logo-mobile">
              <!-- <el-image :src="$appSetting.LOGO_APP" style="width: 50px; height: 50px" /> -->
              <!-- <el-avatar shape="square"  :size="60"  class="header__navbar-logo-img" fit="fill" :src="$appSetting.LOGO_APP" /> -->
              <span class="header__naver-logo-title">{{$appSetting.NAME_APP}}</span>
        </div>
        <div class="header__button-navbar">
          <MenuMobileComponentVue :activeMenu="activeMenu"/>
        </div>     

        <div class="header__navbar-button" style="display: flex; align-items: center;">               
          <div class="header__navbar-search">
           <el-input
            size="large"
            v-model="input_search"
            id="header__navbar-input-search"           
            placeholder="Tìm kiếm ..."
             :prefix-icon="Search"
          />
        </div>  
          <div class="btn__dark-mode"> 
            <el-switch             
              @click="toggle($event)"
                v-model="DarkMode"              
                inline-prompt
                size="large"
                style="--el-switch-on-color: #fff; --el-switch-off-color: #000;"
                :active-icon="icon.Moon"
                :inactive-icon="icon.Sunny"
              />         
            </div>
          
            <label for="checkbox__search"><el-icon class="header__navbar-button-search" style="font-size: 24px;margin-left: 10px;"><search/></el-icon></label>
            <el-button class="header__navbar-button-login" v-show="userInfo.length==0" size="large" 
              style="background-color:#f05123; color: #ffffff; border: #f05123; margin-left:10px;" 
              @click='$router.push({path: "/login"})' round>
              <el-icon style="font-size: 20px;"><Avatar /></el-icon>
            </el-button>

            <!-- <el-popover
                    placement="bottom"
                    :width="250"
                    trigger="click"
                    >
              <template #reference >
                   <el-icon class="header__navbar-button-login" v-show="userInfo.length !=0" style="font-size: 26px;"><Avatar /></el-icon>
              </template>
              <div v-show="userInfo.length !=0"  class="popup-userinfo" style="display: flex;justify-content: center; flex-wrap: wrap;">
                <el-avatar size="large" referrerpolicy="no-referrer" :src="userInfo.profileImage"/>
              </div>
              <div  v-show="userInfo.length !=0" style="display: flex;justify-content: center; flex-wrap: wrap;">
                 <span style="margin-top:10px">Xin chào: {{userInfo.name}}</span>
                <el-button link @click="logout">Đăng xuất</el-button>
              </div>
            </el-popover> -->
          <input type="checkbox" hidden id="checkbox__search" class="header__navbar-button-search-show">
          <label for="checkbox__search" class="nav__overlay-search"></label>
          <div class="header__nav-mobile-search">
            <label for="checkbox__search" class="header__button-close">
              <div class="header__navbar-logo-mobile">
                <el-image :src="$appSetting.LOGO_APP" style="width: 40px; height:40px" />
                <span class="header__naver-logo-title">{{$appSetting.NAME_APP}}</span>
              </div>
              <el-icon style="font-size: 25px;" class="close__btn"><close-bold /></el-icon>
            </label>
            <ul class="header__nav-mobile-list">
              <li class="header__nav-mobile-searchbox">
                 <el-input
                  v-model="input_search"
                  id="header__navbar-input-search"
                  size="large"
                  placeholder="Tìm kiếm khóa học, bài viết, video...."
                  :prefix-icon="Search"
                />
                <el-icon class="navbar__header-icon-search"><search /></el-icon><span class="mobile__item-title"></span>
              </li>
            </ul>
          </div>
        </div>
         <!-- <label for="check__show-nav" class="header__button-show">
         <el-icon style="font-size: 25px;"><expand /></el-icon></label> -->
      </nav>
</template>
<style>
    @import '../../assets/scss/header.scss';
    @import '../../assets/scss/style.scss';
</style>
<script>
import {
  Moon,
  Check, Close,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar,DArrowRight,Sunny
} from "@element-plus/icons-vue";
// import { toggleDark } from '../../composables';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

import MenuMobileComponentVue from "./MenuMobileComponent.vue";
import { ref } from 'vue'
export default {
    components:{
        Document,
        Location,
        Setting,
        IconMenu,
        Plus,
        Check, Close,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled,Avatar,MenuMobileComponentVue,DArrowRight,Moon,Sunny 
    },
    props:['activeMenu'],
    data(){
        return{
            icon:{
              Document,Avatar,Check, Close,Moon,Sunny
            },
            input_search:'',
            selected:'',
            userInfo:[],
            auth:[],
            DarkMode:''
        }
    },
    mounted(){
        this.DarkMode = isDark.value
        this.getUserInfo()
    },
    watch:{
      $route( to,from){
        this.selected=to.name
      },
    },
    methods:{
      toggle(val){
          toggleDark()
          this.DarkMode = isDark._value
      },
       getUserInfo(){
         if(localStorage.getItem('userInfo')){
          this.userInfo =JSON.parse(localStorage.getItem('userInfo')).google.user
          this.auth = JSON.parse(localStorage.getItem('userInfo')).google.auth
        }
      },
      logout(){
        localStorage.setItem('userInfo',[])
        this.userInfo=[]
        this.auth=[]
      }
    }
}
</script>
