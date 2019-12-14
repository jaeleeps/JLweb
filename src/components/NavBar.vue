<template>
    <v-app-bar
      app
      class="elevation-0"
      color="transparent"
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
</template>

<script>
export default {
  data() {

  }
}
</script>