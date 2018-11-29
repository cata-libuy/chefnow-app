<template>

  <div class="flex column justify-around formularioReceta" >
      <q-card-title class="flex column center" >
        <div>
          {{receta.titulo}} <q-icon name="account_box" />
        </div>
        <div>
          <img src="../assets/Principal5.jpg" class="CRImgResponsive">
        </div>
        <div>
          <q-rating slot="subtitle"  :max= "5" />
        </div>
      </q-card-title>

      <q-card-main>
        <p class="text-faded">{{ minifyBody(receta.cuerpo) }}</p>
      </q-card-main>

      <q-card-actions>
        <q-btn flat round dense icon="access_time"> {{ receta.tiempoPreparacion }} </q-btn>
        <q-btn flat round dense icon="pie_chart"> {{ receta.porcion }} </q-btn>
        <q-btn flat color="primary" label="Ver Receta" />
      </q-card-actions>
  </div>

</template>

<script>
export default {
  name: 'CajaReceta',
  props: ['receta'],
  created() {
    console.log('recibí una receta', this.receta);
  },
  methods: {
    minifyBody(text) {
      return text.substr(0, 40);
    }
  }
}
</script>

<style>
  .formularioReceta{
    background-color: #fdfbff;
    padding: 0,5em;
    border-radius: 0.5em;
    margin: 10%;
  }
  .CRImgResponsive {
    width: 100%;
    height: auto;
  }
</style>
