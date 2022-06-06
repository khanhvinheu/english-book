<template>
    <div>
    <el-skeleton     
      :loading="loading"
      animated

    >
      <template #template>
        <el-skeleton-item variant="h3" style="width: 20%; height: 40px;" />          
        <el-skeleton-item variant="text" style="width: 100%; height: 40px;" />
        <el-skeleton-item variant="text" style="width: 100%; height: 40px;" />
        <el-skeleton-item variant="text" style="width: 100%; height: 40px;" />
        <el-skeleton-item variant="text" style="width:100%; height: 440px" />
      </template>
      <template #default>
          <div v-show="!loading">
            <h1>Tạo mới bài viết</h1>  
            <div class="title__blog box-shadow">
                <el-input></el-input>
            </div>
            <div class="title__blog box-shadow">
                <el-input></el-input>
            </div>
            <div class="title__blog box-shadow">
                <el-input></el-input>
            </div>
        
            <div class="box-shadow">
                <Editor/>
            </div>              
          </div>
      </template>
    </el-skeleton>   
      
    </div>
</template>
<script>
    import Editor from '../Tinymce/index.vue'
    export default{
        name:'CreateBlog',
        components:{
            Editor
        },
        data(){
            return{
                loading:false
            }
        },
        created(){
            this.loading = true
            setTimeout(()=>{
                this.loading= false
            },1500)
        }
    }
</script>