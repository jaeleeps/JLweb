<template>
  <v-app class="grey lighten-4 wrapper">
    <v-card 
      class="overflow-hidden"
      style="position: relative;">
      <NavBar v-if="this.$route.name != `home`"/>
      <TransparentNavBar v-if="this.$route.name == `home`"/>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="100vh"
        style="margin: 0 auto;"
      >
        <v-container fluid style="height: 100vh; width: 100%; padding: 0px; ">
          <v-spacer v-if="this.$route.name != `home`" style="height:48px;"></v-spacer>
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>
    <NavDrawer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import TransparentNavBar from '@/components/TransparentNavBar'
import NavDrawer from '@/components/NavDrawer.vue'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    TransparentNavBar,
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
.wrapper {
  max-width: 100vw;
  max-height: 100vh;
}
</style>
