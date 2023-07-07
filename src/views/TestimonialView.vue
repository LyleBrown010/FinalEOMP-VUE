
<template>
    <h1>Testimonials</h1>
    <div v-if="testimonials" class="flex-container p-3 d-flex flex-wrap justify-content-center gap-5 ">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="m-2 col-4"> 
            <!-- <div class="row"> -->
                <!-- <div class="col-2" id="section"> -->
                    <div class="blog-card">
                        <div class="meta">
                            <div class="photo">
                                <img :src="testimonial.image" :alt="testimonial.name">
                            </div>
                        </div>
                        <div class="description">
                            <h1 class="fw-bold">{{testimonial.name}}</h1>
                            <h2 class="fs-6 text-secondary fw-semibold">{{testimonial.relation}}</h2>
                            <p class="fst-italic"> "{{testimonial.message}}"</p>
                        </div>
                    </div>
                <!-- </div> -->
            <!-- </div> -->
        </div>
    </div>
    <div v-else> Loading ... </div>
</template>
<script>

export default {
    computed: {
        testimonials (){
            return this.$store.state.testimonials
        }
    },
    mounted(){
        this.$store.dispatch("fetchTestimonials")
    }

    // components: {CardComp}

}
</script>

<style scoped>


.blog-card {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    width: 80%;
    border: 2px solid black;
    height: 100%;
}

img{
    width: 100%;
}


.meta {
    position: relative;
    z-index: 0;
    height: 275px;
}
.photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.description {
    padding: 1rem;
    background: #F8F6DD;
    position: relative;
    z-index: 1;
}

    
p {
    position: relative;
    margin: 1rem 0 0;
}

/* p:first-of-type {
  margin-top: 1.25rem;
  &:before {
    content: "";
    position: absolute;
    height: 5px;
    background: #3586ff;
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
  }
} */

    /* &:hover {
      .details {
        left: 0%;
      }
    } */

/* Star */
.checked {
    color: orange;
}
</style>

