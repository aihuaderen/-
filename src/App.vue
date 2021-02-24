<template>
  <div>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style scoped>

</style>
