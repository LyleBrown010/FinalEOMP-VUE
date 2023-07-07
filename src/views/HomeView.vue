<template>
  <br />
  <div class="container-fluid">
    <div class="coverpage" id="cover-page">
      <h1 class="myName">LYLE BROWN.</h1>
      <p class="myIntro">Aspiring Full Stack Developer.</p>
    </div>
  </div>
</template>
<style scoped>
.coverpage {
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: underline;
  text-decoration-color: #45a245;
}

#cover-page {
  height: 72vh;
}

img {
  width: 50%;
  height: 60%;
  display: flex;
}

.myName {
  font-size: 100px;
  font-family: "Caprasimo", cursive;
  color: black;
  padding-top: 10%;
  background: transparent;
}

@media only screen and (max-width: 450px) {
  .myName {
    font-size: 60px;
  }
  .myIntro {
    font-size: 20px;
  }
}

.myIntro {
  font-size: 40px;
  font-family: "Caprasimo", cursive;
  color: black;
  background: transparent;
}
</style>
