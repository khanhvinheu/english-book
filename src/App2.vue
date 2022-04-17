
<template>
  <div class="common-layout">  
    
        <div id="header"      
        >
        <div style="display: flex; align-items: center;">
          <el-avatar shape="square"  :size="40" fit="fill" src="./img/logo.png" />
          <h3 style="padding-left:6px;">English Book</h3>
        </div>
        <div style="width:450px">
           <el-input
            v-model="input1"
            class="w-50 m-2 input-search"
            size="large"
            placeholder="Tìm kiếm khóa học, bài viết, video...."
             :prefix-icon="Search"
          />          
        </div>      
          <button id="login">Đăng nhập</button>        
      </div>   
     
    <div id="container">
      <div class="Slidebar">
      <div style="padding-top: 10px; width:90px;" cirile id="catelogy">
        <ul class="menu">
          <li > 
            <button id="btn-menu-add"><el-icon style="font-size: 25px;"><plus /></el-icon></button> 
          </li>
          <li > 
            <button id="btn-menu"><el-icon style="font-size: 25px;"><home-filled /></el-icon> <p style="font-size: 12px; margin: 0;">Home</p></button> 
          </li>
          <li >
            <button id="btn-menu"><el-icon style="font-size: 25px;"><notebook /></el-icon> <p style="font-size: 12px; margin: 0;">Book</p></button> 
          </li>
          <li > 
            <button id="btn-menu"><el-icon style="font-size: 25px;"><video-camera /></el-icon> <p style="font-size: 12px; margin: 0;">Video</p></button> 
          </li>
          <li > 
            <button id="btn-menu"><el-icon style="font-size: 25px;"><trend-charts /></el-icon> <p style="font-size: 12px; margin: 0;">Course</p></button> 
          </li>
        </ul>
      </div> 
      </div>
      <div id="main" style="width: calc(100% - 90px); padding: 10px;">          
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
       
          <footer id="footer">
            <div class="footer-top">
              <div style="display: flex;flex-direction: column; ">
                <div style="display: flex; align-items: center; ">
                    <el-avatar shape="square"  :size="40" fit="fill" src="./img/logo.png" />
                    <h3 style="padding-left:6px;">English Book</h3>
                </div>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Điện thoại: 0868.350.979</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Email: vinh.khanhdu@gmail.com</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Địa chỉ: Trà Vinh, TP Trà Vinh</span>              
              </div>
              <div style="display: flex;flex-direction: column;">                              
                <h3>Về English Book</h3>    
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Giảng dạy qua các khóa học</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Sách điện tử</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Giải đáp online</span>              
              </div>
              <div style="display: flex;flex-direction: column;">                              
                <h3>Hỗ trợ</h3>    
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Liên hệ</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Bảo mật</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Điều khoản</span>              
              </div>
              <div style="display: flex;flex-direction: column;">                              
                <h3>Website Tiếng Anh</h3>  
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Ngày công bố: DD/MM/YYYY</span>
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Lĩnh vực: Tiếng anh, Sách điện tử, Video khóa học</span>              
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">Version:1.0.0</span>              
              </div>
            </div>
            
            <div class="footer-bottom">
              <div style="display: flex;flex-direction: column;">               
                <span style="font-weight: unset; font-size: 1.4 rem; color:#A9B3BB">© 2022 English-Book Nơi học tập và chia sẻ</span>              
              </div>
            
              <div style="display: flex;justify-content: end;">                             
                         <el-avatar shape="square"  :size="20" fit="fill" src="./img/logo.png" />
                         <el-avatar shape="square"  :size="20" fit="fill" src="./img/logo.png" />
                         <el-avatar shape="square"  :size="20" fit="fill" src="./img/logo.png" />                              
              </div>
            </div> 
            
           
           
          </footer>
  </div>
</template>
<style>
 @import './assets/scss/style.scss';
 </style>
<script lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search
} from "@element-plus/icons-vue";
export default {
  components: {
    Document,
    Location,
    Setting,
    IconMenu,
    Plus,
    HomeFilled,Notebook,VideoCamera,TrendCharts,Search
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
      ]
    }
  }
};
</script>

