<template>
  <!-- <v-card max-width="400" class="mx-auto">
    <v-card-text>
      <v-chip-group multiple column>
        <v-tooltip bottom v-for="tag in tags" :key="tag">
          <template v-slot:activator="{ on }">
            <v-chip>
              <v-icon left color="red">mdi-account</v-icon>
              {{ tag.title }}
            </v-chip>
          </template>
          <span>Tooltip</span>
        </v-tooltip>
      </v-chip-group>
    </v-card-text>
  </v-card> -->
  <v-card  class="ma-4" >
    <v-card-text>
      <v-menu
        v-for="(tag, i) in tags" 
        :key="i"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ on }">
          <v-chip
            class="ma-2"
            pill
            v-on="on"
          >
            <v-icon left :color="tag.color">{{tag.icon}}</v-icon>
            {{tag.title}}
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon left>{{tag.icon}}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{tag.title}}</v-list-item-title>
                <v-list-item-subtitle>{{tag.rating}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  @click="menu = false"
                >
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <!-- <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list> -->
        </v-card>
      </v-menu>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tags: [
      {
        title: "Adobe Photoshop",
        color: "warning",
        icon: "mdi-adobe",
        rating: "",
      },
      {
        title: "Java",
        color: "red",
        icon: "mdi-language-java",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "HTML/CSS",
        color: "amber",
        icon: "mdi-language-html5",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },
      {
        title: "Python",
        color: "primary",
        icon: "mdi-language-python",
        rating: 5,
      },    
    ]
  })
};
</script>