<template>
<div v-if="educations" class="flex-container">
    <educationCardComp v-for="education of educations" :key="education.id" :education="education"/> 
</div>
<div v-else>Loading...</div>

<div v-if="experiences" class="flex-container">
    <experienceCardComp v-for="experience of experiences" :key="experience.id" :experience="experience"/> 
</div>
<div v-else>Loading...</div>

<div v-if="skills" class="flex-container">
    <skillCardComp v-for="skill of skills" :key="skill.id" :skill="skill"/> 
</div>
<div v-else>Loading...</div>

<div v-if="softSkills" class="flex-container">
    <softSkillCardComp v-for="softSkill of softSkills" :key="softSkill.id" :softSkill="softSkill"/> 
</div>
<div v-else>Loading...</div>



</template>

<script>
import educationCardComp from '@/components/Education-Comp.vue'
import experienceCardComp from '@/components/Experience-Comp.vue'
import skillCardComp from '@/components/Skills-Comp.vue'
import softSkillCardComp from '@/components/SoftSkills-Comp.vue'

export default {
    computed:{
        educations(){
            return this.$store.state.educations
        },
        experiences(){
            return this.$store.state.experiences
        },
        skills(){
            return this.$store.state.skills
        },
        softSkills(){
            return this.$store.state.softskills
        }
    },
    
    mounted(){
        this.$store.dispatch("getEducations")
        this.$store.dispatch("getExperiences")
        this.$store.dispatch("getSkills")
        this.$store.dispatch("getsoftSkills")

    }, 

    components:{educationCardComp, experienceCardComp, skillCardComp, softSkillCardComp}
}
</script>