<template>
  <div id="app" class="back">
    <!-- <v-app id="inspire"> -->
    <v-container fluid>
      <v-layout>
        <v-row>
          <!-- <v-flex xs1 md3></v-flex> -->
          <v-flex xs12 md12>
            <v-row>
              <p class="about-para">
                <span class="subtitle">Contacts</span>
              </p>
            </v-row>
            <v-row>
                <v-col xs12 md6 style="text-align: center;">
                  <v-avatar tile size="250">
                    <img src="@/assets/profile_img_01.png" alt="John" />
                  </v-avatar>
                </v-col>
                <v-col xs12 md6 style="text-align: left;">
                  <p class="contacts">
                    <span style="letter-spacing: 4px; font-size: 2rem;" class="ma-1">
                      JAEYOUNG
                      <span style="font-weight: 400;">LEE</span>
                    </span>
                    <span>
                      <v-btn color="primary" depressed class="ma-1">
                        <span class="font-weight-light">
                          <v-icon class="mr-2">mdi-email</v-icon>jaeleeps@gmail.com
                        </span>
                      </v-btn>
                    </span>
                    <span>
                      <v-btn color="primary" depressed class="ma-1">
                        <span class="font-weight-light">
                          <v-icon class="mr-2">mdi-cellphone-android</v-icon>8210-2309-4277
                        </span>
                      </v-btn>
                    </span>
                  </p>
                </v-col>
            </v-row>
            <v-row>
              <v-flex xs12 md12>
                <p class="about-para">
                  <span class="subtitle">Academics & Work Experiences</span>
                  <span>
                    <v-timeline>
                      <v-timeline-item
                        v-for="(item, i) in academics_data"
                        :key="i"
                        color="grey lighten-2"
                        small
                      >
                        <template v-slot:opposite>
                          <span v-text="item.year"></span>
                        </template>
                        <v-card class="elevation-2">
                          <v-card-title class="title" v-text="item.title" />
                          <v-card-subtitle style="font-weight: 600;" v-text="item.subtitle" />
                          <v-card-text
                            style="padding-top: 0px; padding-bottom: 8px;"
                            v-for="text in item.info"
                            :key="text.length"
                            v-text="text"
                          />
                        </v-card>
                      </v-timeline-item>
                    </v-timeline>
                  </span>
                </p>
              </v-flex>
            </v-row>
            <v-row>
              <v-layout flex-wrap>
                <v-flex xs12 md12>
                  <p class="about-para">
                    <span class="subtitle">Skills</span>
                  </p>
                </v-flex>
                <v-flex xs12 md6>
                  <span class="subsubtitle ma-5">Programming Lang & Tool</span>
                  <SkillsCard skill_type="programming" style="margin:1rem;" />
                </v-flex>
                <v-flex xs12 md6>
                  <span class="subsubtitle ma-5">Design & Modeling</span>
                  <SkillsCard skill_type="design" style="margin:1rem;" />
                </v-flex>
                <v-flex xs12 md6>
                  <span class="subsubtitle ma-5">Language</span>
                  <SkillsCard skill_type="language" style="margin:1rem;" />
                </v-flex>
                <v-flex xs12 md6>
                  <span class="subsubtitle ma-5">ETC</span>
                  <SkillsCard skill_type="etc" style="margin:1rem;" />
                </v-flex>
              </v-layout>
            </v-row>
          </v-flex>
          <!-- <v-flex xs1 md3></v-flex> -->
        </v-row>
      </v-layout>
    </v-container>
    <!-- </v-app> -->
  </div>
</template>

<script>
import SkillsCard from "@/components/About/SkillsCard";
import DesignSkillsCard from "@/components/About/DesignSkillsCard";
import ProgrammingSkillsCard from "@/components/About/ProgrammingSkillsCard";

export default {
  components: {
    DesignSkillsCard,
    ProgrammingSkillsCard,
    SkillsCard
  },
  data: () => ({
    skill_type: "",
    academics_data: [
      {
        year: "2014~2017",
        title: "Hankuk Academy of Foreign Studides",
        subtitle: "International Div. Class of 2017",
        info: [" Major in Chinese Language", "GPA: 3.88/4.0"]
      },
      {
        year: "2017~",
        title: "Georgia Institue of Technology",
        subtitle: "Bachelor of Science in Computer Science",
        info: [
          "Minor in Industrial Design",
          "Major GPA: 4.0/4.0",
          "Overall GPA: 3.86/4.0"
        ]
      },
      {
        year: "2018",
        title: "Naver D2 - Campus Q",
        subtitle: "Node.js Developer",
        info: [
          "CampusQ was a chatbot-integrated education platform developing start-up which won Naver D2 Campus Tech Attack Program and later became the foundation of Bloomchat(bloomchat.app)."
        ]
      }
    ]
  })
};
</script>

<style scoped>
.about-para {
  margin-top: 3rem;
}

.about-para > span {
  display: block;
}

.about-para > .subtitle {
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 0px;
}

.subsubtitle {
  font-size: 1.3rem;
  @media $display-breakpoints.xs-only {
    font-size: 5px;
  }
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.contacts > span {
  /* font-family: Druk Wide Cy TT Medium; */
  /* font-family: Optima; */
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 2px;
  display: block;
}

.academics {
}

.back {
  /* background-image: url(https://c.wallhere.com/photos/7c/94/Windows_XP_Microsoft_Windows_hills-33549.jpg!d); */
  background-color: #ffffff;
  max-width: 100vh;
  height: 100%;
  /* background-size: cover; */
  /* background-position: center; */
}
</style>
