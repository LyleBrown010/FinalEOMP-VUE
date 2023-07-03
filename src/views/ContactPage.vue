<template>
    <div class="container">
        <div class="row">
            <!-- <div class="col-6 col-md-12"> -->
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
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
</style>