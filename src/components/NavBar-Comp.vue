<template>
    <nav>
        <div class="topnav">
            <router-link id="links" to="/">Home</router-link>
            <router-link id="links" to="/about">About</router-link>
            <router-link id="links" to="/resume">Resume</router-link>
            <router-link id="links" to="/projects">Projects</router-link>
            <router-link id="links" to="/testimonials">Testimonials</router-link>
            <router-link id="links" to="/contact">Contact</router-link>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.topnav{
    display: flex;
    justify-content: center;
    padding: 5px;
    border: 4px solid black;
    border-radius: 12px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
}

#links{
    margin: 5px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 12px;
    padding: 0.5%;

}
</style>