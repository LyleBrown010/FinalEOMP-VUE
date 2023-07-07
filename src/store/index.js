import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials: null,
  },

  mutations: {
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials; 
    }
  },
  actions: {
    getTestimonials: async(context) => {
      fetch("https://lylebrown010.github.io/Data/testimonials.json")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials));
    }
  },
})
