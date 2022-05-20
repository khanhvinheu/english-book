<template>
  <nav class="navbar__menu">
    <ul class="navbar__menu-list">
      <li class="navbar__menu-item">
        <el-tooltip
                class="box-item"
                effect="dark"
                content="Tạo blog mới"
                placement="right-start"
        >
          <button id="btn-menu-add">
            <el-icon style="font-size: 25px"><plus /></el-icon>
          </button>
        </el-tooltip>

      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected == "Home" } ' @click='$router.push({path: "/"})' >
          <el-icon style="font-size: 25px"><home-filled /></el-icon>
          <p style="font-size: 12px; margin: 0">Trang chủ</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected == "Book" } ' @click='$router.push({path: "/book"})' >
          <el-icon style="font-size: 25px"><notebook /></el-icon>
          <p style="font-size: 12px; margin: 0">Sách</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected == "Video" } ' @click='$router.push({path: "/video"})'>
          <el-icon style="font-size: 25px"><video-camera /></el-icon>
          <p style="font-size: 12px; margin: 0">Video</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected == "Course"} ' @click='$router.push({path: "/course"})'>
          <el-icon style="font-size: 25px"><trend-charts /></el-icon>
          <p style="font-size: 12px; margin: 0">Khóa học</p>
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
    data(){
          return{
            selected:"Home"
          }
    },
    methods:{
    },
    watch:{
      $route( to,from){
          this.selected=to.name
      }
    }
}
</script>
