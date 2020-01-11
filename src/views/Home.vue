// https://www.awwwards.com/websites/portfolio/

<template>
  <div id="app" class="back" v-on:mousemove="someMethod">
    <div class="black-overlay" id="top-image" v-bind:style="{ backgroundPosition: `${getPos()}`}"></div>
    <v-app id="inspire">
      <!-- <div class="text-wrapper"></div> -->
      <!-- <v-container fluid>
        <v-layout>
        </v-layout>
      </v-container>-->
      <!-- <div class="right-bottom"></div> -->
    </v-app>
  </div>
</template>

<style scoped>
.text-wrapper {
  color: #fff;
  background-color: #fff;
  position: absolute;
  height: 100vh;
  width: 480px;
}

.right-bottom {
  background-color: red;
  width:100px;
  height: 100px;
  position: absolute;
  right:2rem;
  bottom:2rem;
}

@import url(//db.onlinewebfonts.com/c/0f0decca41e57850880853f5b0749821?family=Druk+Wide+Cy+TT+Medium);
@import url(//db.onlinewebfonts.com/c/b41aa5b33e88bbfbbba326f4ccd4ef3f?family=Optima-Thin);
#top-image {
  background: url("https://images.unsplash.com/photo-1542831371-32f555c86880?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80") -25px -50px;
  /* background-size: cover; */
  /* position: fixed; */
  top: 0;
  width: 100vw;
  z-index: 0;
  height: 100vh;
  background-size: calc(120% + 200px);
}

.black-overlay:before {
  position: absolute;
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
  max-width: 100vw;
  max-height: 100vh;
}
#inspire {
  /* background-color: #D1D2D4; */
  background: none;
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