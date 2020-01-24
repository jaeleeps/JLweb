<template>
  <div class="back">
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center pb-10>
          <v-flex shrink xs11 md10>
            <v-row>
              <span class="cat_title">About</span>
            </v-row>

            <v-row>
              <span class="cat_subtitle">About & Contacts</span>
            </v-row>

            <v-row>

            </v-row>

            <v-row class="mb-2 cat_subsubtitle" style="text-align: center;" justify="center">
              <span style="font-size: 0.75rem;"> click to know more about me </span>
            </v-row>
            <v-row class="mb-2" style="text-align: center;" justify="center">
              <DownArrow />
            </v-row>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
  /* width: 100vw;
  min-height: 100vh; */
  background-color: #EFEBE9;
}
</style>