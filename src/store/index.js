import { createStore } from 'vuex'

export default createStore({
  state: {
    educations: null, 
    experiences: null,
    skills: null, 
    softSkills: null,
  },
  mutations: {
    setEducations: (state, value) => {
      state.educations = value;
    },
    
    setExperiences: (state, value) => {
      state.experiences = value;
    },

    setSkills: (state, value) => {
      state.skills = value; 
    }, 

    setsoftSkills: (state, value) => {
      state.softSkills = value; 
    }
  },
  actions: {
    async fetchEducations (context){
      try {
        let {educations} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (educations){
          context.commit("setEducations", educations)
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },
    async fetchExperiences (context){
      try {
        let {experiences} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (experiences){
          context.commit("setExperiences", experiences)
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },
    async fetchSkills (context){
      try {
        let {skills} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (skills){
          context.commit("setSkills", skills)
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },
    async fetchsoftSkills (context){
      try {
        let {softSkills} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (softSkills){
          context.commit("setsoftSkills", softSkills)
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },


  }, 
})
