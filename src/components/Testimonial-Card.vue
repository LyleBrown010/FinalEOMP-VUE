<template>
    <router-link :to="{name: 'testimonials', params:{id: testimonials.id}}" id="card" >
        <div class="row">
            <div class="" id="card-product">
                <img :src="testimonials.image" :alt="testimonials.name">
                <h3 class="text-black">{{testimonials.name}}</h3>
                <p class="text-black">Price: R {{testimonials.price}}</p>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ["testimonials"]
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