<template>
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
</template>

<script>
export default {
    props: ["skill"]
}
</script>