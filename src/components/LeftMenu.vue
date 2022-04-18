<template>
  <nav class="navbar__menu">
    <ul class="navbar__menu-list">
      <li class="navbar__menu-item">
        <button id="btn-menu-add">
          <el-icon style="font-size: 25px"><plus /></el-icon>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" class="active">
          <el-icon style="font-size: 25px"><home-filled /></el-icon>
          <p style="font-size: 12px; margin: 0">Home</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu">
          <el-icon style="font-size: 25px"><notebook /></el-icon>
          <p style="font-size: 12px; margin: 0">Book</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu">
          <el-icon style="font-size: 25px"><video-camera /></el-icon>
          <p style="font-size: 12px; margin: 0">Video</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu">
          <el-icon style="font-size: 25px"><trend-charts /></el-icon>
          <p style="font-size: 12px; margin: 0">Course</p>
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
export default {
        components:{
        Document,
        Location,
        Setting,
        IconMenu,
        Plus,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled
    },
}
</script>