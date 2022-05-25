<template>
        <label for="check__show-nav" class="header__button-show">
         <el-icon style="font-size: 25px;"><expand /></el-icon></label>
          <input name="" hidden class="bt-show" id="check__show-nav" type="checkbox">
          <div class="header__nav-mobile">
            <label for="check__show-nav" class="header__button-close">
              <div class="header__navbar-logo-mobile">            
                <el-avatar shape="square"  :size="40"  class="header__navbar-logo-img" fit="fill" src="./img/logo.png" />
                <span class="header__naver-logo-title">English-Book</span>
              </div>
              <el-icon style="font-size: 25px;" class="close__btn"><close-bold /></el-icon>
            </label>
            <div class="box__user-mobile">
              <ul class="header__nav-mobile-list">
              <li class="header__nav-mobile-item"  @click='$router.push({path: "/login"})'><el-icon style="font-size: 25px;"><avatar /></el-icon><span class="mobile__item-title">Đăng nhập</span></li>
              <li class="header__nav-mobile-item"><ion-icon style="font-size: 25px;" name="create-outline"></ion-icon><span class="mobile__item-title">Đăng ký</span></li>
              <li class="header__nav-mobile-item"><ion-icon style="font-size: 25px;" name="settings-outline"></ion-icon><span class="mobile__item-title">Cài đặt hệ thống</span></li>
              </ul>
            </div>
            <el-divider />
            <ul class="header__nav-mobile-list">
              <li class="header__nav-mobile-item" :class=' { "active": activeMenu == "Home" } ' @click='$router.push({path: "/"})'><el-icon style="font-size: 25px;"><home-filled /></el-icon><span class="mobile__item-title">Trang chủ</span></li>
              <li class="header__nav-mobile-item" :class=' { "active": activeMenu == "Book"} ' @click='$router.push({path: "/book"})'><el-icon style="font-size: 25px;"><notebook /></el-icon><span class="mobile__item-title">Sách</span></li>
              <li class="header__nav-mobile-item" :class=' { "active": activeMenu == "Video" } ' @click='$router.push({path: "/video"})'><el-icon style="font-size: 25px;"><video-camera /></el-icon><span class="mobile__item-title">Video</span></li>
              <li class="header__nav-mobile-item" :class=' { "active": activeMenu == "Course" } ' @click='$router.push({path: "/course"})'><el-icon style="font-size: 25px;"><trend-charts /></el-icon><span class="mobile__item-title">Khóa học</span></li>
              <el-divider />
            </ul>
          </div>
          <label for="check__show-nav" class="nav__overlay"></label>
</template>
<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar
} from "@element-plus/icons-vue";
export default {
    props:['activeMenu'],
    components:{
        Document,
        IconMenu,
        Location,
        Setting,
        Plus,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar
    }
}
</script>