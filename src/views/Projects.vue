<template>
  <div class="back">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs0 md2 />
        <v-flex xs12 md8>
          <MainCarousel />

          <v-spacer />

          <MainCarousel />
        </v-flex>
        <v-flex xs0 md2 />
      </v-layout>

      <v-row justify-center>
        <v-flex xs12 md2>
          <ProjectCard />
        </v-flex>
        <v-flex xs12 md2>
          <ProjectCard />
        </v-flex>
        <v-flex xs12 md2>
          <ProjectCard />
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MainCarousel from "@/components/MainCarousel";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    MainCarousel,
    ProjectCard
  }
};
</script>

<style scoped>
.back{
  width: 100vw;
  min-height: 100vh;
  background-color: gray;
}
</style>