<template>
  <v-layout row wrap justify-space-around>
    <v-flex v-for="(item, i) in cardsData" :key="i" xs12 md4 pa-5>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>{{item.title_txt}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
          <div v-for="(main_txt, i) in item.main_txt_arr" :v-key="i">{{main_txt}}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Share</v-btn>

          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    cardsData: [
      {
        title_txt: "testtest",
        main_txt_arr: [
          "Whitehaven Beach",
          "Whitsunday Island, Whitsunday Islands"
        ]
      },
      {
        title_txt: "testtest"
      },
      {
        title_txt: "testtest"
      }
    ]
  })
};
</script>