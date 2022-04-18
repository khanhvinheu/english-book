<template>
  <div class="app">
    <header class="header">
     <div class="grid">      
       <Header></Header>
     </div>    
    </header>
    <div class="container">
      <div class="grid">
       <div class="grid__row">
        <div class="menu">
            <LeftMenu/>
        </div>
        <div class="main">
          <Home/>
        </div>
      </div>
      </div>
    </div>
    <footer class="footer">
        <div class="grid">
            <Footer/>
        </div>
    </footer>
  </div>
</template>
<style>
 @import './assets/scss/container.scss';
 </style>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import LeftMenu from './components/LeftMenu.vue'
export default {
  components: {   
    Header,Footer,Home,LeftMenu
  },  
};
</script>

