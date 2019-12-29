<template>
  <div id="app"  class="back">
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
                      <img
                        src="@/assets/profile_img_01.png"
                        alt="John"
                      >
                    </v-avatar>
                  </v-flex>
                  <v-flex xs12 md6>
                    <p class="contacts">
                      <span 
                        style="letter-spacing: 4px; font-size: 2rem;" > 
                        JAEYOUNG <span style="font-weight: 400;"> LEE </span>
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
                    <span class="subtitle"> Academics </span>
                    <span>
                      <v-timeline>
                        <v-timeline-item
                          v-for="item in academics_data"
                          :key="item.index"
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
                             :key = text.length 
                             v-text="text" />
                          </v-card>
                        </v-timeline-item>
                      </v-timeline>
                    </span>
                  </p>
                </v-flex>  
              </v-row>
              <v-row>
                <v-flex xs12 md12>
                  <p class="about-para">
                    <span class="subtitle"> Skills </span>
                    <span class="subsubtitle">Programming</span>
                    <span>
                      <v-card
                        max-width="400"
                        class="mx-auto"
                      >
                        <v-card-text>
                          <v-chip-group
                            multiple
                            column
                            active-class="primary--text"
                          >
                            <v-chip v-for="tag in tags" :key="tag">
                              <v-icon left color="red">mdi-account</v-icon>
                              {{ tag.title }}
                            </v-chip>
                          </v-chip-group>
                        </v-card-text>
                      </v-card>
                    </span>
                    <span class="subsubtitle">Language</span>
                  </p>
                </v-flex>
              </v-row>
            </v-flex>
            <v-flex xs0 md3></v-flex>
          </v-row>
        </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    academics_data : [
      {
        index: 0,
        year: "2014~2017",
        title: "Hankuk Academy of Foreign Studides" ,
        info: ["International Div. Class of 2017", " Major in Chinese Language", "GPA: 3.88/4.0" ],
      },
      {
        index: 0,
        year: "2017~",
        title: "Georgia Institue of Technology" ,
        info: ["Bachelor of Science in Computer Science", "Minor in Industrial Design", "Major GPA: 4.0/4.0", "Overall GPA: 3.86/4.0" ],
      },
    ],
    tags: [
      {
        title: "Python",
      }
    ],
  })
}
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
}

.about-para > .subsubtitle {
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 4px;
}


.contacts > span 
{
  /* font-family: Druk Wide Cy TT Medium; */
  /* font-family: Optima; */
  font-weight: 200;
  /* font-size: 2rem; */
  display: block;
}



.academics {

}
</style>
