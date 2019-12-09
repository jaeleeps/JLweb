<template>
  <div id="app"  class="back">
    <v-app id="inspire">
      <v-container class="my-5">
        <v-layout row>
          <v-flex xs12 md6>
            <v-btn  block class="primary">1</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn  block class="primary">2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn  block class="primary">2</v-btn>
          </v-flex>
          <v-flex xs4 md2>
            <v-btn  block class="primary">2</v-btn>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs6 md3>
            <v-btn  block class="success">1</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn  block class="success">2</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn  block class="success">2</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn  block class="success">2</v-btn>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs6 md3>
            <v-btn  block class="success">1</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn  block class="success">2</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn  block class="success">2</v-btn>
          </v-flex>
          <v-flex xs6 md3>
            <v-btn  block class="success">2</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <WindowFooter />
      
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
  background-image: url(https://c.wallhere.com/photos/7c/94/Windows_XP_Microsoft_Windows_hills-33549.jpg!d);
  background-size: cover;
  background-position: center;
}
#inspire {
  background: none;
}
</style>
