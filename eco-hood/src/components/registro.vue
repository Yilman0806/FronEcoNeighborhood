<template>
    <div class="conGran">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">

        <div class="divForm">
            <form class="formRegistro" @submit.prevent="registro">
                <h1>Registro</h1>
                <label>Nombre <br>
                    <input type="text" v-model="name" required>
                </label>
                <label>Casa<br>
                    <select name="" v-model="id_hogar">
                        <option value="1">Hogar García</option>
                        <option value="2">Hogar López</option>
                        <option value="3">Hogar Pérez</option>
                        <option value="4">Hogar Ramírez</option>
                        <option value="5">Hogar Martínez</option>
                        <option value="6">Hogar Fernández</option>
                    </select>
                </label>
                <label>Email <br>
                    <input type="email" v-model="email" required>
                </label>
                <label>Contraseña<br>
                    <input type="password" v-model="password" required>
                </label>

                <button type="submit">Registrar</button>
            </form>

            <div>{{ message }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    methods: {
        volver() {
            this.$router.push('/')
        }
    },
    setup() {
        const name = ref('');
        const id_hogar = ref('');
        const email = ref('');
        const password = ref('');
        const message = ref('');

        const registro = async () => {
            try {
                const response = await axios.post('http://localhost:10101/register', {
                    id_hogar: id_hogar.value,
                    name: name.value,
                    email: email.value,
                    password: password.value
                });
                console.log('Registro exitoso', response.data);
                message.value = 'Registro exitoso';
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario Registrado',
                    text: 'Su usuario se registró de manera exitosa'
                });
            } catch (error) {
                console.error("Error al registrar usuario");
                message.value = "Error en el registro de usuario";
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el registro',
                    text: 'No se pudo registrar el usuario. Por favor, inténtelo de nuevo'
                });
            }
        };

        return {
            name,
            id_hogar,
            email,
            password,
            message,
            registro
        };
    }
}
</script>

<style>

.conGran{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.divForm{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.formRegistro{
    width: 50%;
    background-color: gray;
    padding-top: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.formRegistro label{
    width: 55%;
    margin-top: 30px;
    font-size: 20px;
}
.formRegistro input{
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    padding-left: 10px;
}
.formRegistro select{
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    padding-left: 10px;
}

.formRegistro button{
    margin-top: 30px;
    margin-bottom: 30px;
    width: 25%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
    transition: all 1.2s;
    cursor: pointer;

}

.formRegistro button:hover{
    transform: scale(1.1);
}
</style>
