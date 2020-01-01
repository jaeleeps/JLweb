<template>
  <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

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

    <div class="d-none d-lg-block">
      <v-btn
        href="/about"
        target = "_self"
        text>
        <!-- <v-icon>mdi-magnify</v-icon> -->
        <span class="mr-2">about</span>
      </v-btn>
      
      <v-btn
        href="/projects"
        target = "_self"
        text>
        <!-- <v-icon>mdi-heart</v-icon> -->
        <span class="mr-2">projects</span>
      </v-btn>

      <v-btn
        href="/about"
        target = "_self"
        text>
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
        <span class="mr-2">Design</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      collapseOnScroll: true,
    }),
  }
</script>