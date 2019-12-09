<template>
    <v-layout row>
      <v-flex xs0 md2 />
      <v-flex xs12 md8>
        <MainCarousel />
      </v-flex>
      <v-flex xs0 md2 />
    </v-layout>    
</template>

<script>
import MainCarousel from '@/components/MainCarousel'
export default {
    components: {
        MainCarousel
    }
}
</script>

<style scoped>

</style>