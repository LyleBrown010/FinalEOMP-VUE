<template>
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
</template>

<script>
export default {
    props: ['softSkill']
}
</script>