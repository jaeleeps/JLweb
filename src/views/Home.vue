<template>
  <v-card class="home">
    <MainCarousel />
  </v-card>
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
