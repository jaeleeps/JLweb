<template>
  <v-layout row wrap justify-space-around>
    <v-flex v-for="(item, i) in cardsData" :key="i" xs12 md4 pa-5>
      <v-card class="mx-auto" max-width="400" pa10>
        <v-img
          class="black--text align-end"
          aspect-ratio="1"
          height="200px"
          contain
          :src="item.main_img"
          lazy-src="@/assets/profile_img_01.png"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-title>{{item.title_txt}}</v-card-title>
        <v-card-subtitle class="pb-1">
          <span style="font-weight: bold">Keywords:</span>
          {{item.dev_stacks}}
        </v-card-subtitle>

        <v-card-text class="text--primary mb-n5">
          <div v-for="(main_txt, i) in item.main_txt_arr" :key="i">{{main_txt}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" @click="item.show = !item.show" text>Related Link</v-btn>
          <v-overlay opacity="0.80" zIndex="5" :value="item.show">
            <div style="height:100vh; width:100vw; text-align:center;" @click="item.show = false"></div>
            <div id="overlay-center-wrapper">
              <span>Github</span>
              <span>
                <v-btn ma-2 x-large rounded outlined color="white" :href="item.related_link">Sure!</v-btn>
                <v-btn ma-2 x-large rounded outlined color="white"  @click="item.show = false">Nope!</v-btn>
              </span>
            </div>
          </v-overlay>
        </v-card-actions>

        <!-- <v-card-actions>
          <v-btn color="orange" @click="item.show = !item.show" text>Share</v-btn>
          <v-btn color="orange" @click="item.show = !item.show" text>Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="item.show = !item.show">
            <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="item.show">
            <v-divider></v-divider>
            <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
          </div>
        </v-expand-transition>-->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    cardsData: [
      {
        title_txt: "kor-string-similarity",
        dev_stacks: "javascript, node.js",
        main_txt_arr: [
          "Sørensen–Dice coefficient and NphoEd(Normallized phoneme-based metric)-based string similarity calculating NPM module."
        ],
        main_img: require("@/assets/projects/kor_string_similarity01.png"),
        show: false,
        related_link: "https://www.npmjs.com/package/kor-string-similarity",
      }
    ]
  })
};
</script>

<style scoped>
#overlay-center-wrapper {
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

#overlay-center-wrapper > span {
  display: block;
  font-size: 2.5rem;
}
</style>