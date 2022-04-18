
<template>
  <div class="app">
    <header class="header">
     <div class="grid">
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
              <li class="header__nav-mobile-item active "><el-icon style="font-size: 25px;"><home-filled /></el-icon><span class="mobile__item-title">Home</span></li>
              <li class="header__nav-mobile-item"><el-icon style="font-size: 25px;"><notebook /></el-icon><span class="mobile__item-title">Book</span></li>
              <li class="header__nav-mobile-item"><el-icon style="font-size: 25px;"><video-camera /></el-icon><span class="mobile__item-title">Video</span></li>
              <li class="header__nav-mobile-item"><el-icon style="font-size: 25px;"><trend-charts /></el-icon><span class="mobile__item-title">Course</span></li>
            </ul>

          </div>
          <label for="check__show-nav" class="nav__overlay"></label>
        
        </div>
         
        <div class="header__navbar-search">
          <!-- <input type="text" class="header__navbar-inout-search"> -->
           <el-input
            v-model="input1"
            class="w-50 m-2 header__navbar-inout-search"
            size="large"
            placeholder="Tìm kiếm khóa học, bài viết, video...."
             :prefix-icon="Search"
          />          
        </div>
        <div class="header__navbar-button">
          <button class="header__navbar-button-login" id="login">Đăng nhập</button>
          <el-icon class="header__navbar-button-notification" style="font-size: 25px;"><bell-filled/></el-icon>
        </div>
      </nav>      
    </div>
    
    </header>
    <div class="container">
      <div class="grid">
      <div class="grid__row">
      <div class="menu">
          <nav class="navbar__menu">
            <ul class="navbar__menu-list">
              <li class="navbar__menu-item"><button id="btn-menu-add"><el-icon style="font-size: 25px;"><plus /></el-icon></button> </li>
              <li class="navbar__menu-item"><button id="btn-menu" class="active" ><el-icon style="font-size: 25px;"><home-filled /></el-icon> <p style="font-size: 12px; margin: 0;">Home</p></button> </li>
              <li class="navbar__menu-item"><button id="btn-menu"><el-icon style="font-size: 25px;"><notebook /></el-icon> <p style="font-size: 12px; margin: 0;">Book</p></button> </li>
              <li class="navbar__menu-item"><button id="btn-menu"><el-icon style="font-size: 25px;"><video-camera /></el-icon> <p style="font-size: 12px; margin: 0;">Video</p></button></li>
              <li class="navbar__menu-item"><button id="btn-menu"><el-icon style="font-size: 25px;"><trend-charts /></el-icon> <p style="font-size: 12px; margin: 0;">Course</p></button> </li>
             
            </ul>
          </nav>
      </div>
      <div class="main">
         <div class="main__slide">
            <el-carousel height="250px">
              <el-carousel-item v-for="item in slide" v-bind:style="{ 'background': item.background,'border-radius':'10px'}">
                <div class="contain-slide">
                <h3 class="small" :style="{'color':item.color,'font-size':'20px'}">{{item.title}}</h3>
                <button id="register-KH">Đăng ký ngay</button>
                </div>
              </el-carousel-item>
            </el-carousel>   
          
         </div>
      </div>
      </div>
      </div>
    </div>
    <footer class="footer">
        <div class="grid">
              <div class="footer__top">              
                <div class="footer__top-item">
                  <ul class="footer__top-list">
                    <li class="footer__top-lits-item">                    
                        <el-avatar shape="square"  :size="40" fit="fill" src="./img/logo.png" />
                        <h3 class="footer__top_list-title">English Book 2</h3>                     
                    </li>
                    <li class="footer__top-lits-item">                    
                            
                       Điện thoại: 0868.350.979
                    </li>
                    <li class="footer__top-lits-item">                    
                       Email: vinh.khanhdu@gmail.com
                                        
                    </li>
                    <li class="footer__top-lits-item">                    
                       Địa chỉ: Trà Vinh, TP Trà Vinh                                          
                    </li>
                  </ul>
                </div>
                <div class="footer__top-item">
                  <ul class="footer__top-list">
                    <li class="footer__top-lits-item">                    
                       
                        <h3>English Book 2</h3>                     
                    </li>
                    <li class="footer__top-lits-item">                    
                            
                       Điện thoại: 0868.350.979
                    </li>
                    <li class="footer__top-lits-item">                    
                       Email: vinh.khanhdu@gmail.com
                                        
                    </li>
                    <li class="footer__top-lits-item">                    
                       Địa chỉ: Trà Vinh, TP Trà Vinh                                          
                    </li>
                  </ul>
                </div>
                <div class="footer__top-item">
                  <ul class="footer__top-list">
                    <li class="footer__top-lits-item">                    
                       
                        <h3>English Book 2</h3>                     
                    </li>
                    <li class="footer__top-lits-item">                    
                            
                       Điện thoại: 0868.350.979
                    </li>
                    <li class="footer__top-lits-item">                    
                       Email: vinh.khanhdu@gmail.com
                                        
                    </li>
                    <li class="footer__top-lits-item">                    
                       Địa chỉ: Trà Vinh, TP Trà Vinh                                          
                    </li>
                  </ul>
                </div>
                <div class="footer__top-item">
                  <ul class="footer__top-list">
                    <li class="footer__top-lits-item">                    

                        <h3>English Book 2</h3>                     
                    </li>
                    <li class="footer__top-lits-item">                    
                            
                       Điện thoại: 0868.350.979
                    </li>
                    <li class="footer__top-lits-item">                    
                       Email: vinh.khanhdu@gmail.com
                                        
                    </li>
                    <li class="footer__top-lits-item">                    
                       Địa chỉ: Trà Vinh, TP Trà Vinh                                          
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer__bottom">
                <span>© 2022 Book-Shop Nơi học tập và chia sẻ.</span>
              </div>
          </div>
      
    </footer>
  </div>
</template>
<style>
 @import './assets/scss/style.scss';
 @import './assets/scss/header.scss';
 @import './assets/scss/container.scss';
 @import './assets/scss/footer.scss';
 </style>
<script lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled
} from "@element-plus/icons-vue";
export default {
  components: {
    Document,
    Location,
    Setting,
    IconMenu,
    Plus,
    HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled
  },
  data(){
    return {
      input1:'',
      slide:[
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,193,148,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff'
        },
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,49,193,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff'
        },
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,193,148,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff'
        },
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,49,193,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff'
        }      
      ]
    }
  }
};
</script>

