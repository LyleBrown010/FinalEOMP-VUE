import { createStore } from 'vuex'

export default createStore({
  state: {
    educations: null, 
    experiences: null,
    skills: null, 
    softSkills: null,
  },
  mutations: {
    setEducations: (state, educations) => {
      state.educations = educations;
    },
    
    setExperiences: (state, experiences) => {
      state.experiences = experiences;
    },

    setSkills: (state, skills) => {
      state.skills = skills; 
    }, 

    setsoftSkills: (state, softSkills) => {
      state.softSkills = softSkills; 
    }
  },
  actions: {
    getEducations: async (context) => {
      fetch("https://lylebrown010.github.io/Data/education.json")
      .then((res) => res.json())
      .then((educations) => context.commit("setEducations", educations));
    },

    getExperiences: async (context) => {
      fetch("https://lylebrown010.github.io/Data/experience.json")
      .then((res) => res.json())
      .then((experiences) => context.commit("setExperiences", experiences));
    }, 

    getSkills: async (context) => {
      fetch("https://lylebrown010.github.io/Data/skills.json")
      .then((res) => res.json())
      .then((skills) => context.commit("setSkills", skills));
    },

    getsoftSkills: async (context) => {
      fetch("https://lylebrown010.github.io/Data/softSkills.json")
      .then((res) => res.json())
      .then((softSkills) => context.commit("setsoftSkills", softSkills));
    }



  }, 
})
