<template>
<div class="row search">
  <div class="col-1"/>
  <div class="col-9 search-input"><q-input v-model="buscar" float-label="Buscar Receta:" /></div>
  <div class="col-2">
    <q-btn class="search" round color="secondary" @click="enviarBuscar">
      <q-icon name="search" />
    </q-btn>
    <q-btn color="standard" @click="limpiarBusqueda">
      <q-icon name="close" />
    </q-btn>
  </div>
  <lista-recetas :recetas="recetas"></lista-recetas>
</div>
</template>

<style scoped>
.search {
  position: relative;
  text-align: center;
  font-size: medium;
  color: white;
}
.col {
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
      },
    limpiarBusqueda() {
      this.buscar = '';
      this.enviarBuscar();
    },
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
