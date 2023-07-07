<template>
    <div class="contactMe">Contact Me!</div>
    <div class="contact-page">
        <div class="contact-form">
            <form action="https://formspree.io/f/xqkorzdj" method="POST" id="form">
            <label>Your Name: </label>
            <input type="text" name="name" required>
            <label>Your Email: </label>
            <input type="email" name="email" required>
            <label>Your Message:</label>
            <textarea name="message" required></textarea><br>
            <input id="btnAction" type="submit" value="Submit"><br>
            <input id="btnAction" type="reset" value="Reset">
            </form>
        </div>
        <div>
            <div class="card-1 text-center">
                    <img id="myphoto-1" class="center image-fluid" src="https://i.postimg.cc/Hs3cRXc1/C12-C-1-Lyle-Brown-2-crop.jpg" alt="photo">
                    <h4 id="myName" class="text-center p-4 fs-1 text-black">Lyle Brown</h4>
                    <p class="title text-center text-black" >Aspiring Full-Stack Developer</p><br>
                    <a id="icons" class="btn btn-success" href="mailto: lylebrown010@gmail.com" role="button" target="_blank"><i class="fa-solid fa-envelope" style="color: #000000;"></i></a>
                    <a id="icons" class="btn btn-success" href="https://github.com/LyleBrown010" role="button" target="_blank"><i class="fa fa-github"></i> </a>
                    <a id="icons" class="btn btn-success" href="https://linkedin.com/in/lylebrown010" role="button" target="_blank"><i class="fa fa-linkedin-square"></i> </a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
i{
    background-color: #c1fdc1;
}

#myName{
  font-size: 100px;
  font-family: 'Caprasimo', cursive;
  color: black;
}
#btnAction{
    font-weight: bold;
    color: #45a245;
    border: 3px solid #45a245 ;
    background-color: #c1fdc1;
}
label{
    font-weight: bold;
    float: left;
}

.contactMe{
    font-family: 'Caprasimo', cursive;
    font-size: 80px;
    text-align: center;
}
.contact-page{
    display: grid;
    grid-template-columns: auto auto;
    margin: 2%;
    height: 70vh;
}

.contact-form{
    padding: 10px;
    height: 100%;
    border: 5px solid black;
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
    border: 4px solid black !important;
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
    background-color: #c1fdc1;
    border: 2px solid #45a245;
    margin: 1%;
}
  
</style>