<template>
    <div v-if="testimonials" class="flex-container" id="testimonials">
        <CardComp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
    </div>
    <div v-else> Loading ... </div>
</template>
<script>
import CardComp from '@/components/Testimonial-Card.vue'

export default {
    computed: {
        testimonials (){
            return this.$store.state.testimonials
        }
    },
    mounted(){
        this.$store.dispatch("getTestimonials")
    },

    components:{CardComp}

}
</script>
