
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
        <div class="col-md-8" id="skills"><strong>SKILLS</strong>
        <div class=" p-4 border border-2 border-black rounded-3"
            id="skills">
            <h4 class="text-white">HTML</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 75%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <span>Advanced</span>
                </div>
            </div><br />
            <h4 class="text-white">CSS</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <span>Advanced</span>
                </div>
            </div><br />
            <h4 class="text-white">JavaScript</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 60%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <span>Intermediate</span>
                </div>
            </div><br />
            <h4 class="text-white">Vue.Js</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 60%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <span>Intermediate</span>
                </div>
            </div><br />
            <h4 class="text-white">BootStrap</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    <span>Advanced</span>
                </div>
            </div><br /> <br>
        </div>
    </div>

    <div class="col-md-12" id="softSkills"><strong>SOFT SKILLS</strong>
        <div class="content">
            <div id="block" class="block-1">
                Time Management [Advanced]
            </div>
            <div id="block" class="block-2">
                Team Work [Expert]
            </div>
            <div id="block" class="block-3">
                Communication [Advanced]
            </div>
            <div id="block" class="block-4">
                Critical Thinking [Intermediate]
            </div>
            <div id="block" class="block-5">
                Problem-solving [Advanced]
            </div>
            <div id="block" class="block-6">
                Adaptability [Advanced]
            </div>
        </div>
    </div>


    <div class="col-md-12" id="experience"><strong>MY WORK EXPERIENCE</strong>
        <div class="p-2 m-4 border border-2 border-black rounded-3" > 
            <div v-if="experiences" class="flex-container d-flex flex-wrap justify-content-evenly">
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
</div>

<div class="row">


    
</div>

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
    },
    
    mounted(){
        this.$store.dispatch("fetchEducations")
        this.$store.dispatch("fetchExperiences")

    }, 
}
</script>

<style scoped>
*{
    background-color: #f8f6dd;
    color: black !important;
}

strong{
    text-align: center;
    margin: auto;
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
  border-left: 3px solid #45a245;
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
  border-bottom: 1px solid #45a245;
}

.timeline-marker {
  display:block;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50% / 50%;
  left: -16px;
  top: 50%;
  transform: translate(50%,-50%);
  color: #45a245;
    border: 3px solid #45a245 ;
    background-color: #c1fdc1;
} 

.progress{
    border: 2px solid #45a245;
}

.progress-bar{
    background-color:#c1fdc1; 
    padding: 1px;
    border-radius: 12px;
}
span{
    background-color:#c1fdc1; 
    font-size: 12px;
    font-weight: bold;
}

.content{
    height: 200px;
    width: 90%;
    position: relative;
    display: block;
    margin: 50px auto;
    color: #fff;
}

#block{
    text-align: center;
    transition: all.5s ease;
}

#block:hover{
    transform: translate3d(0, -1px, 0) scale(1.05);
    transition: all .4s ease;
}

.block-1{
    width: 33%;
    height: 50%;
    background-color: #45a245;
    left: 0;
    top: 0;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    line-height: 100px;
}
.block-2{
    width: 33%;
    height: 50%;
    background-color: #c1fdc1;
    left: 0;
    top: 50%;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    line-height: 100px;
}
.block-3{
    width: 34%;
    height: 50%;
    background-color: #45a245;
    left: 33%;
    top: 50%;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    line-height: 100px;
}
.block-4{
    width: 34%;
    height: 50%;
    background-color: #c1fdc1;
    left: 33%;
    top: 0;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    line-height: 100px;
}
.block-5{
    width: 33%;
    height: 50%;
    background-color: #c1fdc1;
    left: 67%;
    top: 50%;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    line-height: 100px;
}
.block-6{
    width: 33%;
    height: 50%;
    background-color: #45a245;
    left: 67%;
    top: 0;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    line-height: 100px;
}
    
</style>
