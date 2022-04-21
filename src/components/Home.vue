<template>
    <div class="main__home">
        <div class="main__slide">
            <SlideBarComponent :data="slide"/>
        </div>
        <el-divider content-position="left">
            <span class="course__title">Các khóa học tiếng anh cơ bản <el-button type="primary" size="small" round>Mới</el-button></span>
        </el-divider>
        <div class="cards">
            <CardItemComponent :data="course"/>
        </div>
        <el-divider content-position="left">
            <span class="course__title">Sách tiếng anh mới nhất <el-button type="success" size="small" round>Mới</el-button></span>
        </el-divider>
        <div class="main__slide">

        </div>
    </div>

</template>
<script>
    import SlideBarComponent from "./Common/SlideBarComponent.vue";
    import CardItemComponent from "./Common/CardItemComponent.vue";
    export default {
        components: {
            SlideBarComponent,CardItemComponent
        },
        data() {
            return {
                slide: [
                    {
                        title: 'Khóa học tiếng anh giao tiếp cơ bản',
                        background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay',
                        img: './img/baner1.png'
                    },
                    {
                        title: 'Khóa học tiếng anh giao tiếp cơ bản',
                        background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay',
                        img: './img/baner2.png'
                    },
                    {
                        title: 'Khóa học tiếng anh giao tiếp cơ bản',
                        background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay',
                        img: './img/baner3.png'
                    },
                    {
                        title: 'Khóa học tiếng anh giao tiếp cơ bản',
                        background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay',
                        img: './img/banner_4.png'
                    }
                ],
                course: [
                    {
                        title: 'Kiến thức nền tảng',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay'
                    },
                    {
                        title: 'Luyện nghe tiếng anh',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay'
                    },
                    {
                        title: 'Luyện đọc',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay'
                    },
                    {
                        title: 'Luyện đọc',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
                        color: '#ffffff',
                        titleButton: 'Đăng ký ngay'
                    },

                ]
            }
        }
    }
</script>