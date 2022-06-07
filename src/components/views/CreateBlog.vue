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
          <div class="title__blog box-shadow">
              <h2>TẠO MỚI BÀI VIẾT</h2>
          </div>    

          <el-form label-position="top" label-width="120px" class="title__blog box-shadow">
            <el-form-item label="Tiêu đề bài viết">
                <el-input  />
            </el-form-item>
            <el-form-item label="Danh mục">
                <el-input  />
            </el-form-item>
            <el-form-item label="Chủ để">
                <el-input  />
            </el-form-item>
            <el-form-item label="Nội dung">
                <Editor width="100%"/>
            </el-form-item>
           
            <el-form-item>
                <el-button type="primary">Tạo mới bài viết</el-button>
                <el-button>Thoát</el-button>
            </el-form-item>
        </el-form>
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