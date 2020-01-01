<template>
  <v-app class="grey lighten-4">
    <v-card class="overflow-hidden">
      <NavBar />
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <v-container style="height: 100vh;">
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
