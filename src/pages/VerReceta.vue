<template>
    <q-page class="flex column justify-content">
      <div class="formularioRecetaCR">
      <br />
      <q-card-title class="flex column center">
        <div class="row">
          <div class="col-1"><q-icon name="account_box" /></div>
          <div class="col-11"> {{receta.titulo}} </div>
        </div>
        <div>
          <img src="../assets/Principal5.jpg" class="ImgResponsiveVR">
        </div>
        <div class="row">
          <q-rating slot="subtitle" :max= "5" />
        </div>
      </q-card-title>

      <q-card-main>
        <div>
          <p class="text-faded">{{receta.cuerpo}}</p>
        </div>
      
        <div class="row" align=center>
          <div class="col-6">Tiempo Preparacion</div>
          <div class="col-6">Porciones</div>
        </div>

        <div class="row" align=center>
          <div class="col-6">{{receta.tiempoPreparacion}}</div>
          <div class="col-6">{{receta.porcion}}</div>
        </div>
      </q-card-main>
      <br />
      </div>
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
    /* opacity: 0.8; */
  }

  .ImgResponsiveVR {
    width: 100%;
    height: auto;
  }
  .text-faded{
    text-align: justify;
  }
</style>
