<template>
    <div class="main__home">
      <div class="main__slide">
          <el-carousel height="250px">
            <el-carousel-item v-for="item in slide" v-bind:style="{ 'background': item.background,'border-radius':'10px'}">
                <div class="contain-slide">
                  <h3 class="title__course" :style="{'color':item.color,'font-size':'20px'}">{{item.title}}</h3>
                  <button id="register-KH">{{item.titleButton}}</button>
                </div>
            </el-carousel-item>
          </el-carousel>  
      </div>     
        <el-divider content-position="left">
          
        <span class="course__title">Các khóa học tiếng anh cơ bản <el-button type="primary" size="small" round>New</el-button></span>    
        </el-divider>
         <div class="cards">  
           <template v-for="item in course" :key="item">        
            <div class="card">
                <img :src="item.background" alt="" class="card-image">
                <div class="card-content">
                    <div class="card-top">
                    <h3 class="card-title">{{item.title}}</h3>
                    <div class="card-user">
                        <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" class="card-user-avatar">
                        <div class="card-user-info">
                            <div class="card-user-top">
                                <h4 class="card-user-name">Khanh Vinh</h4>
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                            <div class="card-user-game">Dev web</div>
                            
                        </div>
                    </div>
                  </div>
                    <div class="card-bottom">
                        <div class="card-live">
                            <ion-icon name="wifi"></ion-icon>
                            <span>Live</span>
                        </div>
                        <div class="card-watching">4.2k watching</div>
                    </div>
                </div>
            </div>
            </template> 
       </div>
    </div>
</template>
<script>

export default { 
    data(){
    return {
      input1:'',
      slide:[
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,193,148,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,49,193,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,193,148,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Khóa học tiếng anh giao tiếp cơ bản',
          background:'linear-gradient(90deg, rgba(2,0,36,0.6306897759103641) 0%, rgba(12,49,193,1) 35%, rgba(0,255,184,1) 100%)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        }      
      ],
      course:[
        {
          title:'Kiến thức nền tảng',
          background:'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Luyện nghe tiếng anh',
          background:'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Luyện đọc',
          background:'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Luyện đọc',
          background:'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Bài tập cơ bản luyện tập ',
          background:'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        }      
      ]
    }
  }
}
</script>