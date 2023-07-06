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
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    }
  },
});
