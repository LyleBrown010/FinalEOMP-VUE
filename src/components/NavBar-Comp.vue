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
    padding: 0.5%;
    font-weight: 500;
    position: relative;
}


#links::after{
    content: '';
    opacity: 0;
    transition: all 0.2s;
    height: 2px;
    width: 100%;
    background-color: green;
    position: absolute;
    bottom: 0;
    left: 0;
}

#links:hover::after{
    opacity: 1;
    
}

@media only screen and (max-width:599px){
    .topnav{
        margin-left: 1%;
        margin-right: 1%;
    }
}

@media only screen and (max-width:450px){
    .topnav{
        margin: 1%;
        font-size: 10px;
    }
}
@media only screen and (max-width:318px){
    .topnav{
        margin: 1%;
        font-size: 8px;
    }
}
</style>