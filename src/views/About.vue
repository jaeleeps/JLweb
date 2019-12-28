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
                      <span class="font-weight-bold"> Jaeyoung Lee(이재영) </span>
                      <span class="font-weight-light">jaeleeps@gmail.com</span>
                      <span>8210.2309.4277</span>
                    </p>
                  </v-flex>
                </v-layout> 
              </v-row>
              <v-row>
                <v-flex xs12 md12>
                  <p class="academics">
                    <span> Academics </span>
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

<style scoped>
.about-layer {

}

.contacts span 
{
  /* font-family: Druk Wide Cy TT Medium; */
  font-family: Optima;
  /* font-size: 2rem; */
  display: block;
}

.academics {

}
</style>
