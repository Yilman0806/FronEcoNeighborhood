import { createRouter, createWebHistory } from 'vue-router';
import PgnBase from '@/components/PgnBase.vue';
import Registro from '@/components/registro.vue';
import longinUsuario from '@/components/longinUsuario.vue';
import pgnUsuario from '@/components/pgnUsuario.vue';
import PngEmpresa from '@/components/PngEmpresa.vue';


const routes = [
  {
    path:'/loginUsu',
    name:'LonginUsu',
    component:longinUsuario
  },
  {
    path:'/pngUsu',
    name:'PngUsu',
    component:pgnUsuario
  },
  {
    path:'/pgnEpr',
    name:'PgnEmpre',
    component: PngEmpresa
  },
  {
    path:'/registro',
    name:'Registro',
    component:Registro
  },
  {
    path:'/',
    name:'Home',
    component:PgnBase
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;