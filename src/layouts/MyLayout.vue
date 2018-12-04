<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      
      <q-toolbar
        color = "tertiary"
        :glossy = "$q.theme === 'mat'"
        :inverted = "$q.theme === 'ios'">

        <q-btn flat dense round @click="handleAccountBtn" aria-label="Menu">
          <q-icon :name="user ? 'menu' : 'account_box'" />
        </q-btn>

        <q-toolbar-title class="flex flex-center">
          <router-link to="/" class="tituloML">Chef Now </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey3' : null">

      <q-list no-border link inset-delimiter class="fuenteML">
        <div class="row">
          <div class="col-1" />
          <div class="col-10"><img src="https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg" class="ImgresponsiveML" alt="Avatar"></div>
          <div class="col-1" />
        </div>
        <div> 
          nombre.apellido@dominio.cl
        </div>
      </q-list>
      
      <br />

      <q-list separator>
        <q-collapsible indent icon="restaurant_menu" label="Recetas" sublabel="">
          <div><q-item-side icon="receipt"> <router-link to="/mis-recetas"> Mis Recetas </router-link></q-item-side></div>
          <q-item-side icon="receipt"> <router-link to="/crear-receta"> Crear Receta </router-link></q-item-side>
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

    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <modal-iniciar-sesion :opened="loginModalOpen" :closeModal="hideLoginModal"/>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import { mapGetters, mapActions } from 'vuex';
import ModalIniciarSesion from '../components/Acceso/ModalIniciarSesion'

export default {
  name: 'MyLayout',
  components: {
    ModalIniciarSesion
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      loginModalOpen: false,
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['logout']),
    openURL,
    handleAccountBtn() {
      if (this.user) {
        return this.toggleSideBar();
      }
      this.showLoginModal();
    },
    toggleSideBar() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    showLoginModal() {
      this.loginModalOpen = true;
    },
    hideLoginModal() {
      this.loginModalOpen = false;
    }
  },
};
</script>

<style>
.q-layout-page-container {
  background-image: url('../assets/Principal3.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.fuenteML {
  font-size:medium;
  text-align: center
}

.ImgresponsiveML {
    width: 50%;
    height: auto
}

.tituloML {
  color:white;
  font-family:pacifico;
  text-decoration: none;
}

</style>