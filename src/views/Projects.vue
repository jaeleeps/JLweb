<template>
  <div class="back">
    <v-container fluid>
      <ProjectCard />
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
  background-color: gray;
}
</style>