import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
  },

  mutations: {
    setProjects: (state,value) => {
      state.projects = value;
    },
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
    }
  },
})
