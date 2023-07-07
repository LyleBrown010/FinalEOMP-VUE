<template>
    <NavBarComp/>
    <router-view/>
    <FooterComp/>
</template>
<script>
import NavBarComp from './components/NavBar-Comp.vue';
import FooterComp from './components/Footer-Comp.vue';
export default {
  components: {NavBarComp, FooterComp}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

*{
  background-color: #F8F6DD;
  font-family: 'Courier Prime', monospace;
}
</style>