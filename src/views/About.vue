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
                  <v-flex xs12 md4>
                    <v-avatar tile size="200">
                      <img
                        src="@/assets/profile_img_01.png"
                        alt="John"
                      >
                    </v-avatar>
                  </v-flex>
                  <v-flex xs12 md8>
                    <p class="contacts">
                      <span> JAEYOUNG <span class="font-weight-bold"> LEE </span></span>
                      <span class="font-weight-light">jaeleeps@gmail.com</span>
                      <span>8210.2309.4277</span>
                    </p>
                  </v-flex>
                </v-layout> 
              </v-row>
              <v-row>
                <v-flex xs12 md12>
                  <p class="academics">
                    <span class="subtitle"> Academics </span>
                    <span>
                      <v-timeline 
                        align-top
                        >
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
        year: "2014~2017",
        title: "Hankuk Academy of Foreign Studides" ,
        info: ["International Div. Class of 2017", " Major in Chinese Language", "GPA: 3.88/4.0" ],
      }
    ]
  })
}
</script>

<style scoped>
.contacts > span 
{
  /* font-family: Druk Wide Cy TT Medium; */
  font-family: Optima;
  /* font-size: 2rem; */
  display: block;
}

.subtitle {
  font-size: 2rem;
  /* font-weight: bold; */
  text-transform: uppercase;
  letter-spacing: 5px;
}

.academics {

}
</style>
