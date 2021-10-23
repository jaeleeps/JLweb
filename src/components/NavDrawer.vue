<template>
    <v-navigation-drawer
      v-model="$store.state.drawer"
      color="#EFEBE9"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <img src="@/assets/profile_img_01.png" alt="Jaeyoung Lee" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <span class="font-weight-light" style="text-transform: uppercase; letter-spacing: 2px;">Jaeyoung</span>
            <span style="text-transform: uppercase; letter-spacing: 2px;">Lee</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          ripple
          :href=item.link
          target = "_self"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <span>{{ item.title }}</span>
              <!-- <span v-if="item.isActive"> you are here!!</span> -->
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavDrawer',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home', link: '#home-page', isActive: false },
          { title: 'About', icon: 'mdi-information', link: '#about-page', isActive: this.$store.state.isIntersectingAbout },
          { title: 'Projects', icon: 'mdi-view-dashboard', link: '#projects-page', isActive: this.$store.state.isIntersectingProjects },
          { title: 'Design', icon: 'mdi-image', link: '#about-page', isActive: false }
        ]
      }
    }
  }
</script>