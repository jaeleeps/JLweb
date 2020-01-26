// https://www.awwwards.com/websites/portfolio/

<template>
  <div id="container">
    <div id="content">
      <div class="upper name_txt ma-3">
        <span style="font-weight:200; border-bottom: 1px solid #757575; padding-bottom: 5px;">
          Jaeyoung
          <span style="font-weight:400;">Lee</span>
        </span>
        <TypeAnimation />
      </div>
      <div class="text-center">
        <v-chip
          :small="$vuetify.breakpoint.xsOnly"
          v-for="(tag, i) in etc"
          :key="i"
          class="ma-1 upper"
          style="font-size: 0.7rem; letter-spacing: 1px;"
        >
          <v-icon :x-small="$vuetify.breakpoint.xsOnly" left :color="tag.color">{{tag.icon}}</v-icon>
          {{tag.title}}
        </v-chip>
      </div>
      <div
        class="intro_txt pl-10 pr-10 mb-n10"
        :style=" $vuetify.breakpoint.xsOnly ? `max-width: 100vw; margin-bottom: 10rem;`: `max-width: 50vw;` "
      >
        <v-icon class="mb-7" v-if="!$vuetify.breakpoint.xsOnly">mdi-format-quote-open</v-icon>
          Welcome to my personal website!
        <v-icon class="mb-7" v-if="!$vuetify.breakpoint.xsOnly">mdi-format-quote-close</v-icon>
      </div>
      <div :class=" $vuetify.breakpoint.xsOnly ? `mt-10` : ``">
        <v-img
          class="mt-n10"
          style="margin:0 auto;"
          :src="require('@/assets/main_img01.png')"
          eager
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? `95vw` : `60vw`"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

#container {
  margin: 0;
  padding: 0;
  color: white;
  /* background: #d2b49b; */
  background: url("https://images.unsplash.com/photo-1566702580807-95611c919b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80");
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

.intro_txt {
  font-family: 'Pacifico', cursive;
  color: #212121;
  font-size: 1.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
}

.name_txt {
  font-size: 2rem;
  letter-spacing: 5px;
  background: #212121;
  padding: 0.75rem;
  justify-content: center;
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
    yPos: 0,
    etc: [
      {
        title: "Programming",
        color: "#4c75a3",
        icon: "mdi-account-group",
        rating: ""
      },
      {
        title: "Algorithm",
        color: "#4c75a3",
        icon: "mdi-voice",
        rating: ""
      },
      {
        title: "Design",
        color: "#4c75a3",
        icon: "mdi-party-popper",
        rating: ""
      }
    ]
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