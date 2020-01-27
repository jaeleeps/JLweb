<template>
  <v-timeline :dense="$vuetify.breakpoint.xsOnly">
    <v-timeline-item v-for="(item, i) in academics_data" :key="i" color="grey lighten-2" small>
      <template v-slot:opposite>
        <span v-text="item.year"></span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="title" v-text="item.title" />
        <v-card-subtitle style="font-weight: 600;" v-text="item.cat_subtitle" />
        <v-card-text
          style="padding-top: 0px; padding-bottom: 8px;"
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
        year: "2014~2017",
        title: "Hankuk Academy of Foreign Studides",
        cat_subtitle: "International Div. Class of 2017",
        info: [
          " Major in Chinese Language",
          "Club/Organization: President of Student Council Department of Environment, KIYAC(Korea International Young Adult's Community, Event Coordinator), Kokos(Mural/Art therapy vonlunteer group)"
        ]
      },
      {
        year: "2017~",
        title: "Georgia Institue of Technology",
        cat_subtitle: "Bachelor of Science in Computer Science",
        info: [
          "Minor in Industrial Design",
          "Major GPA: 4.0/4.0",
          "Overall GPA: 3.86/4.0",
          "Club/Organization: VGDev(Video Game Developing Group, member), KCS(Korean Computer Science student association, member)"
        ]
      },
      {
        year: "2018",
        title: "Naver D2 - Campus Q",
        cat_subtitle: "Node.js Developer",
        info: [
          "May. 2018 - Aug. 2018",
          "CampusQ was chatbot-integrated Question Answering platform start-up which received funding and office space from Naver D2 and won Naver D2 Campus Tech Attack Program.",
          "Developed FB messenger chatbot for CampusQ using Node.js and assisted designing UI and developing front/backend of CampusQ in React, Redux, and SQL."
        ]
      },
      {
        year: "2019",
        title: "Republic of Korea Marine Corps",
        cat_subtitle: "Sergent | Informaion Operations Officer, Corps Translator(Eng-Kor)",
        info: [
          "Major General-level Commendation(2nd Marine Division Commandor)", "Lieutenant General-level Commendation(ROK Marine Corps Commandant)"
        ]
      }
    ]
  })
};
</script>