<template>
    <q-page class="flex column justify-content">
      <br /><br />

      <div class="formularioRecetaVR">
        <q-card-title class="flex column center">
          <div class="row">
            <div class="col-1"><q-icon name="account_box" /></div>
            <div class="col-11"> {{receta.titulo}} </div>
          </div>
          <div>
            <img :src="`https://chef-now-api.herokuapp.com/receta/imagen/${receta.imagenPrincipal}`" class="ImgResponsiveVR">
          </div>
        </q-card-title>

        <q-card-main>
          <div class="flex justify-around">
            <p class="text-faded" style="width: 90%">{{receta.cuerpo}}</p>
          </div>

          <div class="row">
            <div class="col-12"><q-rating slot="subtitle" :max= "5" /></div>
          </div>

          <br /><br />

          <div class="row">
            <div class="col-4"><q-btn flat round dense icon="access_time"> {{ minutosAHora(receta.tiempoPreparacion) }} </q-btn></div>
            <div class="col-4"><q-btn flat round dense icon="pie_chart"> {{ receta.porcion }} </q-btn></div>
            <div class="col-4"><q-btn color="primary" label="Comentar" /></div>
          </div>

        </q-card-main>
 
      </div>
      <br /><br />
    </q-page>
</template>

<script>
import CajaReceta from '../components/CajaReceta.vue';
import axios from 'axios';
import VerReceta from '../pages/VerReceta.vue';

export default {
  name: 'VerRecetas',
  components: {
    CajaReceta,
  },
  data(){
    return{
      id: this.$route.params.id,
      receta: {}
    }
  }, 
  methods:{
    VerReceta(){
      console.log(this.id)
      const url = 'https://chef-now-api.herokuapp.com/receta/' + this.id;
      axios.get(url)
      .then(
        (response) => {
          console.log('llegó la respuesta', response.data);
          this.receta = response.data.receta;
        }
      )
      .catch((err) => console.log('hubo un error'));
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
      return`${hora}:${minuto} hh:mm`;
    }
  },
  created(){
    this.VerReceta();
  }
};
</script>

<style>
.formularioRecetaVR{
    background-color: #fdfbff;
    margin-top: 5%;
    /*border-radius: 1em;*/
    opacity: 0.9;
    text-align: center;
  }

  .ImgResponsiveVR {
    width: 100%;
    height: auto;
  }

  .text-faded{
    text-align: justify;
  }

</style>
