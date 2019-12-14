<template>
  <div id="app"  class="back">
    <v-app id="inspire">
      <!-- <v-container> -->
        <v-layout>
          <v-row>
            <v-flex 
              xs12 md10
              
            >
              <div class="main-text">
                <p class="intro">
                  <span class="outline-font">Jaeyoung Lee,</span>
                  <span>Sofrware Engineer</span>
                  <span>in Seoul.</span>
                </p>
              </div>
            </v-flex>
            <v-flex xs12 md2>
              <div class="main-text">
                <p>Jaeyoung Lee,</p>
                <p>Jaeyoung Lee,</p>
                <p>Jaeyoung Lee,</p>
              </div>
            </v-flex>
          </v-row>
        </v-layout>

      <!-- </v-container> -->
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
@import url(//db.onlinewebfonts.com/c/0f0decca41e57850880853f5b0749821?family=Druk+Wide+Cy+TT+Medium);
@import url(//db.onlinewebfonts.com/c/b41aa5b33e88bbfbbba326f4ccd4ef3f?family=Optima-Thin);

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

.main-text {
  height: 100%;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
}

.intro span 
{
  /* font-family: Druk Wide Cy TT Medium; */
  font-family: Optima Thin;
  font-size: 4rem;
  display: block;
}

.outline-font {
    /* color: #D1D2D4;
    text-shadow: #000 0px 0px 1.5px; */
    -webkit-font-smoothing: antialiased;
}
</style>
