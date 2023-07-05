<template>
    <div v-if="projects" class="flex-container">
        <projectsCardComp v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading .........</div>

</template>

<script>
import projectCardComp from '@/components/Projects-Comp.vue'
export default {
    computed: {
        projects(){
            return this.$store.state.projects
        }
    }, 
    mounted(){
        this.$store.dispatch("getProjects")
    }, 

    components: {projectCardComp}
}
</script>