<template>
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

    <v-row>
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
</template>

<script>
import MainCarousel from '@/components/MainCarousel'
import ProjectCard from '@/components/ProjectCard'

export default {
    components: {
        MainCarousel,
        ProjectCard
    }
}
</script>

<style scoped>

</style>