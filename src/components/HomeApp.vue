<template>
  <div class="app">
     <el-progress v-show="loading" :percentage="100" :show-text="false"  stroke-width="4" :format="format" :indeterminate="true" color="ỏ" />
    <header class="header">
      <div class="grid">
        <Header :activeMenu="activeMenu"></Header>
      </div>
    </header>
    <div class="container">
      <div class="grid">
        <div class="grid__row">
          <div class="menu">
            <LeftMenu :activeMenu="activeMenu" />
          </div>
          <div class="main">
            <Transition duration="550" name="nested">
              <RouterView />
            </Transition>
          </div>
        </div>
      </div>
      <ScrollTopComponent>
        <a class="btn btn-light">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </a>
      </ScrollTopComponent>
    </div>
    <footer class="footer">
      <div class="grid">
        <Footer/>
      </div>
    </footer>
  </div>
</template>
<style>
@import '../assets/scss/container.scss';
@import '../assets/scss/transitionVue.scss';
</style>
<script>
import Header from './Common/Header.vue'
import Footer from './Common/Footer.vue'
import Home from './views/Home.vue'
import LeftMenu from './Common/LeftMenu.vue'
import ScrollTopComponent from './Common/ScrollTop.vue'

export default {
  components: {
    Header,Footer,Home,LeftMenu,ScrollTopComponent
  },
  data(){
    return{
      loading:false,
      activeMenu:'',
    }
  },
  mounted(){
    
  },
  created(){
      this.activeMenu = this.$route.name
  },  
  watch:{
    $route(to,from){   
      this.activeMenu = to.name
      this.loading = true
      setTimeout(()=>{
      this.loading = false      
    },1000)
    }
  }

};
</script>

