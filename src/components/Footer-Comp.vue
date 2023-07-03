<template>
<br><br><br>
    <div id="footer" class="text-center">
        <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
        </div>
        <p>Copyright &copy; 2023, Lyle Brown 🤠. <br>
        </p>
            
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
#footer{
    position:relative;
    width: 100%;
    background-color: black;
    height: 70px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    color: white;
    background-color: black;
}

#footer p:hover{
    transform: translateX(-10px);
}

#footer .wave{
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    background: url(C:\Users\Student\Development\VueJs\lylebrown-portfolio\src\assets\wave.png);
    background-size: 1000px 100px;
}

#footer .wave#wave1{
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: animateWave 4s linear infinite;
}
#footer .wave#wave2{
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animateWave_02 4s linear infinite;
}
#footer .wave#wave3{
    z-index: 1000;
    opacity: 0.25;
    bottom: 15px;
    animation: animateWave 3s linear infinite;
}
#footer .wave#wave4{
    z-index: 999;
    opacity: 0.75;
    bottom: 10px;
    animation: animateWave_02 3s linear infinite;
}

@keyframes animateWave{
    0%{
        background-position-x: 1000px;
    }
    100%{
        background-position-x: 0px;
    }
}
@keyframes animateWave_02{
    0%{
        background-position-x: 0px;
    }
    100%{
        background-position-x: 1000px;
    }
}
</style>