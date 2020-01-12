<template>
  <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
    <v-app-bar-nav-icon @click.stop="toggleDrawer">
    </v-app-bar-nav-icon>
    
    <v-toolbar-title>
      <v-btn flat href="#home-page" target="_self" text>
        <span class="font-weight-light">Jaeyoung</span>
        <span>Lee</span>
      </v-btn>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>

    <div class="d-none d-lg-block">
      <v-btn href="#about-page" target="_self" text :class="`${this.$store.state.isIntersectingAbout}` && `light`">
        <!-- <v-icon>mdi-magnify</v-icon> -->
        <!-- <span :class="`mr-2`+ `${this.$store.state.isIntersectingAbout}` && `active`" >about</span> -->
        <span class="mr-2">about</span>
        <!-- <span v-if="this.$store.state.isIntersectingAbout">asdf</span> -->
      </v-btn>

      <v-btn href="#projects-page" target="_self" text>
        <!-- <v-icon>mdi-heart</v-icon> -->
        <span class="mr-2">projects</span>
        <span v-if="this.$store.state.isIntersectingProjects">asdf</span>
      </v-btn>

      <v-btn href="#about-page" target="_self" text>
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        <span class="mr-2">Design</span>
        <span v-if="this.$store.state.isIntersectingAbout">asdf</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    collapseOnScroll: true
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

}
</style>