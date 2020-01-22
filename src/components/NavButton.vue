<template>
  <div class="nav-btn-wrapper">
    <span>
      <v-btn color="secondary" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingHome" :small="this.$store.state.isIntersectingHome"
        @click="handleBtnClick"
      >
        <!-- <v-icon>mdi-television</v-icon> -->
      </v-btn>
    </span>
    <span>
      <v-btn color="secondary" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingAbout" :small="this.$store.state.isIntersectingAbout"
        @click="handleBtnClick"
      >
        <!-- <v-icon>mdi-television</v-icon> -->
      </v-btn>
    </span>
    <span>
      <v-btn color="secondary" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingProjects" :small="this.$store.state.isIntersectingProjects"
        @click="handleBtnClick"
      >
        <!-- <v-icon>mdi-television</v-icon> -->
      </v-btn>
    </span>
    <span>
      <v-btn color="secondary" fab :dark="true"
        :x-small="!this.$store.state.isIntersectingDesign" :small="this.$store.state.isIntersectingDesign"
        @click="handleBtnClick"
      >
        <!-- <v-icon>mdi-television</v-icon> -->
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
  right: 0;
  color: red;
}

.nav-btn-wrapper > span {
  display: block;
  margin: 1rem;
  text-align: center;
}
</style>