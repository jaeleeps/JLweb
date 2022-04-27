<template>
  <v-timeline :dense="$vuetify.breakpoint.xsOnly">
    <v-timeline-item
      v-for="(item, i) in academics_data"
      :key="i"
      color="grey lighten-2"
      small
    >
      <template v-slot:opposite>
        <span v-text="item.year"></span>
      </template>
      <v-card class="elevation-2">
        <v-img
            v-if="item.hasOwnProperty('thumbnail')"
            height="120"
            contain
            :src="item.thumbnail"
        ></v-img>
        <v-card-title class="title" v-text="item.title" />
        <v-card-subtitle style="font-weight: 600" v-text="item.cat_subtitle" />
        <v-card-text
          style="padding-top: 0px; padding-bottom: 8px"
          v-for="text in item.info"
          :key="text.length"
          v-text="text"
        />
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    academics_data: [
      {
        year: "Jan. 2022 - May. 2022",
        thumbnail: require('@/assets/experience/gatech_coc.png'),
        title: "Georgia Institue of Technology",
        cat_subtitle:
            "Teaching Assitant",
        info: [
          "CS2340 (Object and Design)"
        ],
        links: [
          {
            title: "course website",
            href: "https://github.gatech.edu/pages/gtobdes/obdes/"
          }
        ]
      },
      {
        year: "May. 2020 - Jan. 2022",
        thumbnail: require('@/assets/experience/jaranda.png'),
        title: "Jaranda",
        cat_subtitle:
          "Fullstack Web Developer",
        info: [
          "Typescript(Angular, Nest.js), Python(FastAPI, Flask), GCP, MySQL",
        ],
      },
      {
        year: "Sep. 2018 - Apr. 2020",
        title: "Republic of Korea Marine Corps",
        thumbnail: require('@/assets/experience/rokmc.jpeg'),
        cat_subtitle:
          "Sergent | Informaion Operations Officer, Corps Translator(Eng-Kor)",
        info: [
          "Major General-level Commendation(2nd Marine Division Commandor)",
          "Lieutenant General-level Commendation(ROK Marine Corps Commandant)",
        ],
      },
      {
        year: "May. 2018 - Aug. 2018",
        thumbnail: require('@/assets/experience/naver_d2.png'),
        title: "Naver D2 - Campus Q",
        cat_subtitle: "Node.js Developer",
        info: [
          "Node.js, React, MySQL",
        ],
      },
      {
        year: "Aug.2017 - Current",
        thumbnail: require('@/assets/experience/gatech_coc.png'),
        title: "Georgia Institue of Technology",
        cat_subtitle: "Bachelor of Science in Computer Science",
        info: [
          "Major GPA: 4.0/4.0",
          "Overall GPA: 3.84/4.0",
          "Club/Organization: VGDev(Video Game Developing Group, member), KCS(Korean Computer Science student association, member)",
        ],
      },
      {
        year: "2014~2017",
        thumbnail: require('@/assets/experience/hafs.png'),
        title: "Hankuk Academy of Foreign Studides",
        cat_subtitle: "International Div. Class of 2017",
        info: [
          " Major in Chinese Language",
          "Club/Organization: President of Student Council Department of Environment, KIYAC(Korea International Young Adult's Community, Event Coordinator), Kokos(Mural/Art therapy vonlunteer group)",
        ],
      },
    ],
  }),
};
</script>