<template lang="html">
  <div class="lista-recetas">
    <p>Hola, lista de recetas</p>
    <caja-receta 
    v-for="receta in recetas"
    v-bind:key="receta.tiempoPreparacion"
    :receta="receta"></caja-receta>
  </div>
</template>

<script>
import axios from 'axios';
import CajaReceta from '../components/CajaReceta.vue';

export default {
  name: 'ListaRecetas',
  components: {
    CajaReceta
  },
  data() {
    return {
      recetas: [],
    };
  },
  created() {
    const url = 'https://chef-now-api.herokuapp.com/receta';
    axios.get(url)
      .then(
        (response) => {
          console.log('llegó la respuesta', response.data);
          this.recetas = response.data;
        }
      )
      .catch((err) => console.log('hubo un error'));
  }
};
</script>

<style lang="css">

</style>
