// https://www.awwwards.com/websites/portfolio/

<template>
  <div>
    <v-container fluid fill-height class="mp-0">
      <v-layout class="main_contents_wrapper" flex align-center justify-center>
        <span>Jaeyoung Lee</span>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
div {
  max-width: 100vw;
  height: 100vh;
}
.main_contents_wrapper {
  text-align: center;
}

.main_contents_wrapper > span {
  /* font-family: Druk Wide Cy TT Medium; */
  /* font-family: Optima; */
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 2px;
  width: 100%;
}

.main_contents_wrapper > .title_name {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 2rem;
  width: 100%;
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