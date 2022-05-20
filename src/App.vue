<template>
  <div id="app">
    <Transition duration="750" name="slide-fade">
    <router-view/>
    </Transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
@import './assets/scss/transitionVue.scss';
</style>
