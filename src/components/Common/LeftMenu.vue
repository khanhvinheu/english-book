<template>
  <nav class="navbar__menu">
    <ul class="navbar__menu-list">
      <li class="navbar__menu-item" style="margin-bottom: 10px">
        <el-tooltip
                class="box-item"
                effect="dark"
                content="Tạo blog mới"
                placement="right-start"
        >         
          <el-button type="primary" style="width: 50px; height: 50px; color: #ffffff;" @click='$router.push({path: "/create-blog"})' :icon="icon.Plus" circle />
        </el-tooltip>

      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": activeMenu == "Home" } ' @click='$router.push({path: "/"})' >
          <el-icon style="font-size: 25px"><home-filled /></el-icon>
          <p style="font-size: 10px; margin: 0">Trang chủ</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": activeMenu == "Book" } ' @click='$router.push({path: "/book"})' >
          <el-icon style="font-size: 25px"><notebook /></el-icon>
          <p style="font-size: 10px; margin: 0">Sách</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": activeMenu == "Video" } ' @click='$router.push({path: "/video"})'>
          <el-icon style="font-size: 25px"><video-camera /></el-icon>
          <p style="font-size: 10px; margin: 0">Video</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": activeMenu == "Course"} ' @click='$router.push({path: "/course"})'>
          <el-icon style="font-size: 25px"><trend-charts /></el-icon>
          <p style="font-size: 10px; margin: 0">Khóa học</p>
        </button>
      </li>
    </ul>
  </nav>
</template>
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
    
    props:['activeMenu'],
    data(){
      return{
        icon:{Plus}
        
      }
    },
    methods:{
    },

}
</script>
