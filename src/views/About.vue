<template>
  <div id="app" class="back">
    <v-app id="inspire">
      <!-- <v-container> -->
      <v-layout>
        <v-row>
          <v-flex xs0 md3></v-flex>
          <v-flex xs12 md6>
            <v-row>
              <v-layout>
                <v-flex xs12 md6>
                  <v-avatar tile size="200">
                    <img src="@/assets/profile_img_01.png" alt="John" />
                  </v-avatar>
                </v-flex>
                <v-flex xs12 md6>
                  <p class="contacts">
                    <span style="letter-spacing: 4px; font-size: 2rem;">
                      JAEYOUNG
                      <span style="font-weight: 400;">LEE</span>
                    </span>
                    <span class="font-weight-light">jaeleeps@gmail.com</span>
                    <span>8210.2309.4277</span>
                  </p>
                </v-flex>
              </v-layout>
            </v-row>
            <v-row>
              <v-flex xs12 md12>
                <p class="about-para">
                  <span class="subtitle">Academics</span>
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
                    <span class="subsubtitle ma-5">Programming Lang&Tool</span>
                    <ProgrammingSkillsCard style="margin:1rem;"/>
                </v-flex>
                <v-flex xs12 md6>
                    <span class="subsubtitle ma-5">Design Tool</span>
                    <DesignSkillsCard style="margin:1rem;" />
                </v-flex>
                <v-flex xs12 md6>
                    <span class="subsubtitle ma-5">Design Tool</span>
                    <DesignSkillsCard style="margin:1rem;" />
                </v-flex>
                <v-flex xs12 md6>
                    <span class="subsubtitle ma-5">Design Tool</span>
                    <DesignSkillsCard style="margin:1rem;" />
                </v-flex>
              </v-layout>
            </v-row>
          </v-flex>
          <v-flex xs0 md3></v-flex>
        </v-row>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import DesignSkillsCard from "@/components/About/DesignSkillsCard";
import ProgrammingSkillsCard from "@/components/About/ProgrammingSkillsCard";

export default {
  components: {
    DesignSkillsCard,
    ProgrammingSkillsCard
  },
  data: () => ({
    academics_data: [
      {
        year: "2014~2017",
        title: "Hankuk Academy of Foreign Studides",
        info: [
          "International Div. Class of 2017",
          " Major in Chinese Language",
          "GPA: 3.88/4.0"
        ]
      },
      {
        year: "2017~",
        title: "Georgia Institue of Technology",
        info: [
          "Bachelor of Science in Computer Science",
          "Minor in Industrial Design",
          "Major GPA: 4.0/4.0",
          "Overall GPA: 3.86/4.0"
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
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.contacts > span {
  /* font-family: Druk Wide Cy TT Medium; */
  /* font-family: Optima; */
  font-weight: 200;
  /* font-size: 2rem; */
  display: block;
}

.academics {
}
</style>
