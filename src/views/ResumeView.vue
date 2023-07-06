<template>
<div class="row">
    <div class="col-md-4" id="education"><strong>EDUCATION</strong>
        <div class="timeline">
            <div v-if="educations" class="flex-container">
                <div v-for="education of educations" :key="education.name">
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <span class="timeline-marker"></span>
                            <p class="timeline-title">{{education.name}}</p>
                            <p class="timeline-date">{{education.date}}</p>
                            <p>{{education.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="col-md-4" id="experience">
        <div class="h-100 p-5 border border-4 border-primary rounded-3 mt-3" > 
            <h2 class=" fs-1 fw-bolder">Experience</h2><br>
            <div v-if="experiences" class="flex-container">
                <div v-for="experience of experiences" :key="experience.name">
                    <h4 class="fs-4 fw-bold text-primary">{{experience.jobTitle}}</h4> 
                    <h5 class="fs-5 text-white">{{experience.company}}</h5>  
                    <h5 class="text-secondary">{{experience.date}} </h5>
                    <p id="p" class="fs-6 text-white">{{experience.description}} <br>
                        Reason for leaving: {{experience.reason}} </p><br>
                </div>
            </div>
            <div v-else>Loading Experience...</div>
        </div>
    </div>


    <div class="col-md-4" id="skills">
        <div></div>
        <div class="block">
            <p></p>
        </div>



        <!-- <div v-if="skills" class="flex-container">
            <div v-for="skill of skills" :key="skill.name">
                <div class="h-100 p-5 border border-4 border-primary rounded-3 mt-3" id="skills">
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
        <div v-else>Loading Skills...</div> -->
    </div>

    <div class="col-md-4" id="skills">
        <div v-if="softSkills" class="flex-container">
            <div v-for="softSkill of softSkills" :key="softSkill.name">
                <div class="content">
                    <div class="block">
                        {{softSkill.name}}
                        <br>
                        {{softSkill.rating}}
                    </div>
                </div>
            </div>
        </div>
            
        
    </div>
</div>






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
    
    </div>
</div>
    </div> 
</div>
<div v-else>Loading Soft Skills...</div>



</template>

<script>

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
}
</script>

<style scoped>
*{
    background-color: #f8f6dd;
    color: black !important;
}

.timeline {
  padding: 10px 10px;
  border-radius: 12px;
  background-color: #f8f6dd;
  border: 2px solid black;
  margin: 1%;
}

.timeline-content .timeline-header, 
.timeline-content .timeline-body {
  padding-left: 26px;
  border-left: 3px solid blue;
}

.timeline-body {
  padding-bottom:1px;
}

.timeline-header {
  position: relative;
  display: grid;
  padding-top: 10px;
  padding-bottom: 10px;
}

.timeline-title {
  font-weight: 600;
  font-size: 20px;
  border-bottom: 1px solid green;
}

.timeline-marker {
  display:block;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50% / 50%;
  background: blue;
  left: -16px;
  top: 50%;
  transform: translate(50%,-50%);
}

.content{
    height: 400px;
    width: 100%;
    position: relative;
    display: block;
    margin: 50px auto;
    color: #fff;
}

.block{
    text-align: center;
    width: 33.33%;
    height: 50%;
    background-color: aqua;
    left: 0;
    top: 0;
    position: absolute;
}
    
</style>