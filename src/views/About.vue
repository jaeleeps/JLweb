<template>
  <div id="app" class="back">
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center pb-10>
          <v-flex shrink xs11 md10>
            <v-row>
              <span class="cat_title">About</span>
            </v-row>

            <v-row>
              <span class="cat_subtitle">About & Contacts</span>
            </v-row>

            <v-row>
              <v-col xs12 md6 style="text-align: center;">
                <v-avatar tile size="250">
                  <img src="@/assets/profile_img_01.png" alt="John" />
                </v-avatar>
              </v-col>
              <v-col xs12 md6 style="text-align: center;">
                <p class="contacts">
                  <span style="letter-spacing: 4px; font-size: 2rem;" class="ma-1">
                    JAEYOUNG
                    <span style="font-weight: 400;">LEE</span>
                  </span>

                  <span>
                    <v-chip class="ma-1" color="grey lighten-1" text-color="white">
                      <v-avatar>
                        <v-icon small>mdi-email</v-icon>
                      </v-avatar>jaeleeps@gmail.com
                    </v-chip>
                    <v-chip class="ma-1" color="grey lighten-1" text-color="white">
                      <v-avatar>
                        <v-icon small>mdi-cellphone-android</v-icon>
                      </v-avatar>8210-2309-4277
                    </v-chip>
                  </span>

                  <span style="margin-top: 0.5rem;">
                    <span class="ma-1" v-for="(contact, i) in contacts_btn" :key="i">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn v-on="on" fab dark small :color="contact.contact_color">
                            <v-icon>{{contact.contact_icon}}</v-icon>
                          </v-btn>
                        </template>
                        <span>{{contact.contact_txt}}</span>
                      </v-tooltip>
                    </span>
                  </span>
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-btn
                @click="handleShowExp()"
                :color="this.show_exp ? `grey lighten-1` : `grey darken-4`"
                text
              >Experiences</v-btn>
              <v-btn
                @click="handleShowSkills()"
                :color="this.show_skills ? `grey lighten-1` : `grey darken-4`"
                text
              >Skills</v-btn>
            </v-row>

            <transition name="fade">
              <v-row v-show="show_exp">
                <span class="cat_subtitle">Academics & Work Experiences</span>
                <div style="margin-right:2rem;">
                  <AboutTimeline />
                  <v-sheet style="text-align:center; margin-top:3rem;">
                    <v-btn
                      class="ma-5"
                      fab
                      outlined
                      @click="handleShowExp()"
                      text
                      color="grey darken-1"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-btn class="ma-5" fab outlined @click="handleShowSkills()" text>skiils</v-btn>
                  </v-sheet>
                </div>
              </v-row>
            </transition>

            <transition name="fade">
              <v-row v-show="show_skills">
                <v-layout flex-wrap>
                  <v-flex xs12 md12>
                    <p class="about-para">
                      <span class="cat_subtitle">Skills</span>
                    </p>
                  </v-flex>
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">Programming</span>
                    <SkillsCard skill_type="programming" style="margin:1rem;" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">Design & Modeling</span>
                    <SkillsCard skill_type="design" style="margin:1rem;" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">Language</span>
                    <SkillsCard skill_type="language" style="margin:1rem;" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">ETC</span>
                    <SkillsCard skill_type="etc" style="margin:1rem;" />
                  </v-flex>
                  <v-flex xs12 md12>
                    <v-sheet style="text-align:center; margin-top:3rem;">
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowSkills()"
                        text
                        color="grey darken-1"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-btn class="ma-5" fab outlined @click="handleShowExp()" text>Exp</v-btn>
                    </v-sheet>
                  </v-flex>
                </v-layout>
              </v-row>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import SkillsCard from "@/components/About/SkillsCard";
import DesignSkillsCard from "@/components/About/DesignSkillsCard";
import ProgrammingSkillsCard from "@/components/About/ProgrammingSkillsCard";
import AboutTimeline from "@/components/About/AboutTimeline";

export default {
  components: {
    DesignSkillsCard,
    ProgrammingSkillsCard,
    SkillsCard,
    AboutTimeline
  },
  methods: {
    handleShowExp() {
      this.show_exp = !this.show_exp;
      console.log(this.show_exp);
      if (this.show_skills == true) {
        this.show_skills = false;
      }
      return 0;
    },
    handleShowSkills() {
      this.show_skills = !this.show_skills;
      if (this.show_exp == true) {
        this.show_exp = false;
      }
      return 0;
    }
  },
  data: () => ({
    skill_type: "",
    show_exp: false,
    show_skills: false,
    contacts_btn: [
      {
        contact_icon: "mdi-linkedin",
        contact_color: "#2867B2",
        contact_txt: "Link in LinkedIn"
      },
      {
        contact_icon: "mdi-github-circle",
        contact_color: "#333",
        contact_txt: "Link in Github"
      },
      {
        contact_icon: "mdi-npm-variant-outline",
        contact_color: "#cc3534",
        contact_txt: "Link in NPM"
      }
    ]
  })
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.cat_title {
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 1rem;
  margin-top: 3rem;
  /* color:white; */
}

.cat_subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 0px;
}

.cat_subsubtitle {
  font-size: 1.3rem;
  /* @media $display-breakpoints.xs-only {
    font-size: 5px;
  } */
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-left: 20rem;
}

.contacts > span {
  /* font-family: Druk Wide Cy TT Medium; */
  /* font-family: Optima; */
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 2px;
  display: block;
  width: 100%;
}

.academics {
}

.back {
  /* background-image: url(https://c.wallhere.com/photos/7c/94/Windows_XP_Microsoft_Windows_hills-33549.jpg!d); */
  background-color: #ffffff;
  /* max-width: 100vh; */
  height: 100%;
  /* background-size: cover; */
  /* background-position: center; */
}
</style>
