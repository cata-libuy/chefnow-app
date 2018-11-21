<template>
  <!-- <q-page class="flex flex-center "> -->

      
      
<q-page padding class="">
    Crear Receta
    <q-input class="row" float-label="Título de receta" type="text"/>
    <q-input class="row" float-label="Escribe tu receta" type="text-area" rows="5"/>
    <q-input class="row" suffix="Horas" float-label="tiempo de duración" type="number" />
    <q-input class="row" prefix="Minutos" float-label="tiempo de duración" type="number" />
    <q-input class="row" value="0" stack-label="Porciones" />
    <q-btn  icon = "create"  label = "Guardar Receta" color="primary"/>
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
