<template>

  <q-page class="flex column justify-content">

    <h3 class="self-center">Crear Receta</h3>

    <div class="flex column wrap justify-around formularioReceta" >

      <q-input float-label="Título de receta"
               type="text"
               v-model="receta.titulo"/>

      <q-input float-label="Escribe tu receta"
               type="textarea"
               v-model="receta.cuerpo"/>

      <span class="row">
        <q-input class="col-5" suffix="hh:mm"
                 float-label="tiempo de preparación"
                 type="time"
                 v-model="receta.tiempoPreparacion"
                 numeric-keyboard-toggle/>
        <span class="col-1"></span>
        <q-input class="col-5" value="0"
                 stack-label="Porciones"
                 v-model="receta.porcion"
                 type="number"
                 numeric-keyboard-toggle/>
      </span>

      <q-uploader url="localhost:3000/receta/imagen" 
                  name="imagen" 
                  extensions=".jpg,.jpeg,.png"
                  :hide-upload-button="true"
                  :auto-expand="true"/>

      <q-btn class="self-center" icon="create"
             label="Guardar Receta"
             color="primary" @click="guardarReceta"/>
    </div>

  </q-page>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'CrearReceta',
    data: () => {
      return {
        receta: {
          titulo: '',
          cuerpo: '',
          tiempoPreparacion: '00:00',
          porcion: 0,
        }
      }
    },methods: {
      guardarReceta(){
        const url = 'https://chef-now-api.herokuapp.com/receta';

        //guardar la imagen y guardar su ruta

        
        //guardar receta
        let tiempo = this.receta.tiempoPreparacion.split(':');
        let hora = Number(tiempo[0])*60;
        let minuto = Number(tiempo[1]);

        let preparacion = hora+minuto;

        axios.post(url, {
          titulo: this.receta.titulo,
          cuerpo: this.receta.cuerpo,
          tiempoPreparacion: preparacion,
          porcion: this.receta.porcion,
        })
          .then(
            (response) => {
              console.log('se guardó la data', response.data);
            }
          )
          .catch((err) => console.log('hubo un error', err));

      }
    }
  };
</script>

<style>
  .formularioReceta{
    background-color: #fdfbff;
    padding: 1.3em;
    border-radius: 0.5em;
    margin: 3%;
    /* height: 50vh; */
  }
</style>
