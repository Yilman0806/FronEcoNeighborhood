<template>
    <header id="header">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">
        <h1>Bienvenido Admin</h1>
    </header>

    <div class="tarjetas" >
        <div class="tarjeta" v-for="(hogares,index) in reciboHogares"::key="index">
            <h1>{{ hogares.nombre_hogar }}</h1>
            <h3>Puntuacion: {{ hogares.puntuacion_hogar }}</h3>
            <h3>Cantidad de Bolsas: {{ hogares.cantidad_bolsas }}</h3>

            <button @click="openForm" class="btnReporte">Reporte</button>
        </div>
    </div>

    <div v-if="isFormVisible" class="form-container" @click.self="closeForm">
        <div class="form-content">
            <span @click="closeForm" class="close">&times;</span>
            <h2>Reporte</h2>
            <form @submit.prevent="submitForm" class="forReport">
                <input type="text" id="name" v-model="formData.name" placeholder="Escribe tu comentario..." required><br><br>
                <button type="submit" class="btnReporte">Enviar</button>
            </form>
        </div>
    </div>
</template>


<script>
import { ref,onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const reciboHogares = ref([])


        // Define las variables reactivas
        const isFormVisible = ref(false); // Controla la visibilidad del formulario
        const formData = ref('');

        // Define las funciones
        const openForm = () => {
            isFormVisible.value = true; // Mostrar el formulario
        };

        const closeForm = () => {
            isFormVisible.value = false; // Ocultar el formulario
        };

        const submitForm = () => {
            console.log('Formulario enviado:', formData.value);
            // Aquí puedes agregar más lógica para manejar el formulario
            closeForm(); // Cierra el formulario después de enviarlo
        };

        const recibeHogares = async() =>{
            try{
                const response = await axios.get('http://localhost:10101/hogares')
                reciboHogares.value = response.data
                console.log('Datos extraidos')
            }catch(error){
                console.error('El error es',error)
            }
        }

        onMounted(() => {
            recibeHogares();
        })
        // Retorna las variables y funciones que quieres exponer en la plantilla
        return {
            isFormVisible,
            reciboHogares,
            formData,
            openForm,
            closeForm,
            submitForm
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
.tarjetas{
    width: 100%;
    display: grid;
    margin-top: 70px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 50px;
}
.tarjeta{
    background-color: rgba(230, 230, 230, 0.719);
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
}
.tarjeta h1{
    margin-bottom: 40px;
}
.tarjeta h3{
    margin-bottom: 20px;
}
.btnReporte{
    width: 40%;
    padding: 10px 5px;
}
</style>