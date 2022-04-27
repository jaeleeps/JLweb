<template>
  <div id="app" class="back">
    <v-main>
      <v-container fill-height>
        <v-layout justify-center align-center pb-10>
          <v-flex shrink xs10 md9>
            <v-row>
              <span class="cat_title">About</span>
            </v-row>

            <v-row>
              <span class="cat_subtitle">About & Contacts</span>
            </v-row>

            <v-row>
              <v-col xs12 md6 style="text-align: center">
                <v-avatar tile size="250">
                  <img src="@/assets/profile_img_01.png" alt="John" />
                </v-avatar>
              </v-col>
              <v-col xs12 md6 style="text-align: center">
                <p class="contacts">
                  <span
                    style="letter-spacing: 4px; font-size: 2rem"
                    class="ma-1"
                  >
                    JAEYOUNG
                    <span style="font-weight: 400">LEE</span>
                  </span>

                  <span>
                    <v-chip
                      class="ma-1"
                      color="grey lighten-1"
                      text-color="white"
                    >
                      <v-avatar> <v-icon small>mdi-email</v-icon> </v-avatar
                      >jaeleeps@gmail.com
                    </v-chip>
                    <v-chip
                      class="ma-1"
                      color="grey lighten-1"
                      text-color="white"
                    >
                      <v-avatar>
                        <v-icon small>mdi-cellphone-android</v-icon> </v-avatar
                      >470-815-6864
                    </v-chip>
                  </span>

                  <span style="margin-top: 0.5rem">
                    <span
                      class="ma-1"
                      v-for="(contact, i) in contacts_btn"
                      :key="i"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn
                            v-on="on"
                            fab
                            dark
                            small
                            :color="contact.contact_color"
                            :href="contact.contact_url"
                          >
                            <v-icon>{{ contact.contact_icon }}</v-icon>
                          </v-btn>
                        </template>
                        <span>{{ contact.contact_txt }}</span>
                      </v-tooltip>
                    </span>
                  </span>
                </p>
              </v-col>
            </v-row>

            <v-row
              class="mb-2 cat_subsubtitle"
              style="text-align: center"
              justify="center"
            >
              <span style="font-size: 0.75rem"
                >click to know more about me</span
              >
            </v-row>
            <v-row class="mb-2" style="text-align: center" justify="center">
              <DownArrow />
            </v-row>

            <v-row justify="center">
              <v-btn
                @click="handleShowExp()"
                :color="this.show_exp ? `grey lighten-1` : `grey darken-4`"
                :small="$vuetify.breakpoint.xsOnly"
                text
                >Experiences</v-btn
              >
              <v-icon>mdi-slash-forward</v-icon>
              <v-btn
                @click="handleShowSkills()"
                :color="this.show_skills ? `grey lighten-1` : `grey darken-4`"
                :small="$vuetify.breakpoint.xsOnly"
                text
                >Skills</v-btn
              >
              <v-icon>mdi-slash-forward</v-icon>
              <v-btn
                @click="handleShowEtc()"
                :color="this.show_etc ? `grey lighten-1` : `grey darken-4`"
                :small="$vuetify.breakpoint.xsOnly"
                text
                >Etc</v-btn
              >
            </v-row>

            <transition name="fade">
              <v-row v-show="show_exp">
                <span class="cat_subtitle">Academics & Work Experiences</span>
                <div class="ml-n10 mt-5">
                  <AboutTimeline />
                  <v-sheet
                    style="text-align: center; margin-top: 2rem"
                    color="transparent"
                  >
                    <v-btn
                      class="ma-5"
                      fab
                      outlined
                      @click="handleShowExp()"
                      text
                      color="grey darken-1"
                    >
                      <!-- <v-icon>mdi-close</v-icon> -->
                      <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                    <v-btn
                      class="ma-5"
                      fab
                      outlined
                      @click="handleShowSkills()"
                      text
                      >skiils</v-btn
                    >
                    <v-btn
                      class="ma-5"
                      fab
                      outlined
                      @click="handleShowEtc()"
                      text
                      >Etc</v-btn
                    >
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
                    <SkillsCard skill_type="programming" style="margin: 1rem" />
                  </v-flex>
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5"
                      >Library & Framework</span
                    >
                    <SkillsCard
                      skill_type="library_framework"
                      style="margin: 1rem"
                    />
                  </v-flex>
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">tool & platform</span>
                    <SkillsCard skill_type="tool" style="margin: 1rem" />
                  </v-flex>
                  <!-- <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">Collaboration</span>
                    <SkillsCard
                      skill_type="collaboration"
                      style="margin: 1rem"
                    />
                  </v-flex> -->
                  <v-flex xs12 md6>
                    <span class="cat_subsubtitle ma-5">Language</span>
                    <SkillsCard skill_type="language" style="margin: 1rem" />
                  </v-flex>
                  <v-flex xs12 md12>
                    <v-sheet
                      style="text-align: center; margin-top: 2rem"
                      color="transparent"
                    >
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowExp()"
                        text
                        >Exp</v-btn
                      >
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowSkills()"
                        text
                        color="grey darken-1"
                      >
                        <v-icon>mdi-chevron-up</v-icon>
                      </v-btn>
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowEtc()"
                        text
                        >Etc</v-btn
                      >
                    </v-sheet>
                  </v-flex>
                </v-layout>
              </v-row>
            </transition>

            <transition name="fade">
              <v-row v-show="show_etc">
                <v-layout flex-wrap justify-space-between>
                  <v-flex xs12 md12 mb-3>
                    <span class="cat_subtitle mb-5">Etc.</span>
                  </v-flex>
                  <v-flex xs12 md6 pa-4>
                    <span class="cat_subsubtitle ma-3">Honors & Awards</span>
                    <v-card
                      v-for="(item, i) in etc_data.honors_data"
                      :key="i"
                      class="mx-auto ma-10"
                      outlined
                    >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-1">{{ item.years }}</div>
                          <v-list-item-avatar
                            tile
                            size="80"
                            color="transparent"
                          >
                            <v-img :src="item.img_link" contain />
                          </v-list-item-avatar>
                          <div
                            class="mb-2"
                            style="font-weight: 500; font-size: 1.2rem"
                          >
                            {{ item.title }}
                          </div>
                          <v-list-item-text class="mb-2">{{
                            item.subtitle
                          }}</v-list-item-text>
                          <v-expand-transition>
                            <div v-show="item.show">
                              <!-- <v-divider></v-divider> -->
                              <v-list-item-subtitle
                                class="ma-2"
                                v-for="(j, txt) in item.contents"
                                :key="j"
                                >{{ j }}</v-list-item-subtitle
                              >
                              <!-- ㆍ  -->
                            </div>
                          </v-expand-transition>
                        </v-list-item-content>
                      </v-list-item>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          class="mt-n5"
                          icon
                          @click="item.show = !item.show"
                        >
                          <v-icon>{{
                            item.show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                        <v-spacer />
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 md6 pa-4>
                    <span class="cat_subsubtitle ma-3">Certificates</span>
                    <v-card
                      v-for="(item, i) in etc_data.cert_data"
                      :key="i"
                      class="mx-auto ma-10"
                      outlined
                    >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div class="overline mb-1">{{ item.years }}</div>
                          <v-list-item-avatar
                            tile
                            size="80"
                            color="transparent"
                          >
                            <v-img :src="item.img_link" contain />
                          </v-list-item-avatar>
                          <div
                            class="mb-2"
                            style="font-weight: 500; font-size: 1.2rem"
                          >
                            {{ item.title }}
                          </div>
                          <!-- <v-list-item-title class="headline mb-1">{{item.title}}</v-list-item-title> -->
                          <v-list-item-text class="mb-2">{{
                            item.subtitle
                          }}</v-list-item-text>
                          <v-list-item-subtitle
                            class="mb-1"
                            v-for="(j, txt) in item.contents"
                            :key="j"
                            >- {{ j }}</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 md12>
                    <v-sheet
                      style="text-align: center; margin-top: 2rem"
                      color="transparent"
                      justify-center
                    >
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowExp()"
                        text
                        >Exp</v-btn
                      >
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowSkills()"
                        text
                        >Skills</v-btn
                      >
                      <v-btn
                        class="ma-5"
                        fab
                        outlined
                        @click="handleShowEtc()"
                        text
                        color="grey darken-1"
                      >
                        <v-icon>mdi-chevron-up</v-icon>
                      </v-btn>
                    </v-sheet>
                  </v-flex>
                </v-layout>
              </v-row>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import SkillsCard from "@/components/About/SkillsCard";
import AboutTimeline from "@/components/About/AboutTimeline";
import DownArrow from "@/components/DownArrow";

export default {
  components: {
    SkillsCard,
    AboutTimeline,
    DownArrow,
  },
  methods: {
    handleShowExp() {
      this.show_exp = !this.show_exp;
      this.show_skills = false;
      this.show_etc = false;
    },
    handleShowSkills() {
      this.show_skills = !this.show_skills;
      this.show_exp = false;
      this.show_etc = false;
    },
    handleShowEtc() {
      this.show_etc = !this.show_etc;
      this.show_exp = false;
      this.show_skills = false;
    },
  },
  data: () => ({
    skill_type: "",
    show_exp: false,
    show_skills: false,
    show_etc: false,
    etc_data: {
      honors_data: [
        {
          years: "2019",
          title:
            "2019 ROK Ministry of National Defense S/W Intelligence Competition",
          subtitle: "Finalist",
          img_link:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Emblem_of_the_Ministry_of_National_Defense_%28South_Korea%29_%28Korean%29.svg/1280px-Emblem_of_the_Ministry_of_National_Defense_%28South_Korea%29_%28Korean%29.svg.png",
          contents: [
            "Auspices: ROK Ministry of National Defense, ROK Ministry of Science and ICT, OSAM(Open Source Academy for Military)",
            "Went through coding test, web knowledge test, and application evaluation and was selected as one of WEB division finalists.",
            "Received a week of WEB group instruction, mainly about front-end.",
          ],
          show: false,
        },
        {
          years: "2019",
          title: "2019 ROK Ministry of National Defense Open Data Idea Contest",
          subtitle: "Finalist",
          img_link: require("@/assets/data_comp.jpeg"),
          contents: [
            "Auspices: ROK Ministry of National Defense, ROK Public Data Portal",
            "Established development plan for an Android application providing useful infotmation for Korean soldier and soldier-to-be",
            "Gave an APP UI demonstration and presentation at National Defense Ministry of Korea.",
          ],
          show: false,
        },
        {
          years: "2016",
          title: "SAGE Korea 2016",
          subtitle: "Grand Prize(1st place) & Best Innovative Award",
          img_link:
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t31.0-8/13305080_1197571036940438_225372631679600103_o.jpg?_nc_cat=110&_nc_ohc=7UfLMYJGFO4AX89u1T5&_nc_ht=scontent-ssn1-1.xx&oh=dbe07bbda7287b1f59e9eb730fec3569&oe=5E8FCCBA",
          contents: [
            "Auspices: SAGE Korea",
            "Managed Piece, social enterprise business selling art puzzles illustrated by savant syndrome patients and distributing its revenue to those patients.",
            "Selected as a national Team and advanced to SAGE World Cup 2016.",
          ],
          show: false,
        },
        {
          years: "2016",
          title: "GEC Korea Enterprise Challenge 2016 Winter",
          subtitle: "Gold Prize(1st place)",
          img_link: "https://www.gayoungpark.com/images/geckorea.png",
          contents: [
            "Auspices: GEC(Global Entrepreneur Challenge) Korea",
            "Established a business strategy for ONGO, cultural asset restoration and replica production service using 3D printing technology.",
          ],
          show: false,
        },
        {
          years: "2016",
          title: "Wharton Korea Business Black Box",
          subtitle: "Ranked top 5",
          img_link: require("@/assets/bbb.jpeg"),
          contents: [
            "Auspices: ROK Ministry of National Defense, ROK Public Data Portal, Baemin(배달의민족)",
            "Set a business plan for baby food regular delivery service, Baemin for Mom, under the competition’s theme ‘F&B market entry starategem for for Baemin(배달의민족)’.",
            "Designed a logo and a rough version of application interface for the service and set a marketing plan",
          ],
          show: false,
        },
        // {
        //   years: "2016",
        //   title: "The 7th Korea Youth Creative Design Competition",
        //   subtitle: "Exellence Award(2nd place)",
        //   img_link: "http://kbatv.org/_images/sub/symbol.jpg",
        //   contents: [
        //     "Auspices: KBAS(Korea Broadcasting Art School)",
        //     "Designed a poster to raise public awareness on cyber bullying on SNS and set an advertising plan for it."
        //   ],
        //   show: false
        // }
      ],
      cert_data: [
        {
          years: "2021",
          title: "GCP QwikLabs",
          subtitle: "Certificate",
          img_link: require("@/assets/gcp.png"),
          contents: [
            "Intro to ML: Image Processing",
            "BigQuery for Machine Learning",
            "Data Engineering",
            "Cloud Engineering",
            "Google Cloud Essentials",
          ],
          show: false,
        },
        {
          years: "2019",
          title: "CIP(Craftsman Information Processing) Certificate",
          subtitle: "Certificate",
          img_link: require("@/assets/hrdk.jpeg"),
          contents: [],
          show: false,
        },
        {
          years: "2019",
          title: "HSK(汉语水平考试) level 4",
          subtitle: "Chinese Proficiency Test",
          img_link:
            "https://post-phinf.pstatic.net/MjAxODEyMDdfOTEg/MDAxNTQ0MTQ4MTA2NjY1.gRNbns047ZSx79a-JMUHYWXkWMlt4IKOSkmF8xYKwB8g.OTwnBTCWMk52WYneMFR6TpISwFawmdAEsmvogAxnQuIg.JPEG/080720151701300.jpg?type=w1200",
          contents: [],
          show: false,
        },
        // {
        //   years: "2016",
        //   title: "ETS TOEFL(Test Of English as a Foreign Language)",
        //   subtitle: "Score: 108",
        //   img_link: "https://img.emg-services.net/HtmlPages/HtmlPage15627/ets-toefl-4cd.png",
        //   contents: [],
        //   show: false
        // }
      ],
    },
    contacts_btn: [
      {
        contact_icon: "mdi-linkedin",
        contact_color: "#2867B2",
        contact_txt: "Link in LinkedIn",
        contact_url: "https://www.linkedin.com/in/jaeyoung-lee/",
      },
      {
        contact_icon: "mdi-github-circle",
        contact_color: "#333",
        contact_txt: "Link in Github",
        contact_url: "https://github.com/jaeleeps",
      },
      {
        contact_icon: "mdi-npm-variant-outline",
        contact_color: "#cc3534",
        contact_txt: "Link in NPM",
        contact_url: "https://www.npmjs.com/package/kor-string-similarity",
      },
    ],
  }),
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
  /* margin-left: 20rem; */
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
  background-color: #efebe9;
  /* max-width: 100vh; */
  height: 100%;
  /* background-size: cover; */
  /* background-position: center; */
}
</style>
