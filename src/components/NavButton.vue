<template>
  <div class="nav-btn-wrapper" :style="$vuetify.breakpoint.xsOnly ? 'right: 0rem;' : ``">
    <span>
      <v-btn color="#b39377" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingHome" :small="this.$store.state.isIntersectingHome"
        :color="this.$store.state.isIntersectingHome ? `#cfb997` : `#e0d0b9`"
        href="#home-page"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </span>
    <span>
      <v-btn color="#b39377" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingAbout" :small="this.$store.state.isIntersectingAbout"
        :color="this.$store.state.isIntersectingAbout ? `#cfb997` : `#e0d0b9`"
        href="#about-page"
      >
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </span>
    <span>
      <v-btn color="#b39377" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingProjects" :small="this.$store.state.isIntersectingProjects"
        :color="this.$store.state.isIntersectingProjects ? `#cfb997` : `#e0d0b9`"
        href="#projects-page"
      >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </span>
    <span>
      <v-btn color="#b39377" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingDesign" :small="this.$store.state.isIntersectingDesign"
        :color="this.$store.state.isIntersectingDesign ? `#cfb997` : `#e0d0b9`"
        href="#design-page"
      >
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    handleBtnClick() {
      console.log("hi");
    }
  }
};
</script>

<style scoped>
.nav-btn-wrapper {
  /* z-index: 1; */
  position: absolute;
  top: 45vh;
  right: 1rem;
  color: red;
}

.nav-btn-wrapper > span {
  display: block;
  margin: 1rem;
  text-align: center;
}
</style>