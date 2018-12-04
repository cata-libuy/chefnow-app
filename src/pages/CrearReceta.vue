<template>

  <q-page class="flex column">
    <br><br>
    <div class="flex column wrap justify-around formularioReceta" >
      <h4 class="self-center">Crear Receta</h4>

      <q-input float-label="Título de receta"
               type="text"
               v-model="receta.titulo"/>

      <q-input float-label="Escribe tu receta"
               type="textarea"
               v-model="receta.cuerpo"/>
      <br>

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
      <br>

      <q-uploader
        url="https://chef-now-api.herokuapp.com/receta/imagen"
        name="imagen"
        extensions=".jpg,.jpeg,.png"
        :hide-upload-button="true"
        :auto-expand="true"
        float-label="Sube la foto de tu receta!"
        :clearable="true"
        ref="imagenReceta"
        @uploaded="uploaded"
        method="POST"/>
      <br><br>

      <q-btn class="self-center" icon="create"
             label="Guardar Receta"
             color="primary" @click="guardarReceta"/>
    </div>

  </q-page>
</template>

<script>
  import axios from 'axios';
  import { Notify } from 'quasar';

  export default {
    name: 'CrearReceta',
    data: () => {
      return {
        receta: {
          titulo: '',
          cuerpo: '',
          tiempoPreparacion: '00:00',
          porcion: 0,
          url: '',
        },
      }
    },
    methods: {
      uploaded(event, xhr) {
        //cuando ya guardé la imagen, recibo la ruta de la imagen nueva.
        let response = JSON.parse(xhr.response);
        this.receta.url = response.filename.toString();

        const url = 'https://chef-now-api.herokuapp.com/receta';
        /*const url = 'http://localhost:3000/receta';*/

        //guardar receta
        let tiempo = this.receta.tiempoPreparacion.split(':');
        let hora = Number(tiempo[0]) * 60;
        let minuto = Number(tiempo[1]);
        let preparacion = hora + minuto;

        axios.post(url, {
          titulo: this.receta.titulo,
          cuerpo: this.receta.cuerpo,
          tiempoPreparacion: preparacion,
          porcion: this.receta.porcion,
          imagenPrincipal: this.receta.url
        })
          .then(
            (response) => {
              console.log('se guardó la data', response.data);
              this.limpiarFormulario();
              this.mostrarMensaje();
            }
          )
          .catch((err) => console.log('hubo un error', err));
      },
      guardarReceta() {
        //guardar imagen de la receta.
        this.$refs.imagenReceta.upload();
      },
      limpiarFormulario(){
        this.receta.titulo = '';
        this.receta.cuerpo = '';
        this.receta.tiempoPreparacion = '00:00';
        this.receta.procion = 0;
        this.receta.url = '';
        this.$refs.imagenReceta.reset();
      },
      mostrarMensaje(){
        Notify.create({
          color: 'blue',
          //textColor,
          icon: 'thumb_up',
          message: 'Receta Publicada!',
          position: 'top',
          //avatar,
          timeout: Math.random() * 5000 + 3000
        })
      }
    }
  };
</script>

<style>
  .formularioReceta{
    background-color: #fdfbff;
    padding-right: 1.3em;
    padding-left: 1.3em;
    padding-bottom: 1.4em;
    /* border-radius: 1em; */
    /* margin: 3%; */
    /* opacity: 0.8; */
  }
</style>
