import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
  },

  mutations: {
    setProjects: (state,projects) => {
      state.projects = projects;
    },
  },

  actions: {
    getProjects: async(context) => {
      fetch("https://lylebrown010.github.io/Data/projects.json")
      .then ((res) => res.json())
      .then ((projects) => context.commit("setProjects", projects));
    }
  },
})
