<template>
<div v-if="educations" class="flex-container">
    <div v-for="education of educations" :key="education.name">
        <div class="h-100 p-5 bg-black border border-4 border-primary rounded-3 mt-3">
        <h2 class="fs-1 fw-bolder text-white">Education</h2><br>
        <div class="main-timeline">
            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                            <span class="date-start text-white">{{education.date}}</span>
                        </span>
                    </div>
                </div>
                <div class="timeline-content">
                    <h5 class="text-white">{{education.name}}</h5>
                    <p class="description text-white">{{education.description}}</p>
                </div>
            </div>
        </div>
    </div>    
    </div> 
</div>
<div v-else>Loading Education...</div>

<div v-if="experiences" class="flex-container">
    <div v-for="experience of experiences" :key="experience.name">
        <div class="h-100 p-5 bg-black border border-4 border-primary rounded-3 mt-3" >
        <h2 class=" fs-1 fw-bolder text-white">Experience</h2><br>
        <h4 class="fs-4 fw-bold text-primary">ICT Education Assistant</h4> 
        <h5 class="fs-5 text-white">Eastville Primary School</h5>  
        <h5 class="text-secondary">February 2023- March 2023 </h5>
        <p id="p" class="fs-6 text-white">Provided technical support and managed internal ICT systems <br>
        Reason for leaving: Joined Life Choices Coding Academy</p><br>
        </div>
    </div> 
</div>
<div v-else>Loading Experience...</div>

<div v-if="skills" class="flex-container">
    <div v-for="skill of skills" :key="skill.name">
        <div class="h-100 p-5 bg-black border border-4 border-primary rounded-3 mt-3" id="skills">
    <h2 class="fs-1 fw-bolder text-black">Skills</h2><br>
    <h4 class="text-black">{{skill.name}}</h4>
    <div class="progress">
        <div
        class="progress-bar"
        role="progressbar"
        style="width: 84%"
        aria-valuenow="25"

        aria-valuemin="0"
        aria-valuemax="100">
        <p class="text-black">{{skill.rating}}</p>
        </div>
    </div>
</div>
    </div> 
</div>
<div v-else>Loading Skills...</div>

<div v-if="softSkills" class="flex-container">
    <div v-for="softSkill of softSkills" :key="softSkill.name">
        <h4 class="text-white">{{softSkill.name}}</h4>
<div class="progress">
    <div
    class="progress-bar"
    role="progressbar"
    style="width: 84%"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100">
    {{softSkill.rating}}
    </div>
</div>
    </div> 
</div>
<div v-else>Loading Soft Skills...</div>



</template>

<script>
// import educationCardComp from '@/components/Education-Comp.vue'
// import experienceCardComp from '@/components/Experience-Comp.vue'
// import skillCardComp from '@/components/Skills-Comp.vue'
// import softSkillCardComp from '@/components/SoftSkills-Comp.vue'

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
            return this.$store.state.softSkills
        }
    },
    
    mounted(){
        this.$store.dispatch("fetchEducations")
        this.$store.dispatch("fetchExperiences")
        this.$store.dispatch("fetchSkills")
        this.$store.dispatch("fetchsoftSkills")

    }, 

    // components:{educationCardComp, experienceCardComp, skillCardComp, softSkillCardComp}
}
</script>

<style scoped>
.main-timeline{
    position: relative;
}

.main-timeline:before{
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background: #c6c6c6;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.main-timeline .timeline{
    margin-bottom: 40px;
    position: relative;
}

.main-timeline .timeline:after{
    content: "";
    display: block;
    clear: both;
} 

.main-timeline .icon{
    width: 18px;
    height: 18px;
    line-height: 18px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
} 

.main-timeline .icon:before,
.main-timeline .icon:after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-out 0s;
} 

.main-timeline .icon:before{
    background: #000000;
    border: 2px solid #232323;
    left: -3px;
} 

.main-timeline .icon:after{
    border: 2px solid #000000;
    left: 3px;
} 

.main-timeline .timeline:hover .icon:before{
    left: 3px;
} 

.main-timeline .timeline:hover .icon:after{
    left: -3px;
} 

.main-timeline .date-content{
    width: 50%;
    float:left;
    margin-top: 22px;
    position: relative;
} 

.main-timeline .date-content:before{
    content: "";
    width: 36.5%;
    height: 2px;
    background: #000000;
    margin: auto 0;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
} 

.main-timeline .date-outer{
    width: 125px;
    height: 125px;
    font-size: 16px;
    text-align: center;
    margin: auto;
    z-index: 1;
} 


.main-timeline .icon:before {
    background: #000000;
    border: 2px solid black;
    left: -3px
} 

.main-timeline .icon:after {
    border: 2px solid blue;
    left: 3px
} 

.main-timeline .timeline:hover .icon:before {
    left: 3px
}

.main-timeline .timeline:hover .icon:after {
    left: -3px
} 

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
    content: "";
    width: 125px;
    height: 125px;
    margin: 0 auto;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.5s ease-out 0s
} 

.main-timeline .date-outer:before {
    background: #000000;
    border: 2px solid #232323;
    left: -6px
} 

.main-timeline .date-outer:after {
    border: 2px solid blue;
    left: 6px
} 

.main-timeline .timeline:hover .date-outer:before {
    left: 6px
} 

.main-timeline .timeline:hover .date-outer:after {
    left: -6px
} 

.main-timeline .date {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 27%;
    left: 0
} 

.main-timeline .timeline-content {
    width: 50%;
    padding: 20px 0 20px 50px;
    float: right
} 
    
</style>