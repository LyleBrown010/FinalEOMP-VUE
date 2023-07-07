import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials: null,
    educations: null, 
    experiences: null,
    projects: null,
  },

  mutations: {
    setTestimonials: (state, value) => {
      state.testimonials = value; 
    },
    setProjects: (state,value) => {
      state.projects = value;
    },
    setEducations: (state, value) => {
      state.educations = value;
    },
    setExperiences: (state, value) => {
      state.experiences = value;
    },
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
    async fetchTestimonials (context){
      try {
        let {testimonials} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (testimonials){
          context.commit("setTestimonials", testimonials)
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
    async fetchProjects (context){
      try{
        let {projects} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (projects){
          context.commit("setProjects", projects)
        }
        else {alert("error")}
      }
      catch(e){
        console.error(error)
      }
    }

  },
});
