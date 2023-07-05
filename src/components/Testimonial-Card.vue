<template>
    <router-link :to="{name: 'testimonial', params:{id: testimonial.id}}" id="card" >
        <div class="row">
            <div class="" id="card-product">
                <img :src="testimonial.image" :alt="testimonial.name">
                <h3 class="text-black">{{testimonial.name}}</h3>
                <p class="text-black">{{testimonial.message}}</p>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ["testimonial"]
}
</script>

<style scoped>
#card-product{
    border: 2px solid black;
    border-radius: 12px; 
    height: 350px; 
    margin: 5%;
    background-color: white;
}
</style>