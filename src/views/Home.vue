<template>
  <div>
    <v-layout column>
      <v-flex fill-height d-flex xs12>
        <MainCarousel />
      </v-flex>
    </v-layout>
    <v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md6>
          <v-btn  block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn  block class="primary">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs6 md3>
          <v-btn  block class="success">1</v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn  block class="success">2</v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn  block class="success">2</v-btn>
        </v-flex>
        <v-flex xs6 md3>
          <v-btn  block class="success">2</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MainCarousel from '@/components/MainCarousel'

export default {
  name: 'home',
  components: {
    MainCarousel,
  }
}
</script>
