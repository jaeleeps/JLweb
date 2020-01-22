<template>
  <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>


    <v-toolbar-title>
      <v-btn text href="#home-page" target="_self">
        <span class="font-weight-light">Jaeyoung</span>
        <span>Lee</span>
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-lg-block">
      <v-btn href="#home-page" target="_self" text>
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        <span
          class="mr-2"
          :class="`${this.$store.state.isIntersectingHome ? 'active-btn' : 'deactive-btn'}`"
        >main</span>
      </v-btn>
      <v-btn href="#about-page" target="_self" text>
        <span
          class="mr-2"
          :class="`${this.$store.state.isIntersectingAbout ? 'active-btn' : 'deactive-btn'}`"
        >about</span>
        <!-- <span v-if="this.$store.state.isIntersectingAbout">asdf</span> -->
      </v-btn>

      <v-btn href="#projects-page" target="_self" text>
        <!-- <v-icon>mdi-heart</v-icon> -->
        <span
          class="mr-2"
          :class="`${this.$store.state.isIntersectingProjects ? 'active-btn' : 'deactive-btn'}`"
        >projects</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    collapseOnScroll: true,
    activeColor: "red"
  }),
  methods: {
    toggleDrawer() {
      this.$store.state.drawer = !this.$store.state.drawer;
      console.log("hi");
    }
  }
};
</script>

<style scoped>
.active-btn {
  /* font-size: 1.00005rem; */
  /* font-style: bold; */
  color: #212121;
}

.deactive-btn {
  font-style: bold;
  color: #757575;
}
</style>