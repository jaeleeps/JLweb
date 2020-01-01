<template>
  <v-app class="grey lighten-4">
    <v-card 
      class="overflow-hidden"
      style="position: relative;">
      <NavBar />
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="100vh"
        style="margin: 0 auto;"
      >
        <v-container fluid style="height: 100vh; width: 100%; padding: 0px; ">
          <v-spacer style="height:48px;"></v-spacer>
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>
    <NavDrawer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import NavDrawer from '@/components/NavDrawer.vue'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    NavDrawer
  },
  data: () => ({
    // drawer: null,
  }),
  methods: {
    toggleDrawer() {
      this.$store.state.drawer = !this.$store.state.drawer;
    }
  }
};
</script>

<style scoped>

</style>
