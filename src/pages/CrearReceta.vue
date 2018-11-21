<template>
  <!-- <q-page class="flex flex-center "> -->

      
      
<q-page padding class="docs-input row justify-center">
    Crear Receta
    <q-input class="" float-label="Título de receta" type="text"/>
    <q-input class="" float-label="Escribe tu receta" type="text-area" rows="5"/>
    <q-input class="" suffix="Horas" float-label="tiempo de duración" type="number" />
    <q-input class="" prefix="Minutos" float-label="tiempo de duración" type="number" />
    <q-input class="" value="0" stack-label="Porciones" />

    <img src="assets/Principal3.jpg" class="responsive">
  </q-page>
</template>

<style>
.search {
  position: fixed;
  top: 100px;
  left: 10px;
}
</style>

<script>
export default {
  name: 'CrearReceta',
};
</script>
