<template>
  <h1 class="heading">Testimonials.</h1>
  <div
    v-if="testimonials"
    class="flex-container p-3 d-flex flex-wrap justify-content-center gap-5"
  >
    <div
      v-for="testimonial in testimonials"
      :key="testimonial.name"
      class="m-2 col-4"
      id="section"
    >
      <div class="blog-card">
        <div class="meta">
          <div class="photo">
            <img :src="testimonial.image" :alt="testimonial.name" />
          </div>
        </div>
        <div class="description">
          <h1 class="fw-bold" id="testName">{{ testimonial.name }}</h1>
          <h2 class="fs-6 fw-semibold" id="relation">
            {{ testimonial.relation }}
          </h2>
          <p class="fst-italic">"{{ testimonial.message }}"</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading ...</div>
</template>
<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
#relation {
  color: #45a245;
}
@media only screen and (max-width: 400px) {
  #relation {
    font-size: 10px;
  }
}

#testName {
  text-decoration: underline;
  text-decoration-color: #45a245;
}
@media only screen and (max-width: 546px) {
  #testName {
    font-size: 20px;
  }
}
@media only screen and (max-width: 400px) {
  #testName {
    font-size: 15px;
  }
}
.heading {
  font-family: "Caprasimo", cursive;
  font-size: 80px;
  text-align: center;
}
@media only screen and (max-width: 560px) {
  .heading {
    font-size: 40px;
  }
}

.blog-card {
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  border: 2px solid black;
  height: 100%;
}
@media only screen and (max-width: 750px) {
  .blog-card {
    width: 100%;
  }
}

img {
  width: 100%;
  height: 100%;
}

.meta {
  position: relative;
  z-index: 0;
  height: 275px;
}
@media only screen and (max-width: 900px) {
  .meta {
    height: 200px;
  }
}
@media only screen and (max-width: 700px) {
  .meta {
    height: 150px;
  }
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
  background: #f8f6dd;
  position: relative;
  z-index: 1;
}

p {
  position: relative;
  margin: 1rem 0 0;
}

@media only screen and (max-width: 560px) {
  #section {
    display: grid;
    grid-template-columns: auto;
    width: 50%;
  }
}
@media only screen and (min-width: 1245px) {
  #section {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 25%;
  }
}
</style>
