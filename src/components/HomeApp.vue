<template>
  <div class="app">
<<<<<<< HEAD
    <div class="background-mobile-top"></div>
    <el-progress
      style="position: absolute; width: 100%; height: 10px; z-index: 9999; top: -3px"
      v-show="loading"
      :percentage="100"
      :show-text="false"
      stroke-width="4"
      :format="format"
      :indeterminate="true"
      color="ỏ"
    />
    <header
      class="header"
      v-bind:style="{ 'background-color': visibleClassMenuTop ? '' : 'transparent' }"
    >
=======
     <el-progress style="position: absolute; width: 100%; height:10px ; z-index: 9999; top: -3px" v-show="loading" :percentage="100" :show-text="false"  stroke-width="4" :format="format" :indeterminate="true" color="success" />
     
    <header class="header" v-bind:class="{'header-scrolled':visibleHeader}">
>>>>>>> 6b5efe3c9f636bf2216f8cd2c97e1f85a05616d0
      <div class="grid">
        <Header :activeMenu="activeMenu"></Header>
      </div>
    </header>
    <div class="banner">

    </div>

    <div class="container" style="padding: 10px">
      <div class="grid">
        <div class="grid__row">
          <div class="menu">
            <LeftMenu :activeMenu="activeMenu" />
          </div>
          <div class="main" style="z-index: 2">
            <!-- <el-avatar v-show="img" size="large" referrerpolicy="no-referrer" :src="img"/>
           <h3 v-show="name">Hello: {{name}}</h3>   -->
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
    <div class="menu__bottom_mobile" v-if="visibleMenu">
      <MenuBottomMobile />
    </div>

    <footer class="footer">
      <div class="grid">
        <Footer />
      </div>
    </footer>
  </div>
</template>
<style>
@import "../assets/scss/container.scss";
@import "../assets/scss/transitionVue.scss";
</style>
<script>
import Header from "./Common/Header.vue";
import Footer from "./Common/Footer.vue";
import Home from "./views/Home.vue";
import LeftMenu from "./Common/LeftMenu.vue";
import MenuBottomMobile from "./Common/MenuBottomMobile.vue";
import ScrollTopComponent from "./Common/ScrollTop.vue";

export default {
  components: {
    Header,
    Footer,
    Home,
    LeftMenu,
    ScrollTopComponent,
    MenuBottomMobile,
  },
<<<<<<< HEAD
  data() {
    return {
      loading: false,
      activeMenu: "",
      img: "",
      name: "",
      visibleMenu: false,
      visibleClassMenuTop: false,
    };
=======
  data(){
    return{
      loading:false,
      activeMenu:'',
      img:'',
      name:'',
      visibleMenu: false,
      visibleHeader: false,
    }
>>>>>>> 6b5efe3c9f636bf2216f8cd2c97e1f85a05616d0
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
    //  setTimeout(()=>{
    //      console.log(this.$gAuth.GoogleAuth.currentUser.tb.Lu)
    //      this.img = this.$gAuth.GoogleAuth.currentUser.tb.Lu.rN
    //      this.name = this.$gAuth.GoogleAuth.currentUser.tb.Lu.tf
    //      localStorage.setItem('item',JSON.stringify(this.$gAuth.GoogleAuth.currentUser.tb.Lu))
    //  },1500)

    // START NEW CODE
    // auth2.currentUser.listen(function(googleUser) {
    //     if (googleUser && (gProfile = googleUser.getBasicProfile())) {
    //         var name   = gProfile.getName();
    //         var email  = gProfile.getEmail();
    //         var imgUrl = gProfile.getImageUrl();

    //         console.log({name, email, imgUrl});
    //     }
    // });
    // END NEW CODE
  },
  methods: {
    scrollListener: function (e) {
<<<<<<< HEAD
      this.visibleMenu = window.scrollY < window.screen.height - 200;
      this.visibleClassMenuTop = window.scrollY > 10;
    },
=======

    
      this.visibleMenu = window.scrollY< (window.screen.height-200)
      this.visibleHeader =  window.scrollY > 100       
      

    }

>>>>>>> 6b5efe3c9f636bf2216f8cd2c97e1f85a05616d0
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
  created() {
    this.activeMenu = this.$route.name;
  },
  watch: {
    $route(to, from) {
      this.activeMenu = to.name;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
