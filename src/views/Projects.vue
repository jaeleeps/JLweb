<template>
  <div class="back" :class="$vuetify.breakpoint.xsOnly ? `back pa-5` : `back`">
    <v-container fill-height fluid justify-center align-center>
      <v-layout justify-center align-center>
        <v-row align="center" justify="center">
          <v-flex shrink xs11 md8 justify-center class="pt-10">
            <div class="cat_title">Projects</div>
            <ProjectCard />

            <v-sheet
              color="transparent"
              class="px-3 pt-3 pb-n10"
            >
              <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
            </v-sheet>
            <v-sheet
              class="tbu-text"
              justify-center
              color="transparent"
              style="text-align: center; margin-bottom:3rem; display: block;"
            >
              <!-- <span>
                <v-progress-circular :size="50" color="white" indeterminate />
              </span> -->
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
  /* background: rgb(255, 255, 255); */
  /* background: linear-gradient(to top,
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(210, 178, 155, 1) 3%,
    rgba(210, 178, 155, 1) 97%,
    rgba(255, 255, 255, 0) 100%
  ); */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.tbu-text {
  font-size: 1.25rem;
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

