<template>
    <div class="conGran">
        <img src="../assets/img/LogoSample_ByTailorBrands-removebg-preview.png" alt="">

        <div class="divForm">
            <form class="formRegistro" @submit.prevent="login">
                <h1>Inicio de sesión</h1>
                <label>Usuario <br>
                    <input type="text" v-model="email" required>
                </label>
                <label>Contraseña<br>
                    <input type="password" v-model="password" required>
                </label>
                <label>Rol
                    <select v-model="role" required>
                        <option value="usuario">Usuario</option>
                        <option value="empresa">Empresa</option>
                    </select>
                </label>

                <button type="submit">Ingresar</button>
                <router-view></router-view>
            </form>

            <div>{{ message }}</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Usar useRouter para redirigir
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const role = ref('');
        const message = ref('');
        const router = useRouter(); // Inicializar el router para la navegación

        const login = async () => {
            try {
                const response = await axios.post('http://localhost:10101/auth', {
                    email: email.value,
                    password: password.value,
                    role: role.value
                });
                
                console.log('Inicio de sesión exitoso', response.data);
                message.value = 'Inicio de sesión exitoso';
                
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    text: 'Bienvenido'
                });

                // Redirigir al usuario según su rol
                if (role.value === 'usuario') {
                    router.push('/pngUsu');
                } else if (role.value === 'empresa') {
                    router.push('/pgnEpr');
                }

            } catch (error) {
                console.error('Error en el inicio de sesión', error);
                message.value = 'Error en el inicio de sesión. Verifique sus credenciales';
                
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el inicio de sesión',
                    text: 'Usuario o contraseña incorrectos'
                });
            }
        };

        return {
            email,
            password,
            role,
            message,
            login
        };
    }
};
</script>

<style>
.conGran {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.divForm {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.formRegistro {
    width: 50%;
    background-color: gray;
    padding-top: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.formRegistro label {
    width: 55%;
    margin-top: 30px;
    font-size: 20px;
}

.formRegistro input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    padding-left: 10px;
}

.formRegistro select {
    width: 100%;
    border-radius: 5px;
    border: 1px solid black;
    height: 30px;
    padding-left: 10px;
}

.formRegistro button {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 25%;
    height: 40px;
    background-color: rgb(73, 109, 33);
    border-radius: 10px;
    border: 1px solid black;
    transition: all 1.2s;
    cursor: pointer;
}

.formRegistro button:hover {
    transform: scale(1.1);
    background-color: rgba(104, 150, 46, 1);
}
</style>
