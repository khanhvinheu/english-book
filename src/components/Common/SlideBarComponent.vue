<template>
        <el-carousel height="250px">
            <el-carousel-item v-for="item in data" v-bind:style="{ 'background': item.background,'border-radius':'10px'}">
                <div class="content__slide-home">
                    <div class="contain-slide">
                        <h3 class="title__course" :style="{'color':item.color,'font-size':'20px'}">{{item.title}}</h3>
                        <button id="register-KH">{{item.titleButton}}</button>
                    </div>
                    <div class="imgage__slide">
                        <img :src="item.img" width="550" alt="" srcset="">
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
<!--    <Carousel>-->
<!--        <Slide v-for="item in data"-->
<!--               v-bind:style="{ 'background': item.background,'border-radius':'10px', 'height':'250px'}" :key="slide">-->
<!--            <div class="content__slide-home">-->
<!--                <div class="contain-slide">-->
<!--                    <h3 class="title__course" :style="{'color':item.color,'font-size':'20px'}">{{item.title}}</h3>-->
<!--                    <button id="register-KH">{{item.titleButton}}</button>-->
<!--                </div>-->
<!--                <div class="imgage__slide">-->
<!--                    <img :src="item.img" width="550" alt="" srcset="">-->
<!--                </div>-->
<!--            </div>-->

<!--        </Slide>-->

<!--        <template #addons>-->
<!--            <Navigation/>-->
<!--            <Pagination/>-->
<!--        </template>-->
<!--    </Carousel>-->
</template>
<script>
    import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel';
    import 'vue3-carousel/dist/carousel.css';

    export default {
        name: "SlideBarComponent",
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation
        },
        props: {
            data: []
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    @import '../../assets/scss/slidebar.scss';
</style>