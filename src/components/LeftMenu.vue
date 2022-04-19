<template>
  <nav class="navbar__menu">
    <ul class="navbar__menu-list">
      <li class="navbar__menu-item">
        <button id="btn-menu-add">
          <el-icon style="font-size: 25px"><plus /></el-icon>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected === 0 } ' @click='changeSelected(0);$router.push({path: "/"})' >
          <el-icon style="font-size: 25px"><home-filled /></el-icon>
          <p style="font-size: 12px; margin: 0">Home</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected === 1 } ' @click='changeSelected(1);;$router.push({path: "/about"})' >
          <el-icon style="font-size: 25px"><notebook /></el-icon>
          <p style="font-size: 12px; margin: 0">Book</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected === 2 } ' @click='changeSelected(2)'>
          <el-icon style="font-size: 25px"><video-camera /></el-icon>
          <p style="font-size: 12px; margin: 0">Video</p>
        </button>
      </li>
      <li class="navbar__menu-item">
        <button id="btn-menu" :class=' { "active": selected === 3 } ' @click='changeSelected(3)'>
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
    methods:{
      nav_about(){
        this.$router.push({
                    path: '/about'
                });
      }
    }
}
</script>