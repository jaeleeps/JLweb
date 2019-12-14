<template>
  <div id="app"  class="back">
    <v-app id="inspire">


      <!-- <WindowFooter /> -->
      
    </v-app>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MainCarousel from '@/components/MainCarousel'
import WindowFooter from '@/components/WindowFooter'

export default {
  name: 'home',
  components: {
    MainCarousel,
    WindowFooter
  }
}
</script>

<style scoped>
.back {
  /* background-image: url(https://c.wallhere.com/photos/7c/94/Windows_XP_Microsoft_Windows_hills-33549.jpg!d); */
  background-color: #D1D2D4;
  /* background-size: cover; */
  /* background-position: center; */
}
#inspire {
  /* background-color: #D1D2D4; */
  background: none;
}
</style>
