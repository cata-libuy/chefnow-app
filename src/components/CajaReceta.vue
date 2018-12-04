<template>

  <div class="formularioRecetaCR" >
      <q-card-title class="flex column center" >
        <div>
          {{receta.titulo}} <q-icon name="account_box" />
        </div>
        <div>
          <img src="../assets/Principal5.jpg" class="ImgResponsiveCR">
        </div>
        <div>
          <q-rating slot="subtitle" :max= "5" />
        </div>
      </q-card-title>

      <q-card-main>
        <p class="text-faded">{{ minifyBody(receta.cuerpo) }}</p>
      </q-card-main>

      <q-card-actions>
        <q-btn flat round dense icon="access_time"> {{ receta.tiempoPreparacion }} </q-btn>
        <q-btn flat round dense icon="pie_chart"> {{ receta.porcion }} </q-btn>
        <q-btn flat color="primary">
          <router-link :to="`ver-receta/${receta._id}`">
            Ver Receta
          </router-link>
        </q-btn>
      </q-card-actions>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'CajaReceta',
  props: ['receta'],
  data() {
    return {
      recetas: []
    };
  },
  methods: {
    minifyBody(text) {
      return text.substr(0, 40);
    }
  }
}
</script>

<style>
  .formularioRecetaCR {
    background-color: #fdfbff;
    margin-top: 5%;
    /*border-radius: 1em;*/
    /* opacity: 0.8; */
  }
  .ImgResponsiveCR {
    width: 100%;
    height: auto;
    opacity: none;
  }

</style>
