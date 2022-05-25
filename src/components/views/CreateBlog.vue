<template>
    <div>
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
<script>
    import Editor from '../Tinymce/index.vue'
    export default{
        name:'CreateBlog',
        components:{
            Editor
        }
    }
</script>