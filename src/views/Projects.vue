<template>
  <div class="back">
    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex shrink xs11 md8>
          <span class="title">Projects</span>
          <ProjectCard />
        </v-flex>
      </v-layout>
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
.back {
  width: 100vw;
  min-height: 100vh;
  background-color: #d2b29b;
}

.title {
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 0px;
}
</style>