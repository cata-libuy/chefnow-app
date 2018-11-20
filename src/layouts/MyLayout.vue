<template>
  <q-layout view="lHh Lpr lFf"
  >
    <q-layout-header>
      <q-toolbar
        color = "black"
        :glossy = "$q.theme === 'mat'"
        :inverted = "$q.theme === 'ios'"
      >
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="account_box" />
        </q-btn
        >
        <q-toolbar-title class="flex flex-center">
          <div class="row">
            <div class="col-sm-6"> <img src="assets/icon/chefHeader.png" alt="" width="45" height="45"> </div>
            <div class="col-sm-6"> <font face = "Pacifico">Chef Now</font></div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey3' : null"
      >
      <q-list no-border link inset-delimiter>
        <div><q-list-header>Usuario <br/> nombre.apellido@dominio.cl</q-list-header><br/><br/><br/>
        </div>
        <div>
          <q-item-side icon="restaurant_menu"> Recetas </q-item-side><br/>
          <q-item-side icon="person"> Perfil </q-item-side><br/>
          <q-item-side icon="kitchen"> Despensa </q-item-side>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <div class="q-body-2">
          <q-item-main label="Preferencias"/><br/>
          <q-item-main label="Contáctanos"/><br/>
          <q-item-main label="Cerrar Sesión"/><br/>
        </div>
      </q-list>
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
</style>
