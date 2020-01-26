// https://www.awwwards.com/websites/portfolio/

<template>
  <div class="back" v-on:mousemove="someMethod">
    <div class="black-overlay" id="top-image" v-bind:style="{ backgroundPosition: `${getPos()}`}"></div>
    <v-app id="inspire">
      <v-container fluid align-center>
        <v-layout column align-center>
          <v-flex class="ma-10 main_txt" style="margin-top:10rem; text-align:center;">
            <span class="title_name">Jaeyoung Lee</span>
          </v-flex>
          <v-flex class="ma-10 main_txt" style="text-align:center;">
            <span>Jaeyoung Lee</span>
          </v-flex>
          <div style="text-align:center; margin: auto;">
            <v-img
              class="ma-1 ml-8"
              :src="require('@/assets/main_img01.png')"
              eager
              contain
              :max-width="$vuetify.breakpoint.xsOnly ? `100vw` : `60vw`"
            ></v-img>
          </div>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<style scoped>
.main_txt > span {
  /* font-family: Druk Wide Cy TT Medium; */
  /* font-family: Optima; */
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 2px;
  display: block;
  width: 100%;
}

.main_txt > .title_name {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 2rem;
  width: 100%;
}

.text-wrapper {
  color: #fff;
  background-color: #fff;
  position: absolute;
  height: 100vh;
  width: 480px;
}

@import url(//db.onlinewebfonts.com/c/0f0decca41e57850880853f5b0749821?family=Druk+Wide+Cy+TT+Medium);
@import url(//db.onlinewebfonts.com/c/b41aa5b33e88bbfbbba326f4ccd4ef3f?family=Optima-Thin);
/* #top-image {
  background: url("https://images.unsplash.com/photo-1542831371-32f555c86880?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80") -25px -50px;
  top: 0;
  width: 100vw;
  z-index: 0;
  height: 100vh;
  background-size: calc(100vh + 200px);
} */

.black-overlay:before {
  /* position: absolute; */
  content: " ";
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.back {
  /* background-image: url(https://c.wallhere.com/photos/7c/94/Windows_XP_Microsoft_Windows_hills-33549.jpg!d); */
  /* background-color: #131313; */
  /* background-size: cover; */
  /* background-position: center; */

  background-color: #d2b49b;
  max-width: 100vw;
  max-height: 100vh;
}
#inspire {
  background-color: #d2b49b;
  align-items: center;
  justify-content: center;
}
</style>


<script>
// @ is an alias to /src
import MainCarousel from "@/components/MainCarousel";
import WindowFooter from "@/components/WindowFooter";

window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "home",
  components: {
    MainCarousel,
    WindowFooter
  },
  data: () => ({
    xPos: 0,
    yPos: 0
  }),
  methods: {
    someMethod: function(event) {
      var x = event.pageX;
      var y = event.pageY;
      // console.log(x, y);

      var movementStrength = 25;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();

      var pageX = event.pageX - $(window).width() / 2;
      var pageY = event.pageY - $(window).height() / 2;
      this.xPos = width * pageX * -1 - 25;
      this.yPos = height * pageY * -1 - 50;
    },
    getPos: function(x) {
      // console.log(`${this.xPos}px ${this.yPos}px`)
      // console.log(this.$route.name);
      return `${this.xPos}px ${this.yPos}px`;
    }
  }
};
</script>