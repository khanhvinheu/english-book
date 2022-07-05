<template>
    <div class="main__home">      
        <div class="main__slide">
            <SlideBarComponent :data="slide"/>
        </div>
        <el-divider content-position="left">
            <span class="course__title">What is Lorem Ipsum? <el-button type="primary" size="small" round>New</el-button></span>
        </el-divider>
        <div class="cards">
            <CardItemComponent :data="course"/>
        </div>
        <el-divider content-position="left">
            <span class="course__title">What is Lorem Ipsum? <el-button type="success" size="small" round>New</el-button></span>
        </el-divider>
     
    </div>
</template>
<script>
    import SlideBarComponent from "../Common/SlideBarComponent.vue";
    import CardItemComponent from "../Common/CardItemComponent.vue";
    export default {
        components: {
            SlideBarComponent,CardItemComponent
        },
        mounted() {        
           
        },
        data() {
            return {   
                imgNotFound:'https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png',            
                slide: [
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
                        color: '#ffffff',
                        titleButton: 'Register Now',
                        img: './img/baner1.png'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
                        color: '#ffffff',
                        titleButton: 'Register Now',
                        img: './img/baner2.png'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
                        color: '#ffffff',
                        titleButton: 'Register Now',
                        img: './img/baner3.png'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
                        color: '#ffffff',
                        titleButton: 'Register Now',
                        img: './img/banner_4.png'
                    }
                ],
                course: [
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                       
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                     
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                      
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                       
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                       
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                       
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                       
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },
                    {
                        title: 'What is Lorem Ipsum?',
                        background: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',                       
                        color: '#ffffff',
                        titleButton: 'Register Now'
                    },

                ]
            }
        }
    }
</script>

