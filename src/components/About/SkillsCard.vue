<template>
  <!-- <v-card max-width="400" class="mx-auto">
    <v-card-text>
      <v-chip-group multiple column>
        <v-tooltip bottom v-for="tag in tags" :key="tag">
          <template v-slot:activator="{ on }">
            <v-chip>
              <v-icon left color="red">mdi-account</v-icon>
              {{ tag.title }}
            </v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-chip-group>
    </v-card-text>
  </v-card> -->
  <v-card class="ma-4">
    <v-card-text>
      <v-menu
        v-for="(tag, i) in getTypes()"
        :key="i"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ on }">
          <v-chip class="ma-2" pill v-on="on">
            <Icon
              v-if="tag.is_iconify"
              :icon="tag.icon"
              style="margin-right: 0.4rem"
            ></Icon>
            <v-icon v-else left :color="tag.color">{{ tag.icon }}</v-icon>
            {{ tag.title }}
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon left>{{ tag.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ tag.title }}</v-list-item-title>
                <!-- <v-list-item-subtitle>{{tag.rating}}</v-list-item-subtitle> -->
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="menu = false">
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item @click="() => {}">
              <!-- <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action> -->
              <span class="lang-description"> {{ tag.rating }} </span>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-card-text>
  </v-card>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  props: ["skill_type"],
  methods: {
    getTypes: function () {
      if (this.skill_type == "programming") return this.programming;
      if (this.skill_type == "library_framework") return this.library_framework;
      if (this.skill_type == "tool") return this.tool;
      if (this.skill_type == "language") return this.language;
      if (this.skill_type == "collaboration") return this.collaboration;
    },
  },
  components: {
    Icon,
  },
  data: () => ({
    programming: [
      {
        title: "Typescript",
        color: "primary",
        icon: "mdi-language-typescript",
        rating:
          "Skillful in utilizing Typescript to develope Angular/Nest.js-based application",
      },
      {
        title: "Javascript",
        color: "warning",
        icon: "mdi-language-javascript",
        rating:
          "Capable of developing web applicaction and npm module using Vue and React",
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating:
          "Skillful in providing backend service using Python-based backend frameworks and data analysis using various libraries",
      },
      {
        title: "Java",
        color: "red",
        icon: "mdi-language-java",
        rating:
          "Experienced in implementing data structure and various algorithm using Java and leading JavaFX project",
      },
      {
        title: "HTML/CSS",
        color: "amber",
        icon: "mdi-language-html5",
        rating:
          "Have a intermediate level of HTML/CSS knowledge for web front-end developing",
      },
      {
        title: "SQL",
        color: "primary",
        icon: "mdi-database",
        // rating: "",
      },
    ],
    library_framework: [
      {
        title: "Angular",
        color: "red",
        icon: "mdi-angular",
        rating: "Skillful in working on ",
      },
      {
        title: "Vue.js",
        color: "teal darken-4",
        icon: "mdi-vuejs",
        rating:
          "Skillful in developing Vue.js web application with various 3rd parties(Vuex, Nuxt.js, Vuetify.js, Element UI...) ",
      },
      {
        title: "React.js",
        color: "purple",
        icon: "mdi-react",
        rating:
          " website integrating React.js with Redux, Passport.js, Material UI, and etc.",
      },
      {
        title: "Node.js",
        color: "green",
        icon: "mdi-nodejs",
        rating:
          "Experienced in developing Node.js backend and deploying Node.js application",
      },
      {
        title: "D3.js",
        color: "primary",
        icon: "logos:d3",
        is_iconify: true,
      },
      {
        title: "RXJS",
        color: "black",
        icon: "file-icons:ngrx",
        is_iconify: true,
      },
      {
        title: "FastAPI",
        color: "primary",
        icon: "simple-icons:fastapi",
        is_iconify: true,
      },
      {
        title: "Flask",
        color: "primary",
        icon: "file-icons:flask",
        is_iconify: true,
      },
      {
        title: "Jupyter Notebook",
        color: "primary",
        icon: "logos:jupyter",
        is_iconify: true,
      },
    ],
    tool: [
      {
        title: "Google Cloud Platform",
        color: "primary",
        // icon: "mdi-cloud-outline",
        icon: "logos:google-cloud",
        is_iconify: true,
      },
      {
        title: "Git",
        color: "black",
        icon: "mdi-git",
      },
      {
        title: "MySQL",
        color: "black",
        icon: "logos:mysql",
        is_iconify: true,
      },
      {
        title: "Firebase",
        color: "black",
        icon: "logos:firebase",
        is_iconify: true,
      },
      {
        title: "Jenkins",
        color: "black",
        icon: "logos:jenkins",
        is_iconify: true,
      },
            {
        title: "Branch.io",
        color: "black",
        icon: "logos:branch",
        is_iconify: true,
      },
      {
        title: "Sentry.io",
        color: "black",
        icon: "vscode-icons:file-type-sentry",
        is_iconify: true,
      },
            {
        title: "GTM",
        color: "black",
        icon: "logos:google-tag-manager",
        is_iconify: true,
      },
    ],
    language: [
      {
        title: "Korean",
        color: "blue",
        icon: "mdi-alpha-k-circle",
        rating: "Native",
      },
      {
        title: "English",
        color: "green",
        icon: "mdi-alpha-e-circle",
        rating: "Full Professional Proficiency",
      },
      {
        title: "Chinese",
        color: "red",
        icon: "mdi-alpha-c-circle",
        rating: "Limited Working Proficiency",
      },
    ],
    collaboration: [
      {
        title: "Git",
        color: "black",
        icon: "mdi-git",
      },
      // {
      //   title: "Leadership",
      //   color: "red",
      //   icon: "mdi-account-group",
      //   rating: "",
      // },
      // {
      //   title: "Public Speaking/Presentation",
      //   color: "deep-purple",
      //   icon: "mdi-voice",
      //   rating: "",
      // },
      // {
      //   title: "Event Organizing",
      //   color: "light-blue",
      //   icon: "mdi-party-popper",
      //   rating: "",
      // },
      // {
      //   title: "Marketing/Advertisement",
      //   color: "green",
      //   icon: "mdi-shopping",
      //   rating: "",
      // }
    ],
  }),
};
</script>

<style scoped>
.lang-description {
  font-weight: 300;
  font-size: 0.8rem;
}
</style>