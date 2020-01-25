// https://www.awwwards.com/websites/portfolio/

<template>
  <!-- <div class="back" v-on:mousemove="someMethod">
    <div class="black-overlay" id="top-image" v-bind:style="{ backgroundPosition: `${getPos()}`}"></div>
    <v-app></v-app>
  </div>-->
  <!-- <v-app id="inspire">
      <v-container fluid>
        <v-layout>
          <v-row style="text-align:center; color:black;">
            hifasdfasd
          </v-row>
        </v-layout>
      </v-container>
  </v-app>-->

  <div class="perspective overflow">
    <div class="preserve container">
      <div class="parallax" style="transform: translateZ(-1.2px)">z = -1.2</div>
      <div class="parallax" style="transform: translateZ(-1.0px)">z = -1.0</div>
      <div class="parallax" style="transform: translateZ(-0.8px)">z = -0.8</div>
      <div class="parallax" style="transform: translateZ(-0.6px)">z = -0.6</div>
      <div class="parallax" style="transform: translateZ(-0.4px)">z = -0.4</div>
      <div class="parallax" style="transform: translateZ(-0.2px)">z = -0.2</div>
      <div class="parallax" style="transform: translateZ(0px)">z = 0</div>
      <div class="spacer"></div>
    </div>
  </div>
</template>


<style scoped>
.overflow {
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
}

.perspective {
  perspective: 1px;
  perspective-origin: top left;
}

.preserve {
  transform-style: preserve-3d;
}

.parallax {
  position: absolute;
  top: 200px;
  margin-left: 250px;
  font-size: 24px;
}

.spacer {
  height: 100vh;
}

.sticky {
  position: sticky;
  position: -webkit-sticky;
}

.sticky {
  position: sticky;
  position: -webkit-sticky;
}

.main_parallax {
  min-height: 100vh;
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

#top-image {
}

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
  /* background-color: #D1D2D4; */
  /* background: none; */
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