<template>
  <div id="app"  class="back">
    <v-app id="inspire">
      <!-- <v-container> -->
        <v-layout>
          <v-row>
            <v-flex 
              xs12 md7
            >
              <div class="main-text">
                <p class="intro">
                  <span class="outline-font">Jaeyoung Lee,</span>
                  <span>Sofrware Engineer</span>
                  <span>in Seoul.</span>
                </p>
              </div>
            </v-flex>
            <v-flex xs0 md1 />
            <v-flex xs12 md4>
              <div class="btn-area">
                <p class="link-para">
                  <span>
                    <v-btn class="ma-0" block outlined color="grey darken-4">ABOUT</v-btn>
                  </span>
                  <span>
                    <v-btn class="ma-0" block outlined color="grey darken-4">PROJECTS</v-btn>
                  </span>
                  <span>
                    <v-btn class="ma-" block outlined color="grey darken-4">DESIGN</v-btn>
                  </span>                            
                  <span
                    margin-top="-8px"
                    class="icon-btn-span" 
                    flex
                    justify-items="center">
                    <!-- <v-btn class="ma-2" outlined fab small color="grey darken-4">
                      <v-icon >mdi-github-circle</v-icon>
                    </v-btn> -->
                    <v-btn class="ma-2" outlined fab small color="grey darken-4">
                      <v-icon >mdi-github-circle</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" outlined fab small color="grey darken-4">
                      <v-icon >mdi-npm-variant-outline</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" outlined fab small color="grey darken-4">
                      <v-icon >mdi-linkedin</v-icon>
                    </v-btn>                                  
                  </span>        
                </p>
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
  justify-content: flex-end; /* align horizontal */
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

.btn-area {
  height: 100%;
  display: flex;
  justify-content: flex-start; /* align horizontal */
  align-items: center; /* align vertical */
}

.link-para {
  /* width: 33%; */
}

.link-para span 
{
  /* font-family: Druk Wide Cy TT Medium; */
  display: block;
  margin-bottom: 12px;
}

.link-para .icon-btn-span {

}



</style>
