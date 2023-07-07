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
</div>

<div class="row">
    <div class="col-md-4" id="skills">
        <div class="h-100 p-5 border border-4 border-primary rounded-3 mt-3"
            id="skills">
            <h2 class="fs-1 fw-bolder text-white">Skills</h2><br>
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
                    style="width: 82%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    82%
                </div>
            </div><br />
            <h4 class="text-white">JavaScript</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 82%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    82%
                </div>
            </div><br />
            <h4 class="text-white">Vue.Js</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 82%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    82%
                </div>
            </div><br />
            <h4 class="text-white">BootStrap</h4>
            <div class="progress">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 83%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100">
                    83%
                </div>
            </div><br /> <br>
        </div>
    </div>

    <div class="col-md-4" id="softSkills">
        <div class="content">
            <div id="block" class="block-1">Block 1</div>
            <div id="block" class="block-2">Block 2</div>
            <div id="block" class="block-3">Block 3</div>
            <div id="block" class="block-4">Block 4</div>
            <div id="block" class="block-5">Block 5</div>
            <div id="block" class="block-6">Block 6</div>
        </div>
    </div>
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
        skills(){
            return this.$store.state.skills
        }
    },
    
    mounted(){
        this.$store.dispatch("fetchEducations")
        this.$store.dispatch("fetchExperiences")
        this.$store.dispatch("fetchSkills")

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

.progress-bar{
    background-color:#c1fdc1; 
    border: 2px solid #45a245;
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
    transform: translate3d(0, -1px, 0) scale(1.03);
    transition: all .4s ease;
}

.block-1{
    width: 33%;
    height: 50%;
    background-color: #45a245;
    left: 0;
    top: 0;
    position: absolute;
    line-height: 100px;
}
.block-2{
    width: 33%;
    height: 50%;
    background-color: #c1fdc1;
    left: 0;
    top: 50%;
    position: absolute;
    line-height: 100px;
}
.block-3{
    width: 34%;
    height: 50%;
    background-color: #45a245;
    left: 33%;
    top: 50%;
    position: absolute;
    line-height: 100px;
}
.block-4{
    width: 34%;
    height: 50%;
    background-color: #c1fdc1;
    left: 33%;
    top: 0;
    position: absolute;
    line-height: 100px;
}
.block-5{
    width: 33%;
    height: 50%;
    background-color: #c1fdc1;
    left: 67%;
    top: 50%;
    position: absolute;
    line-height: 100px;
}
.block-6{
    width: 33%;
    height: 50%;
    background-color: #45a245;
    left: 67%;
    top: 0;
    position: absolute;
    line-height: 100px;
}
    
</style>