<template>
  <v-app>
    <v-card>
      <NavBar />
      <v-sheet 
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        height="100vh"
        >
        <div
          id="home-page"
          class="component-wrapper"
          v-intersect="{
          handler: onIntersectHome,
          options: {
            threshold: [0, 0.001, 0.5, 0.999, 1.0]
          }
        }"
        >
          <Home />
        </div>
        <div
          id="about-page"
          class="component-wrapper"
          v-intersect="{
          handler: onIntersectAbout,
          options: {
            threshold: [0, 0.0000000001, 0.001, 0.5, 0.999, 0.99999999999, 1.0]
          }
        }"
        >
          <About />
        </div>
        <div
          id="projects-page"
          class="component-wrapper"
          v-intersect="{
            handler: onIntersectProjects,
            options: {
              threshold: [0, 0.001, 0.5, 0.999, 1.0]
            }
        }"
        >
          <Projects />
        </div>
      </v-sheet>
    </v-card>
    <NavDrawer />
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
    offsetTop: 0
  }),
  methods: {
    onScroll(e) {
      this.isUserScrolling = window.scrollY > 0;
      this.offsetTop = e.target.scrollTop;
      console.log(this.offsetTop);
    },
    onIntersectHome(entries, observer) {
      this.$store.state.isIntersectingHome =
        entries[0].isIntersecting && entries[0].intersectionRatio > 0.01;
      // console.log(
      //   this.$store.state.isIntersectingHome,
      //   entries[0].intersectionRatio,
      //   this.$store.state.isIntersectingAbout,
      //   this.$store.state.isIntersectingProjects
      // );
    },
    onIntersectAbout(entries, observer) {
      this.$store.state.isIntersectingAbout =
        entries[0].isIntersecting && entries[0].intersectionRatio > 0.01;
      // console.log(
      //   this.$store.state.isIntersectingHome,
      //   this.$store.state.isIntersectingAbout,
      //   entries[0].intersectionRatio,
      //   this.$store.state.isIntersectingProjects
      // );
    },
    onIntersectProjects(entries, observer) {
      this.$store.state.isIntersectingProjects =
        entries[0].isIntersecting && entries[0].intersectionRatio > 0.01;
      // console.log(
      //   // entries[0],
      //   this.$store.state.isIntersectingHome,
      //   this.$store.state.isIntersectingAbout,
      //   this.$store.state.isIntersectingProjects,
      //   entries[0].intersectionRatio
      // );
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

.component-wrapper {
  width: 100vw;
}
</style>
