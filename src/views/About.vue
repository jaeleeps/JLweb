<template>
  <div id="app"  class="back">
    <v-app id="inspire">
      <!-- <v-container> -->
        <v-layout>
          <v-row>
            <v-flex xs0 md2></v-flex>
            <v-flex xs12 md8>
              <div class="about-layer">
              </div>
              <v-layout>
                <v-flex xs12 md12>
                  <v-card
                    class="mx-auto"

                    tile
                  >
                    <v-avatar>
                      <img
                        src="@/assets/profile_img_01.png"
                        alt="John"
                      >
                    </v-avatar>
                  </v-card>
                  <img
                    src="@/assets/profile_img_01.png"
                    alt="John"
                  >
                </v-flex>
              </v-layout>      


            </v-flex>
            <v-flex xs0 md2></v-flex>
          </v-row>
        </v-layout>
    </v-app>
  </div>
</template>

<style scoped>
.about-layer {

}
</style>
