<template>
  <div id="app" class="back" v-on:mousemove="someMethod">
    <div id="top-image" v-bind:style="{ backgroundPosition: `${getPos()}`}"></div>
    <v-app id="inspire">
      <!-- <v-container> -->
        <v-layout>
          <v-row>
            
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

window.$ = require('jquery')
window.JQuery = require('jquery')

export default {
  name: 'home',
  components: {
    MainCarousel,
    WindowFooter
  },
  data: () => ({
    xPos: 0,
    yPos: 0,
  }),
  methods: {
    someMethod: function (event) {
      var x = event.pageX;
      var y = event.pageY;
      // console.log(x, y);

      var movementStrength = 25;
      var height = movementStrength / $(window).height();
      var width = movementStrength / $(window).width();
      
      var pageX = event.pageX - ($(window).width() / 2);
      var pageY = event.pageY - ($(window).height() / 2);
      this.xPos = width * pageX * -1 - 25;
      this.yPos = height * pageY * -1 - 50;
    },
    getPos: function (x) {
      // console.log(`${this.xPos}px ${this.yPos}px`)
      return `${this.xPos}px ${this.yPos}px`
    }
  }
}
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/0f0decca41e57850880853f5b0749821?family=Druk+Wide+Cy+TT+Medium);
@import url(//db.onlinewebfonts.com/c/b41aa5b33e88bbfbbba326f4ccd4ef3f?family=Optima-Thin);
#top-image {
  background:url('https://images.unsplash.com/photo-1542831371-32f555c86880?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') -25px -50px;
  position:fixed ;
  top:0;
  width:100%;
  z-index:0;
    height:100%;
    background-size: calc(100% + 50px);
}

.back {
  background-image: url(https://c.wallhere.com/photos/7c/94/Windows_XP_Microsoft_Windows_hills-33549.jpg!d);
  /* background-color: #131313; */
  background-size: cover;
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
