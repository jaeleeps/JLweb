import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    isIntersectingHome: false,
    isIntersectingAbout: false,
    isIntersectingProjects: false,
    isIntersectingDesign: false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
