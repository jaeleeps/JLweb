<template>
  <!-- <v-app class="grey lighten-4 wrapper">
    <v-card 
      class="overflow-hidden"
      style="position: relative;">
      <NavBar v-if="this.$route.name != `home`"/>
      <TransparentNavBar v-if="this.$route.name == `home`"/>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="200vh"
        style="margin: 0 auto;"
      >
        <v-container fluid style="height: 100vh; width: 100%; padding: 0px; ">
          <v-spacer v-if="this.$route.name != `home`" style="height:48px;"></v-spacer>
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>
    <NavDrawer/>
  </v-app>-->
  <v-app>
    <div
    id="scroll-target" 
    class="overflow-y-auto"
    v-scroll:#scroll-target="onScroll">
      <div class="component-wrapper">
        <Home />
      </div>
      <div class="component-wrapper">
        <About />
      </div>
      <div class="component-wrapper">
        <Projects />
      </div>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import TransparentNavBar from "@/components/TransparentNavBar";
import NavDrawer from "@/components/NavDrawer.vue";
import Footer from "@/components/Footer";

import Home from "@/views/Home";
import About from "@/views/About";
import Projects from "@/views/Projects";

export default {
  name: "App",
  components: {
    NavBar,
    TransparentNavBar,
    Footer,
    NavDrawer,
    Home,
    About,
    Projects
  },
  data: () => ({
    // drawer: null,
    offsetTop: 0
  }),
  methods: {
    onScroll(e) {
      this.isUserScrolling = window.scrollY > 0;
      this.offsetTop = e.target.scrollTop
      console.log(this.offsetTop);
    }
  }
};
</script>

<style scoped>
.scroll-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: red;
}

#scroll-target {
  width: 100vw;
  margin: 0 auto;
  padding: 0;
}

.component-wrapper {
  width: 100vw;
}
</style>
