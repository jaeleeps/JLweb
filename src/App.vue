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
          <v-btn
            color="pink"
            dark
            @click.stop="toggleDrawer"
          >
          TOGGLE
          </v-btn>
          <span> {{$store.state.drawer}} </span>
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>

    <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
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
