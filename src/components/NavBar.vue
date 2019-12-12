<template>


    <v-app-bar
      app
      color="white"
      light
    >

      <v-toolbar-title>
        <v-btn
          href="/"
          target = "_self"
          text
        >
          <span class="font-weight-light">Jaeyoung</span>
          <span>Lee</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="/about"
        target = "_self"
        text
      >
        <span class="mr-2">about</span>
      </v-btn>

      <v-btn
        href="/projects"
        target = "_self"
        text
      >
        <span class="mr-2">projects</span>
      </v-btn>

      <v-btn
        href="/about"
        target = "_self"
        text
      >
        <span class="mr-2">design</span>
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <nav>
      <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Jaeyoung</span>
          <span>Lee</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <nav>
          <span>Lee</span>
          <v-icon right>exit_to_app</v-icon>
        </nav>
      </v-toolbar>      
    </nav> -->
</template>

<script>
export default {
  data() {

  }
}
</script>