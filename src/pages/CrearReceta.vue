<template>

  <q-page class="flex column justify-content">

    <h3 class="self-center">Crear Receta</h3>

    <div class="flex column justify-around formularioReceta" >

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

      <q-btn class="self-center" icon="create"
             label="Guardar Receta"
             color="primary"/>
    </div>

  </q-page>
</template>

<script>
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
    },
  };
</script>

<style>
  .formularioReceta{
    background-color: #fdfbff;
    padding: 1.3em;
    border-radius: 0.5em;
    margin: 3%;
    height: 50vh;
  }
</style>
