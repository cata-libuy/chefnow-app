<template>
  <!-- <q-page class="flex flex-center "> -->

  <q-page class="flex column justify-content">

    <h3 class="self-center">Crear Receta</h3>

    <div class="flex column fondo" > <!--flex column justify-around -->

      <q-input float-label="Título de receta"
               type="text"
               v-model="receta.titulo"/>

      <q-input float-label="Escribe tu receta"
               type="textarea"
               v-model="receta.cuerpo"/>

      <span class="flex row">
        <q-input class="col"
                 suffix="Horas"
                 float-label="tiempo de duración"
                 type="number"
                 v-model="receta.tiempoPreparacion.hora"
                 min="0"
                 numeric-keyboard-toggle/>

        <q-input class="col"
                 suffix="Minutos"
                 float-label="tiempo de duración"
                 type="number"
                 v-model="receta.tiempoPreparacion.minuto"
                 min="0"
                 max="59"
                 numeric-keyboard-toggle/>
      </span>

      <q-input value="0"
               stack-label="Porciones"
               v-model="receta.porcion"
               type="number"
               numeric-keyboard-toggle/>

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
          tiempoPreparacion: {
            hora: 0,
            minuto: 0
          },
          porcion: 0,
        }
      }
    },
  };
</script>

<style>
  .fondo{
    background-color: #fdfbff;
    padding: 1.3em;
    border-radius: 0.5em;
    margin: 3%;
  }
  .item{
    margin-bottom: 2%;
  }
</style>
