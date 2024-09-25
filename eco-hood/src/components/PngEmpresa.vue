<template>

    <header id="header">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">
        <h1>Bienvenido Admin</h1>
    </header>


    <div class="tarjetas">

        <div class="tarjeta">
            <h1>CASA</h1>
            <h3>Puntuación:</h3>
            <h3>Cantidad de bolsas:</h3>

            <button @click="openForm" class="btnReporte">Reporte</button>
        </div>
    </div>

    <div v-if="isFormVisible" class="form-container" @click.self="closeForm">
      <div class="form-content">
        <span @click="closeForm" class="close">&times;</span>
        <h2>Reporte</h2>
        <form @submit.prevent="submitForm" class="forReport">
          <input type="text" id="name" v-model="formData.name" placeholder="Ecribe tu comentario..."required><br><br>
          <button type="submit" class="btnReporte">Enviar</button>
        </form>
      </div>
    </div>
</template>

<script>
export default{
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
}
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