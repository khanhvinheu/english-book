<template>
  <nav class="navbar__menu">
    <ul class="navbar__menu-list" v-for="item in itemMenu">    
      <li class="navbar__menu-item">              
        <button v-if="!item.circle" id="btn-menu" :class=' { "active": activeMenu == item.activeMenu} ' @click='$router.push({path: item.path})'>     
          <ion-icon style="font-size: 25px" :name="item.icon"></ion-icon>
          <p style="font-size: 10px; margin: 0">{{item.title}}</p>
        </button> 
        <el-tooltip
                class="box-item"
                effect="dark"
                content="Tạo blog mới"
                placement="right-start"
        >  
        <el-button v-if="item.circle" type="primary" style="width: 50px; height: 50px; color: #ffffff;margin-bottom: 10px;" @click='$router.push({path: "/create-blog"})' :icon="icon.Plus" circle />
       </el-tooltip>
        <el-tooltip               
                class="box-item"
                effect="dark"
                content="Tạo blog mới"
                placement="right-start"
        >  
        </el-tooltip>
      </li> 
    </ul>
    <ul>
      <li><el-switch
              @click="toggle($event)"
                v-model="DarkMode"              
                inline-prompt
                size="large"
                style="--el-switch-on-color: #fff; --el-switch-off-color: #000;"
                :active-icon="icon.Moon"
                :inactive-icon="icon.Sunny"
              />          </li>
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
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled,Moon,Sunny
} from "@element-plus/icons-vue";
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
import { ref } from 'vue'
export default {   
    components:{
        Document,
        Location,
        Setting,
        IconMenu,
        Plus,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled,Moon,Sunny
    },
    
    props:['activeMenu'],
    data(){
      return{
        DarkMode:'',
        icon:{Plus,Moon,Sunny},
        itemMenu:[
          {
            title:'Blog',
            activeMenu:'Home',
            path:'/',
            icon:'home',
            circle:true
          },
          {
            title:'Home',
            activeMenu:'Home',
            path:'/',
            icon:'home'
          },
          {
            title:'Book',
            activeMenu:'Book',
            path:'/book',
            icon:'book'
          },
          {
            title:'Video',
            activeMenu:'Video',
            path:'/video',
            icon:'film-outline'
          },
          {
            title:'Course',
            activeMenu:'Course',
            path:'/course',
            icon:'pulse-outline'
          },
          {
            title:'Blog post',
            activeMenu:'Blog',
            path:'/blog',
            icon:'people-outline'
          },
        ]
        
      }
    },
    methods:{
      toggle(val){
          toggleDark()
          this.DarkMode = isDark._value
      },
    },
    mounted(){
      this.DarkMode = isDark.value
    }

}
</script>
