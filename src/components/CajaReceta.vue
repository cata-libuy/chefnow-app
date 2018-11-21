<template>
  <div class="caja-receta">
    <h2>{{ receta.titulo }}</h2>
    <p>{{ receta.cuerpo }}</p>
  </div>  
</template>

<script>
export default {
  name: 'CajaReceta',
  props: ['receta'],
  created() {
    console.log('recibí una receta', this.receta);
  }
}
</script>
<style>

</style>


