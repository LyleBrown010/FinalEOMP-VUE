import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials: null,
  },

  mutations: {
    setTestimonials: (state, value) => {
      state.testimonials = value; 
    }
  },
  actions: { 
    async fetchTestimonials (context){
      try {
        let {testimonials} = await(await fetch("https://lylebrown010.github.io/Data/db.json")).json()
        if (testimonials){
          context.commit("setTestimonials", testimonials)

    projects: null,
  },

  mutations: {
    setProjects: (state,value) => {
      state.projects = value;
    },

    educations: null, 
    experiences: null,
    testimonials: null,

  },

  mutations: {

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
  
  }, 
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials; 
    }

  },

  actions: {
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
    getTestimonials: async(context) => {
      fetch("https://lylebrown010.github.io/Data/testimonials.json")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials));
    }
  },
});
