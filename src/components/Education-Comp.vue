<template>
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
</template>
<script>
export default {
    props: ["education"]
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

