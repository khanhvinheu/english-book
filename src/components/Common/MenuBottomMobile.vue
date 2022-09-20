<template>
    <div style="display:flex; justify-content: space-around; align-items: center;height: 40px;">
         <div class="item__menu-bottom">
            <el-icon style="font-size: 20px;"><HomeFilled/></el-icon>
            <span>Trang Chủ</span>
        </div>
         <el-badge :value="1" class="item">
             <div class="item__menu-bottom">
                     <el-icon style="font-size: 20px;"><Message/></el-icon>
                     <span> Tin nhắn</span>
            </div>
         </el-badge>
         <div class="item__menu-bottom">
            <el-icon style="font-size: 20px;"><Setting/></el-icon>
            <span> Cài đặt</span>
        </div>

        <label for="check__show-nav">
            <div class="item__menu-bottom">
            <el-icon style="font-size: 20px;"><Expand/></el-icon>
            <span> Danh mục</span>
        </div></label>
    </div>
</template>
<script>
    import {
  Moon,
  Check, Close,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Plus,
  HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar,DArrowRight,Sunny,Message,
} from "@element-plus/icons-vue";
export default {
    components:{
        Location,
        Setting,
        Plus,
        HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar,DArrowRight,Sunny,Message,IconMenu,
    },
    data(){
        return{
            icon:{
                Location,
                Setting,
                Plus,
                HomeFilled,Notebook,VideoCamera,TrendCharts,Search,CloseBold,Expand,BellFilled, Avatar,DArrowRight,Sunny
            },

        }
    },
}
</script>
<style scoped>
    .item__menu-bottom{
        display:flex; flex-wrap: wrap; flex-direction: column; justify-content:center; align-items:center
    }
    .item__menu-bottom:hover{
        background: linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2));
        color: #fff;
        padding: 10px;
        position: relative;
        border-radius:50px;
        width: 100px;
        height: 50px;
        top:0px;
    }
</style>
