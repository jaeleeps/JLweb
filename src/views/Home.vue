// https://www.awwwards.com/websites/portfolio/

<template>
  <div id="container">
    <div id="content">
      <div class="upper name_txt">
        <span style="font-weight:200;">
          Jaeyoung
          <span style="font-weight:400;">Lee</span>
        </span>
      </div>
      <div class="typeani-wrapper">
        <!-- <span style="color: #212121;">hi</span> -->
        <TypeAnimation />
      </div>
      <div class="intro_txt">
        <v-icon>mdi-format-quote-open</v-icon>
        I'm Jaeyoung Lee, 
        <v-icon>mdi-format-quote-close</v-icon>
      </div>
      <div>
        <v-img
          class="mt-n10"
          style="margin:0 auto;"
          :src="require('@/assets/main_img01.png')"
          eager
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? `90vw` : `60vw`"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  margin: 0;
  padding: 0;
  color: white;
  /* background: #d2b49b; */
  background: url('https://images.unsplash.com/photo-1566702580807-95611c919b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80');
  background-size: cover;
  background-position: center;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content {
  /* background: #06c; */
  /* flex: 0 0 120px; */
  margin: 0 auto;
  padding: 0;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 100;
}

.typeani_wrapper {
  color: #212121;
}

.intro_txt {
  color: #212121;
  font-size: 0.9rem;
}

.name_txt {
  font-size: 2rem;
  letter-spacing: 5px;
}

.upper {
  text-transform: uppercase;
}
</style>


<script>
// @ is an alias to /src
import MainCarousel from "@/components/MainCarousel";
import WindowFooter from "@/components/WindowFooter";
import TypeAnimation from "@/components/TypeAnimation";

window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "home",
  components: {
    MainCarousel,
    WindowFooter,
    TypeAnimation
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