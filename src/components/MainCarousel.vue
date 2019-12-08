<template>
  <div>
    <v-row justify="space-around">
      <!-- <v-icon @click="model--">mdi-minus</v-icon>
      {{ model }}
      <v-icon @click="model++">mdi-plus</v-icon> -->
    </v-row>
    <v-carousel 
      v-model="model"
      cycle
      interval="6000"
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src= "item.src"
        reverse-transition="fade"
        transition="fade"        
      >
        <!-- <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        model: 0,
      }
    },
  }
</script>