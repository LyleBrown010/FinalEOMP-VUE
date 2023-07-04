<template>
    <div class="contact-page">
        <div class="contact-form">
            <form action="https://formspree.io/f/xqkorzdj" method="POST" id="form">
            <label>Your Name: </label>
            <input type="text" name="name">
            <label>Your Email: </label>
            <input type="email" name="email">
            <label>Your Message:</label>
            <textarea name="message"></textarea><br>
            <button id="button-submit" type="submit">Send</button>
            </form>
        </div>
        <div>
            <div class="card-1 text-center">
                  <img id="myphoto-1" class="center image-fluid" src="https://i.postimg.cc/Hs3cRXc1/C12-C-1-Lyle-Brown-2-crop.jpg" alt="photo">
                  <h4 class="text-center p-4 fs-1 text-black">Lyle Brown</h4>
                  <p class="title text-center text-black" >Aspiring Full-Stack Developer</p><br>
                  <a class="btn btn-primary" href="mailto: lylebrown010@gmail.com" role="button" target="_blank"><i class="fa fa-envelope"></i> </a>
                  <a class="btn btn-primary" href="https://github.com/LyleBrown010" role="button" target="_blank"><i class="fa fa-github"></i> </a>
                  <a class="btn btn-primary" href="https://linkedin.com/in/lylebrown010" role="button" target="_blank"><i class="fa fa-linkedin-square"></i> </a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.contact-page{
    display: grid;
    grid-template-columns: auto auto;
    margin: 5%;

}
.contact-form{
    padding: 10px;
    height: 80%;
    border: 2px solid black;
    border-radius: 50px;

}

#outer-contactform{
    background-color: #FFEEB3;
    height: 500px;
}

#form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
}

input{
    border: solid;
    border-radius: 20px;
    padding: 2%;
    width: 80%;
}

textarea{
    border: solid;
    border-radius: 20px;
    padding: 2%;
    width: 80%;
    height: 100% !important;
}

#button-submit{
    border: solid;
    padding: 5px;
    border-radius: 12px;
}

#myphoto-1{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 2px solid !important;
}
#icon-email{
    width: 20px;
    height: 20px;
}
#icon-location{
    width: 20px;
    height: 20px;
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

.title {
    color: grey;
    font-size: 18px;
}
  
a {
    text-decoration: none;
    font-size: 22px;
    color: black;
}
  
</style>