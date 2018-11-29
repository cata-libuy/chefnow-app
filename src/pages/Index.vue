<template>
<div class="row">
  <div class="col-1"/>
  <div class="col-9"><q-input v-model="buscar" float-label="Buscar Receta:" /></div>
  <div class="col-2">
    <q-btn class="search" round color="secondary" @click="enviarBuscar">
      <q-icon name="search" />
    </q-btn>
  </div>
  <lista-recetas :recetas="recetas"></lista-recetas>
</div>
</template>

<style>
.search {
  position: relative;
  text-align: center;
  font-size: medium;
}
.col{
  text-align: center;
}
</style>

<script>
import axios from 'axios';
import ListaRecetas from '../components/ListaRecetas.vue';
export default {
  name: 'PageIndex',
 data() {
    return {
      buscar: '',
      recetas: []
    };
  },
  methods: {
    enviarBuscar() {
      console.log(this.buscar)
      const url = 'https://chef-now-api.herokuapp.com/receta?search=' + this.buscar;
      axios.get(url)
      .then(
        (response) => {
          console.log('llegó la respuesta', response.data);
          this.recetas = response.data;
        }
      )
      .catch((err) => console.log('hubo un error'));
      }
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
  },

  components: {
    ListaRecetas
  }

};
</script>
