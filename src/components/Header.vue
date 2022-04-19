<template>
    <nav class="header__navbar">
        <div class="header__navbar-logo">
          <!-- <img src="/img/logo.png" width="100" class="header__navbar-logo-img" alt="" srcset=""> -->
          <el-avatar shape="square"  :size="40"  class="header__navbar-logo-img" fit="fill" src="./img/logo.png" />
          <span class="header__naver-logo-title">English-Book</span>
        </div>

        <div class="header__button-navbar">
          <label for="check__show-nav" class="header__button-show">            
            <el-icon style="font-size: 25px;"><expand /></el-icon></label>
          <input name="" hidden class="bt-show" id="check__show-nav" type="checkbox">
          <div class="header__nav-mobile">
            <label for="check__show-nav" class="header__button-close">
              <div class="header__navbar-logo-mobile">
                <!-- <img src="/img/logo.png" width="100" class="header__navbar-logo-img" alt="" srcset=""> -->
                <el-avatar shape="square"  :size="40"  class="header__navbar-logo-img" fit="fill" src="./img/logo.png" />
                <span class="header__naver-logo-title">English-Book</span>
              </div>
              <el-icon style="font-size: 25px;" class="close__btn"><close-bold /></el-icon>
            </label>
            <ul class="header__nav-mobile-list">               
              <li class="header__nav-mobile-item" :class=' { "active": selected === 0 } ' @click='changeSelected(0);$router.push({path: "/"})'><el-icon style="font-size: 25px;"><home-filled /></el-icon><span class="mobile__item-title">Home</span></li>
              <li class="header__nav-mobile-item" :class=' { "active": selected === 1 } ' @click='changeSelected(1);;$router.push({path: "/about"})'><el-icon style="font-size: 25px;"><notebook /></el-icon><span class="mobile__item-title">Book</span></li>
              <li class="header__nav-mobile-item" :class=' { "active": selected === 2 } ' @click='changeSelected(2)'><el-icon style="font-size: 25px;"><video-camera /></el-icon><span class="mobile__item-title">Video</span></li>
              <li class="header__nav-mobile-item" :class=' { "active": selected === 3 } ' @click='changeSelected(3)'><el-icon style="font-size: 25px;"><trend-charts /></el-icon><span class="mobile__item-title">Course</span></li>
            </ul>
          </div>
          <label for="check__show-nav" class="nav__overlay"></label>
        
        </div>
         
        <div class="header__navbar-search">
          <!-- <input type="text" class="header__navbar-inout-search"> -->
           <el-input
            v-model="input_search"
            id="header__navbar-input-search"
            size="large"
            placeholder="Tìm kiếm khóa học, bài viết, video...."
             :prefix-icon="Search"
          />          
        </div>
        <div class="header__navbar-button" style="display: flex;">
          <button class="header__navbar-button-login" id="login">Đăng nhập</button>
          <label for="checkbox__search"><el-icon class="header__navbar-button-search" style="font-size: 24px;"><search/></el-icon></label>
         
          <el-badge :value="9"  class="header__navbar-button-notification">
            <el-icon style="font-size: 25px;"><bell-filled/></el-icon>
          </el-badge>
          <!-- Search Mobile -->
          <input type="checkbox" hidden id="checkbox__search" class="header__navbar-button-search-show">
          <label for="checkbox__search" class="nav__overlay-search"></label>
          <div class="header__nav-mobile-search">
            <label for="checkbox__search" class="header__button-close">
              <div class="header__navbar-logo-mobile">
                <!-- <img src="/img/logo.png" width="100" class="header__navbar-logo-img" alt="" srcset=""> -->
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
    @import '../assets/scss/header.scss';
    @import '../assets/scss/style.scss';
</style>
<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled
} from "@element-plus/icons-vue";
import { ref } from 'vue'
export default {
    components:{
        Document,
        Location,
        Setting,
        IconMenu,
        Plus,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled
    },
    setup () {
        const selected = ref(0); // index of the selected el

        const changeSelected = (i) => {
          selected.value = i;
        };
        return {
          changeSelected,
          selected,
        };
    },
    data(){
        return{
            input_search:''
        }
    }
}
</script>