<template>
<div class="text-center" ><strong id="heading">PROJECTS</strong></div>
<div v-if="projects" class="m-2 p-3 d-flex flex-wrap justify-content-center">
    <div v-for="project of projects" :key="project.id"      :project="project" id="project-card" class="card m-3 col-5 p-1">
        <div id="links" class="d-flex p-0 gap-2 justify-content-center">
            <a :href="project.netlify" target="_blank"><button>NETLIFY</button></a>
            <a :href="project.github" target="_blank"><button>GITHUB</button></a>
        </div>
        <h5 class="text-center pt-3" id="header" >{{ project.name }}</h5>
        <img :src="project.image" :alt="project.title"     class="d-block w-100" style="width: 100%; height: 100%">
        <p class="text-center">[{{ project.description }}/]</p>
    </div>
</div>
<div v-else>Loading Projects</div> 

</template>

<script>
// import projectCardComp from '@/components/Projects-Comp.vue'
export default {
    computed: {
        projects(){
            return this.$store.state.projects
        }
    }, 
    mounted(){
        this.$store.dispatch("fetchProjects")
    }, 

    // components: {projectCardComp}
}
</script>

<style scoped>
#header{
    font-weight: bold;
}
#heading{
    font-family: 'Caprasimo', cursive;
    font-size: 80px;
    text-align: center;
}
#project-card{
    background-color: #F8F6DD;
    border: 2px solid black;
}
a{
    margin: 2%;
}

button{
    border-radius: 8px;
    color: #45a245;
    border: 3px solid #45a245 ;
    background-color: #c1fdc1;
}

#links{
    border-radius: 15px;
}
</style>