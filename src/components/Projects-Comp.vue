<template>
    <div>
        <button>NETLIFY</button>
        <button>GITHUB</button>
    </div>
    <strong>{{project.name}}</strong>
    <img :src="project.image" :alt="project.name">
    <p>{{project.description}}</p>
</template>

<script>
export default {
    props: ["project"]
}
</script>