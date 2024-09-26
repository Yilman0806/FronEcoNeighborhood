<template>
    <header id="header">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">
        <div class="conheader">
            <h1>Menos residuos, más recompensas</h1>
            <button class="Usuario" >{{ recibeDatos.nombre }} <p class="headerP">{{ recibeDatos.puntuacion_usuario }}</p></button>
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
            <form @submit.prevent="todasFun" class="forReport">
                <label for="">Tipo residuo</label>
                <select name="" id="" v-model="tipo_residuo">
                    <option value="Ordinario">Ordinario</option>
                    <option value="Reciclable">Reciclable</option>
                    <option value="Orgánico">Orgánico</option>
                </select><br><br>

                <label for="name">Tipo de bolsa:</label><br>
                <select name="" id="" v-model="tipo_bolsa">
                    <option value="Negra">Bolsa negra</option>
                    <option value="Blanca">Bolsa blanca</option>
                    <option value="Verde">Bolsa verde</option>
                </select><br><br>
                
                <button type="submit" class="btnReporte">Enviar</button>
            </form>
        </div>
    </div>

    <div id="conForComentarios">
        <form id="formDenuncia" @submit.prevent="todasFun">
            <input type="text" v-model="comentario" placeholder="Escribe tu denuncia...">
            <button type="submit">Denunciar</button>
        </form>
    </div>

    <div id="comComentarios">
        <div v-for="(comen,index) in comentarios"::key="index">
            <h1>{{ comen.nombre_usuario }}</h1>
            <div class="Comentario">
                <p>{{ comen.comentario }}</p>
            </div>
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
import { ref,onMounted } from 'vue';
import axios, { AxiosHeaders } from 'axios';
import Swal from 'sweetalert2';

export default {
    setup() {
        const isFormVisible = ref(false);
        const tipo_residuo = ref('');
        const tipo_bolsa = ref('');
        const message = ref('');
        const message2 = ref('');
        const message3 = ref('');
        const comentario = ref('');
        const recibeDatos = ref([]);
        const comentarios = ref([]);

        const openForm = () => {
            isFormVisible.value = true; // Mostrar el formulario
        };

        const closeForm = () => {
            isFormVisible.value = false; // Ocultar el formulario
        };

        const mandarDenuncia = async () => {
            try {
                const response = await axios.post('http://localhost:10101/createWasteReport', {
                    
                    tipo_residuo: tipo_residuo.value,
                    tipo_bolsa: tipo_bolsa.value
                },{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                });
                message.value = response.data.message;
                Swal.fire({
                    icon: 'success',
                    title: 'Reporte exitoso',
                    text: 'Disfruta de los comentarios'
                }).then(() => {
            window.location.reload(); // Recargar la página
        });
            } catch (error) {
                message.value = 'Error al reporte';
                console.error('Error al reporte', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Error al hacer el reporte',
                    text: error
                });
            }
        };

        const submitForm = () => {
            console.log('Formulario enviado');
        };


        const enviarComentario = async() => {
            try{
                const response = await axios.post('http://localhost:10101/createComplaint',{
                    comentario:comentario.value
                },{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })
                message2.value = response.data.message;
                Swal.fire({
                    icon: 'success',
                    title: 'Reporte exitoso',
                    text: 'Disfruta de los comentarios'
                });
            }catch(error){
                message2.value = 'Error al reporte';
                console.error('Error al reporte', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al hacer el reporte',
                    text: error
                });
            }
        }

        const datosUsuario = async() => {
            try {
                const response = await axios.get('http://localhost:10101/user',{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                });
                recibeDatos.value = response.data;
                message3.value = response.data.message;
            } catch(error) {
                message3.value = 'Error al traer datos';
                console.error('Error al traer datos', error);
            }
        };

        const recibeComentarios = async() => {
            try{
                const response = await axios.get('http://localhost:10101/complaints')
                comentarios.value = response.data
                console.log('Datos extraidos meloooo', response.data)
            }catch(error){
                console.error('Error con los comentarios', error)
            }
        }

        onMounted(() => {
            datosUsuario();
            recibeComentarios();
        });

        const todasFun = () => {
            mandarDenuncia();
            submitForm();
            enviarComentario();
            closeForm();
        };

        return {
            isFormVisible,
            recibeDatos,
            tipo_residuo,
            tipo_bolsa,
            openForm,
            closeForm,
            todasFun,
            comentario,
            comentarios,
            message
        };
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
    width: 20%;
    height: 40px;
    background-color: rgba(104, 150, 46, 1);
    border-radius: 10px;
    border:  2px solid black;
    padding-left: 40px;
    font-size: 20px;
    font-family: 'Josefin Sans';
    transition: all 1.2s;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.conheader{
    width: 70%;
    display: flex;
    justify-content: center;
}
.headerP{
    width: 14%;
    height: 23px;
    border-radius: 50%;
    padding-top: 7px;
    color: white;
    background-color: rgb(0, 0, 0);
    font-size: 13px;
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