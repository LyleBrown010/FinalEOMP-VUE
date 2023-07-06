<template>
    <div>
        <a href="{{project.netlify}}"><button>NETLIFY</button></a>
        <a href="{{project.github}}"><button>GITHUB</button></a>
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