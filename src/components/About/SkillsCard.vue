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
  <v-card  class="ma-4" >
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
          <v-chip
            class="ma-2"
            pill
            v-on="on"
          >
            <v-icon left :color="tag.color">{{tag.icon}}</v-icon>
            {{tag.title}}
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon left>{{tag.icon}}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{tag.title}}</v-list-item-title>
                <!-- <v-list-item-subtitle>{{tag.rating}}</v-list-item-subtitle> -->
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click="menu = false"
                >
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
              <span class="lang-description"> {{tag.rating}} </span>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['skill_type'],
  methods: {
    getTypes : function() {
      if (this.skill_type == "programming")  
        return this.programming
      if (this.skill_type == "design")  
        return this.design
      if (this.skill_type == "language")  
        return this.language
      if (this.skill_type == "etc")  
        return this.etc
    }
  },
  data: () => ({
    programming : [
      {
        title: "Javascript",
        color: "warning",
        icon: "mdi-language-javascript",
        rating: "Experienced in developing web/mobile app and module using Vanilla.js and various js-based Frameworks",
      },
      {
        title: "Java",
        color: "red",
        icon: "mdi-language-java",
        // rating: "Capable of ",
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        // rating: "",
      },
      {
        title: "HTML/CSS",
        color: "amber",
        icon: "mdi-language-html5",
        rating: "Have a professional level of HTML/CSS knowledge for web front-end developing",
      },
      {
        title: "Vue.js",
        color: "teal darken-4",
        icon: "mdi-vuejs",
        rating: "Skillful in developing web/mobile app utlizing Vue.js and frameworks(Vuex, Nuxt.js, Vuetify.js, Element UI...) ",
      },
      {
        title: "React.js",
        color: "purple",
        icon: "mdi-react",
        rating: "Can develop basic blog website integrating React.js with Redux, Passport.js, Material UI, and etc.",
      },
      {
        title: "Node.js",
        color: "green",
        icon: "mdi-nodejs",
        rating: "Experienced in developing various webpage using Node.js and deploy a NPM module(kor-string-similarity)",
      },
      {
        title: "SQL, MongoDB",
        color: "primary",
        icon: "mdi-database",
        rating: "Able to design a basic DB using MySQL and MongoDB and integrate it with front-end",
      },
      {
        title: "C/C++",
        color: "indigo",
        icon: "mdi-language-cpp",
        rating: "",
      },
      // {
      //   title: "Go Lang",
      //   color: "teal accent-3",
      //   icon: "mdi-language-go",
      //   rating: "",
      // },  
      {
        title: "Unity/C#",
        color: "grey darken-4",
        icon: "mdi-unity",
        rating: "Have experience in developing third-person adventure game using Unity C#",
      },    
    ],
    design: [
      {
        title: "Adobe Photoshop",
        color: "blue",
        icon: "mdi-adobe",
        rating: "",
      },
      {
        title: "Adobe Illustrator",
        color: "orange",
        icon: "mdi-adobe",
        rating: "",
      },
      {
        title: "Adobe InDesign",
        color: "deep-purple",
        icon: "mdi-adobe",
        rating: "",
      },
      {
        title: "Blender",
        color: "orange",
        icon: "mdi-blender-software",
        rating: "",
      }, 
      {
        title: "Substance Designer",
        color: "deep-orange",
        icon: "mdi-hexagon",
        rating: "",
      },
      {
        title: "Rhino",
        color: "red",
        icon: "mdi-video-3d",
        rating: "",
      }
    ],
    language : [
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
      }
    ],
    etc : [
      {
        title: "Leadership",
        color: "red",
        icon: "mdi-account-group",
        rating: "",
      },
      {
        title: "Public Speaking/Presentation",
        color: "deep-purple",
        icon: "mdi-voice",
        rating: "",
      },
      {
        title: "Event Organizing",
        color: "light-blue",
        icon: "mdi-party-popper",
        rating: "",
      },
      {
        title: "Marketing/Advertisement",
        color: "green",
        icon: "mdi-shopping",
        rating: "",
      }
    ]
  })
};
</script>

<style scoped>
.lang-description {
  font-weight: 300;
  font-size: 0.8rem;
}
</style>