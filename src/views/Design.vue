<template>
  <div class="back pa-10">
    <v-main>
      <v-container fill-height>
        <v-layout justify-center align-center pb-10>
          <v-flex shrink xs11 md10>
            <v-row>
              <span class="cat_title">Design</span>
            </v-row>

            <v-row class="ma-5 cat_subsubtitle"  justify="center">
              <v-img :src="require('@/assets/under_construction.png')"
              max-height="400"
              contain
              eager>
              </v-img>
            </v-row>
            <v-row class="ma-5 mt-10 cat_subsubtitle" style="text-align: center;" justify="center">
              <span style="font-size: 0.75rem;">Design Page is under construction</span>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>

<script>

export default {
  components: {

  },
  data: () => ({
    image: {
      under_construction: require('@/assets/under_construction.png'),
    }
  })
};
</script>

<style scoped>
.cat_title {
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 1rem;
  color: #212121;
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

.back {
  /* width: 100vw;
  min-height: 100vh; */
  background-color: #efebe9;
}
</style>