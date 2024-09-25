<template>
    <header id="header">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">
        <div class="conheader">
            <h1>Menos residuos, más recompensas</h1>
            <button class="Usuario">Usuario</button>
        </div>
    </header>

    <div id="conGmin">
        <div class="conPmin">
            <a href="#conQuehacemos">Tipos</a>
            <a href="#separacion">¿Como separar?</a>
            <a href="#conCalendario">Calendario</a>
            <a href="#importancia">Importancia</a>
            <a href="#footer">Contactanos</a>
        </div>
    </div>

    <div id="conDenuncia">
        <button @click="openForm" class="btnDenuncia">Generar Reporte</button>
    </div>

    <div v-if="isFormVisible" class="form-container" @click.self="closeForm">
      <div class="form-content">
        <span @click="closeForm" class="close">&times;</span>
        <h2>Reporte</h2>
        <form @submit.prevent="submitForm" class="forReport">
            <label for="">Tipo residuo</label>
            <input type="password" id="text" v-model="formData.email" required><br><br>

            <label for="name">Tipo de bolsa:</label><br>
            <select name="" id="">
                <option value="">Bolsa negra</option>
                <option value="">Bolsa blanca</option>
                <option value="">Bolsa verde</option>

            </select><br><br>
            
            <button type="submit" class="btnReporte">Enviar</button>
        </form>
      </div>
    </div>

    <div id="conForComentarios">
        <form id="formDenuncia">
            <input type="text" placeholder="Decreto denuncia...">
            <button>Denunciar</button>
        </form>
    </div>

    <div id="comComentarios">
        <h1>Usuario</h1>
        <div class="Comentario">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus similique voluptate fuga in ut ab quisquam eligendi repudiandae error, reiciendis numquam deserunt eos, omnis ullam, veniam doloribus adipisci! Consequuntur.</p>
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

    <footer id="footer">
        <div class="contactos">
            <h2>Contactanos</h2>
            <h4>GMAIL : eco.hood.proyect@gmail.com</h4>
            <h4>WhatsApp : +57 301 657 6251</h4>
            <h4>Telefono : 601 93877 73473</h4>
        </div>
        <div class="redesOciales">
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

export default {
    data() {
        return {
            isFormVisible: false, // Controla la visibilidad del formulario
            formData: {
                name: '',
                email: ''
            }
        };
    },
    methods: {
        openForm() {
        this.isFormVisible = true; // Mostrar el formulario
        },
        closeForm() {
        this.isFormVisible = false; // Ocultar el formulario
        },
        submitForm() {
        console.log('Formulario enviado:', this.formData);
        // Aquí puedes agregar más lógica para manejar el formulario
        this.closeForm(); // Cierra el formulario después de enviarlo
        }
    }
};

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

.conheader button{
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
.conheader{
    width: 70%;
    display: flex;
    justify-content: center;
}
#conGmin{
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
#conDenuncia{
    background-color: white;
    padding: 50px;
    display: flex;
    justify-content: center;
}
.btnDenuncia{
    width: 80%;
    height: 80px;
    font-size: 30px;
    background-color: rgba(104, 150, 46, 1);
    border-radius: 10px;
    border:  2px solid black;
    padding: 5px 10px;
    font-family: 'Josefin Sans';
    cursor: pointer;
}

/* Contenedor del formulario */
.form-container {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  justify-content: center;
  align-items: center;
}

/* Contenido del formulario */
.form-content {
  background-color: rgba(104, 150, 46, 1);
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  text-align: center;
  position: relative;
}
.form-content h2{
    margin-bottom: 20px;
}
.forReport input{
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    padding-left: 10px;
    margin-top: 10px;
}
.forReport select{
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    padding-left: 10px;
}
/* Botón de cerrar */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}
.btnReporte{
    width: 20%;
    height: 35px;
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 10px;
    border:  2px solid black;
    padding: 5px 10px;
    font-family: 'Josefin Sans';
    cursor: pointer; 
    transition: all 1.2s;
}
.btnReporte:hover{
    transform: scale(1.1);
}
#conForComentarios{
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
#formDenuncia{
    width: 80%;
}
#formDenuncia input{
    width: 80%;
    border-radius: 5px;
    border: 1px solid black;
    height: 60px;
    padding-left: 10px;
}
#formDenuncia button{
    width: 15%;
    height: 40px;
    font-size: 20px;
    margin-left: 30px;
    background-color: rgba(104, 150, 46, 1);
    border-radius: 10px;
    border:  2px solid black;
    padding: 5px 10px;
    font-family: 'Josefin Sans';
    transition: all 1.2s;
    cursor: pointer;
}
#comComentarios{
    width: 100%;
    padding-top: 40px;
    background-color: white;
}
#comComentarios h1{
    margin-left: 140px;
}
.Comentario{
    width: 80%;
    background-color: rgb(202, 202, 202);
    padding: 20px;
    border-radius: 10px;
}
#conQuehacemos{
    background-color: white;
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
    justify-content: space-evenly;
    align-items: center;
    text-align:start;
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