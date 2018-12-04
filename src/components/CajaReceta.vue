<template>
  <div class="formularioRecetaCR">
    
    <q-card-title class="flex column center">
      <div class="row">
        <div class="col-1"><q-icon name="account_box" /> </div>
        <div class="col-11">{{receta.titulo}}</div>
      </div>
      <div>
        <img :src="`https://chef-now-api.herokuapp.com/receta/imagen/${receta.imagenPrincipal}`" class="ImgResponsiveCR">
      </div>
      <div class="row">
        <div class="12"><q-rating slot="subtitle" :max= "5" /></div>
      </div>
    </q-card-title>

    <q-card-main>
      <div class="flex justify-around">
        <p class="text-faded" style="width: 90%">{{ minifyBody(receta.cuerpo) }}</p>
      </div>
      <div class="row">
        <div class="col-4"><q-btn flat round dense icon="access_time"> {{ minutosAHora(receta.tiempoPreparacion) }} </q-btn></div>
        <div class="col-4"><q-btn flat round dense icon="pie_chart"> {{ receta.porcion }} </q-btn></div>
        <div class="col-4">
          <router-link :to="`ver-receta/${receta._id}`">
            <q-btn @click="noMessage" color="primary" label="Ver Receta" />
          </router-link>
        </div>
      </div>
    </q-card-main>
  </div>
</template>

<script>
import axios from 'axios';
import { QSpinnerFacebook, QSpinnerGears } from 'quasar'
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
      return text.substr(0, 70);
    },
    minutosAHora(min){
      let hora = Math.trunc(min/60);
      let minuto = (min%60);

      if( hora.toString().length == 1 ){
        hora='0'+hora
      }
      if( minuto.toString().length == 1 ){
        minuto='0'+minuto
      }
      return`${hora}:${minuto}`;
    },
    show (options) {
      this.$q.loading.show(options)
      setTimeout(() => {
        this.$q.loading.hide()
      }, 1000)
    },
    noMessage () {
      this.show()
    }
  }
}

</script>

<style>
  .formularioRecetaCR {
    background-color: #fdfbff;
    margin-top: 5%;
    /*border-radius: 1em;*/
    opacity: 0.9;
    position: relative;
    text-align: center;
  }
  .ImgResponsiveCR {
    width: 100%;
    height: auto;
    opacity: 1;
  }
  .text-faded{
    text-align: justify;
  }
</style>
