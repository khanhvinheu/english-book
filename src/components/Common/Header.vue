<template>
    <nav class="header__navbar">
        <div class="header__navbar-logo">        
          <el-avatar shape="square"  :size="40"  class="header__navbar-logo-img" fit="fill" :src="$appSetting.LOGO_APP" />
          <span class="header__naver-logo-title">{{$appSetting.NAME_APP}}</span>
        </div>
        <div class="header__button-navbar">
          <MenuMobileComponentVue :activeMenu="activeMenu"/>
        </div>
        <div class="header__navbar-search">        
           <el-input
            v-model="input_search"
            id="header__navbar-input-search"
            size="large"
            placeholder="Tìm kiếm khóa học, bài viết, video...."
             :prefix-icon="Search"
          />
        </div>
        <div class="header__navbar-button" style="display: flex; align-items: center;">       
          <el-button class="header__navbar-button-login" v-show="userInfo.length==0" style="background-color:#f05123; color: #ffffff; border: #f05123;" @click='$router.push({path: "/login"})' round>Đăng nhập</el-button>  
              <el-popover               
                    placement="bottom"                   
                    :width="250"
                    trigger="click"
                    >
              <template #reference >               
                   <el-icon class="header__navbar-button-login" v-show="userInfo.length !=0" style="font-size: 26px; color: #f05123;"><Avatar /></el-icon>               
              </template>
              <div v-show="userInfo.length !=0"  class="popup-userinfo" style="display: flex;justify-content: center; flex-wrap: wrap;">
                <el-avatar size="large" referrerpolicy="no-referrer" :src="userInfo.profileImage"/>                   
              </div>
              <div  v-show="userInfo.length !=0" style="display: flex;justify-content: center; flex-wrap: wrap;">
                 <span style="margin-top:10px">Xin chào: {{userInfo.name}}</span>     
                <el-button link @click="logout">Đăng xuất</el-button>
              </div>
              
            </el-popover>


          <label for="checkbox__search"><el-icon class="header__navbar-button-search" style="font-size: 24px;"><search/></el-icon></label>

            <el-popover
                    placement="bottom"
                    title="Notification"
                    :width="200"
                    trigger="click"
                    content="Check update version">
              <template #reference>
                <el-badge :value="9"  class="header__navbar-button-notification">
                  <el-icon style="font-size: 25px;"><bell-filled/></el-icon>
                </el-badge>
              </template>
            </el-popover>
          <!-- Search Mobile -->
          <input type="checkbox" hidden id="checkbox__search" class="header__navbar-button-search-show">
          <label for="checkbox__search" class="nav__overlay-search"></label>
          <div class="header__nav-mobile-search">
            <label for="checkbox__search" class="header__button-close">
              <div class="header__navbar-logo-mobile">               
                <el-avatar shape="square"  :size="40"  class="header__navbar-logo-img" fit="fill" src="./img/logo.png" />
                <span class="header__naver-logo-title">English-Book</span>
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
      </nav>
</template>
<style>
    @import '../../assets/scss/header.scss';
    @import '../../assets/scss/style.scss';
</style>
<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar,DArrowRight
} from "@element-plus/icons-vue";
import MenuMobileComponentVue from "./MenuMobileComponent.vue";
import { ref } from 'vue'
export default {
    components:{
        Document,
        Location,
        Setting,
        IconMenu,
        Plus,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled,Avatar,MenuMobileComponentVue,DArrowRight
    },
    props:['activeMenu'],
    data(){
        return{
            icon:{
              Document,Avatar
            },
            input_search:'',
            selected:'',
            userInfo:[],
            auth:[]
        }
    },
    mounted(){
     this.getUserInfo()
    },
    watch:{
      $route( to,from){
        this.selected=to.name
      }
    },
    methods:{
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
