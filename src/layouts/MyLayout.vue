<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      
      <q-toolbar
        color = "tertiary"
        :glossy = "$q.theme === 'mat'"
        :inverted = "$q.theme === 'ios'">

        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="account_box" />
        </q-btn>

        <q-toolbar-title class="flex flex-center">
          <font face = "Pacifico"> Chef Now </font>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey3' : null">

      <q-list no-border link inset-delimiter class="fuente">
        <div class="row">
          <div class="col-1" />
          <div class="col-10"><img src="https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg" class="Imgresponsive" alt="Avatar"></div>
          <div class="col-1" />
        </div>
        <div class="fuente"> 
          nombre.apellido@dominio.cl
        </div>
      </q-list>
      
      <br />

      <q-list separator>
        <q-collapsible indent icon="restaurant_menu" label="Resetas" sublabel="">
          <div><q-item-side icon="receipt"> <router-link to=""> Mis Recetas </router-link></q-item-side></div>
          <div><q-item-side icon="receipt"> <router-link to=""> Crear Receta </router-link></q-item-side></div>
        </q-collapsible>

        <q-collapsible indent icon="kitchen" label="Despensa" sublabel="">
          <div><q-item-side icon="receipt"> <router-link to=""> Agregar Ingredientes </router-link></q-item-side></div>
          <div><q-item-side icon="receipt"> <router-link to=""> Revisar Despensa </router-link></q-item-side></div>
        </q-collapsible>
      </q-list>

      <q-collapsible indent icon="settings" label="Perfil">
        <div><router-link to=""> Mi Cuenta </router-link></div>
        <div><router-link to=""> Mis Prefeencias </router-link></div>
        <div><router-link to=""> Contáctanos </router-link></div>
        <div><router-link to=""> Cerrar Sesión </router-link></div>
      </q-collapsible>

       <!-- <div><q-item-side icon="restaurant_menu"> <router-link to=""> Recetas </router-link></q-item-side></div><br />
        <div><q-item-side icon="person"> <router-link to=""> Perfil </router-link></q-item-side></div><br />
        <div><q-item-side icon="kitchen"> <router-link to=""> Despensa </router-link></q-item-side></div>
      </q-list>-->

    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
.q-layout-page-container {
  background-image: url('../assets/Principal3.jpg');
  background-size: cover;
  background-attachment: fixed
}

.fuente {
  font-size:medium;
  text-align: center
}

.Imgresponsive {
    width: 50%;
    height: auto
}

</style>
