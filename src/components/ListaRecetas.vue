<template lang="html">
  <div class="lista-recetas">
    <caja-receta 
    v-for="receta in recetas"
    v-bind:key="receta._id"
    :receta="receta" />
  </div>
</template>

<script>
import CajaReceta from '../components/CajaReceta.vue';

export default {
  name: 'ListaRecetas',
  components: {
  CajaReceta,
  },

  props: ['recetas'],

};
</script>

<style lang="css">

</style>
