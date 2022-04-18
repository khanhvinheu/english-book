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
      <div class="list__course">
        <template v-for="item in course" :key="item">
          <div class="list__course-item">
            <div class="list__course-item-contain" v-bind:style="{ 'background-image': item.background,'border-radius':'10px'}">              
            </div>
            <div class="list__course-item-title">
                {{item.title}}
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
          background:'url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Luyện nghe tiếng anh',
          background:'url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Luyện đọc',
          background:'url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        },
        {
          title:'Bài tập cơ bản luyện tập ',
          background:'url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)',
          color:'#ffffff',
          titleButton:'Đăng ký ngay'
        }      
      ]
    }
  }
}
</script>