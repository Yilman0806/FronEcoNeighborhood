<template>
    <header id="header">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">
        <div class="conheader">
            <h1>Menos residuos, más recompensas</h1>
            <div class="conButon">
                <button @click="mandarLongIn" class="LongButton">Long in</button>
                <button @click="mandarRegistro" class="SignButton">Sign up</button>
                <router-view></router-view>
            </div>
        </div>
    </header>

    <div class="conGmin">
        <div class="conPmin">
            <a href="#conQuehacemos">Tipos</a>
            <a href="#separacion">¿Como separar?</a>
            <a href="#conCalendario">Calendario</a>
            <a href="#importancia">Importancia</a>
            <a href="#footer">Contactanos</a>
        </div>
    </div>
    
    <div id="conQuehacemos">
        <h1>¿Que tipos de residuos hay?</h1>
        <div class="conPHacemos">
            <img src="../assets/img/desechos.webp" alt="">
            <p>Orgánica: Residuos biodegradables de origen natural,<br> como restos de alimentos y plantas. <br>
                <br>
                Inorgánica reciclable:Materiales no biodegradables que<br> pueden ser reciclados, como papel, vidrio y metales. <br>
                <br>
                Inorgánica NO reciclable:Residuos que no se pueden<br> reciclar ni biodegradar, como ciertos plásticos y cerámica.
            </p>
        </div>
    </div>

    <div id="separacion">
        <h1>¿Como separar los residuos?</h1>
        <img src="../assets/img/residuos-removebg-preview.png" alt="">
    </div>

    <div id="conCalendario">
        <h1>Calendario Mes</h1>

        <img src="../assets/img/calendario.webp" alt="">

        <p>Los días Martes, Jueves y Sabados del mes de Septiembre pasan los recolectores de basura</p>
    </div>

    <div id="importancia">
        <h1>La importancia del reciclaje</h1>
        <p>Reciclar es crucial porque reduce la cantidad de residuos en vertederos, conserva recursos al reutilizar materiales, ahorra energía y disminuye la contaminación. Además, fomenta la economía al crear empleos en la industria del reciclaje y promueve una conciencia social sobre la sostenibilidad. En resumen, el reciclaje beneficia al medio ambiente, a la economía y a la comunidad.</p>
        <img src="../assets/img/planeta-limpio.jpg" alt="">
    </div>
    <button class="floating-btn" @click="handleClick">
        <slot>+</slot> <!-- Permite insertar un contenido personalizado, por ejemplo, un ícono -->
    </button>
    <footer id="footer">
        <div class="contactos">
            <h2>Contactanos</h2>
            <h4>GMAIL : eco.hood.proyect@gmail.com</h4>
            <h4>WhatsApp : +57 301 657 6251</h4>
            <h4>Telefono : 601 93877 73473</h4>
        </div>
        <div id="redesOciales">
            <h2>Redes Sociales</h2>
            <div class="redesImg">
                <img class="Ifacebook" src="../assets/img/icons8-facebook-50.png" alt="">
                <img class="Iinsta" src="../assets/img/icons8-insta-48.png" alt="">
                <img class="Ix" src="../assets/img/icons8-x-50.png" alt="">
                <img class="Itiktok" src="../assets/img/icons8-tik-tok-24.png" alt="">
            </div>
        </div>
    </footer>
</template>




<script>
export default{
    methods: {
        mandarRegistro(){
            this.$router.push('/registro');
        },
        mandarLongIn(){
            this.$router.push('/loginUsu');
        },
    },
}
</script>


<style>
#header{
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#header img{
    width: 10%;
    border-radius: 10px;
}
.conButon{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 100px;
    width: 30%;
    
}

#header button:hover{
    transform: scale(1.1);
}

.LongButton{
    width: 30%;
    height: 40px;
    background-color: rgba(104, 150, 46, 1);
    border-radius: 10px;
    border:  2px solid black;
    padding: 5px 10px;
    font-family: 'Josefin Sans';
    transition: all 1.2s;
    cursor: pointer;
}
.SignButton{
    width: 30%;
    height: 40px;
    border-radius: 10px;
    border:  2px solid rgba(104, 150, 46, 1);
    padding: 5px 10px;
    color: white;
    font-family: 'Josefin Sans';
    transition: all 1.2s;
    cursor: pointer;
}
.conheader{
    width: 70%;
    display: flex;
    justify-content: center;
}
.conGmin{
    width: 100%;
    background-color: white;
}
.conPmin{
    width: 80%;
    height: 40px;
    border-radius: 0px 0px 10px 10px;
    background-color: rgba(104, 150, 46, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.conPmin a{
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition: all 1.2s;
}
.conPmin a:hover{
    transform: scale(1.1);
}
#conQuehacemos{
    background-color: rgb(255, 255, 255);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 50px;
}
.conPHacemos{
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.conPHacemos img{
    width: 20%;
    border-radius: 10px;
}
.conPHacemos p{
    font-size: 23px;
}
#separacion{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    padding-top: 100px;
}
#separacion img{
    margin-top: 30px;
}
#conCalendario{
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px;
}
#conCalendario img{
    width: 80%;
}
#conCalendario p{
    font-size: 45px;
    text-align: center;
}
#importancia{
    background-color: white;
    width: 100%;
    text-align: center;
}
#importancia p{
    width: 70%;
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 40px;
}
#importancia img{
    border-radius: 10px;
    width: 50%;
    margin-bottom: 30px;
}
#footer{
    display: flex;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.contactos h2{
    text-align: center;
    margin-bottom: 20px;
}
.contactos h4{
    margin-bottom: 8px;
}
.redesOciales{
    width: 18%;
}
.redesOciales h2{
    text-align: center;
    margin-bottom: 20px;
}
.redesImg{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Ifacebook{
    width: 20%;
}
.Iinsta{
    width: 20%;
}
.Ix{
    width: 19%;
}
.Itiktok{
    width: 20%;
}


</style>