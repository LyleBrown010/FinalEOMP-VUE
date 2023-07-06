<template>
    <div v-if="projects" class="flex-container">
        <div v-for="project of projects" :key="project.name">
            <div>
                <a href="{{project.netlify}}"><button>NETLIFY</button></a>
                <a href="{{project.github}}"><button>GITHUB</button></a>
            </div>
            <strong>{{project.name}}</strong>
            <img :src="project.image" :alt="project.name">
            <p>{{project.description}}</p>
        </div>
    </div>
    <div v-else>Loading .........</div>

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