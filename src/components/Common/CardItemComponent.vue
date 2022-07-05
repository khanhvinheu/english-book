<template>
    <template v-for="item in data" :key="item">
        <div class="card">
            <img :src="item.background" alt="" class="card-image">
            <!-- <img :src="imgNotFound" alt="" class="card-image"> -->
            <div class="card-content">
                <div class="card-top">
                    <h3 class="card-title">{{item.title}}</h3>
                    <div class="card-user">
                        <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                             alt="" class="card-user-avatar">
                        <div class="card-user-info">
                            <div class="card-user-top">
                                <h4 class="card-user-name">Test dev</h4>
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
</template>

<script>
    export default {
        name: "CardItemComponent",
        props:{
            data:[]
        },
        data(){
            return {
                imgNotFound:'https://media.istockphoto.com/vectors/error-404-page-not-found-vector-id673101428?k=20&m=673101428&s=170667a&w=0&h=sifFCXQls5ygak3Y-II0cI1tibgQZVyPWzpLHtHKOGg=', 
            }
        }

    }
</script>

<style scoped>
    @import "../../assets/scss/card-item.scss";
</style>