<template>
  <div class="back">
    <v-container fill-height fluid justify-center align-center>
      <v-layout justify-center align-center>
        <v-row align="center" justify="center">
          <v-flex shrink xs11 md8 justify-center>
            <div class="cat_title">Projects</div>
            <ProjectCard />
            <v-sheet
              class="tbu-text"
              justify-center
              color="transparent"
              style="text-align: center; margin-top:3rem; display: block;"
            >
              <span>
                <v-progress-circular :size="50" color="white" indeterminate />
              </span>
              <span>More projects will be updated soon!</span>
            </v-sheet>
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
.cat_title {
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 1rem;
  color: white;
}

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

.tbu-text {
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: white;
}

.tbu-text > span {
  display: block;
  margin-top: 3rem;
}
</style>

