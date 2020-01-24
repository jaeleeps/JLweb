<template>
  <div class="back">
    <v-container fluid justify-center align-center>
      <v-layout justify-center align-center>
        <v-row align="center" justify="center">
          <v-flex shrink xs11 md8>
            <span class="title">Projects</span>
            <ProjectCard />
          </v-flex>
        </v-row>
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
  height: 100%;
  min-height: 100vh;
  background-color: #d2b29b;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 0px;
}
</style>