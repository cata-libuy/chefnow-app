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
      v-if="user"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey3' : null">

      <q-list v-if="user" no-border link inset-delimiter class="fuenteML">
        <div class="row">
          <div class="col-1" />
          <div class="col-10"><img :src="user.imagenPerfil" class="ImgresponsiveML" alt="Avatar"></div>
          <div class="col-1" />
        </div>
        <div> 
          {{ user.email }}
        </div>
      </q-list>
      
      <br />

      <q-list v-if="user" separator>
        <q-collapsible indent icon="restaurant_menu" label="Recetas" sublabel="">
          <div><q-item-side icon="receipt"> <router-link to="/mis-recetas"> Mis Recetas </router-link></q-item-side></div>
          <q-item-side icon="receipt"> <router-link to="/crear-receta"> Crear Receta </router-link></q-item-side>
        </q-collapsible>

        <q-collapsible indent icon="kitchen" label="Despensa" sublabel="">
          <div><q-item-side icon="receipt"> <router-link to=""> Agregar Ingredientes </router-link></q-item-side></div>
          <div><q-item-side icon="receipt"> <router-link to=""> Revisar Despensa </router-link></q-item-side></div>
        </q-collapsible>
      </q-list>

      <q-collapsible v-if="user" indent icon="settings" label="Perfil">
        <!-- <div><router-link to=""> Mi Cuenta </router-link></div>
        <div><router-link to=""> Mis Prefeencias </router-link></div>
        <div><router-link to=""> Contáctanos </router-link></div> -->
        <div @click="handleLogout"> Cerrar Sesión </div>
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
  created() {
    this.restoreUser()
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
  watch: {
    user(value) {
      console.log('user changed', value)
      if (!value) { // cierro sidebar al logout
        this.leftDrawerOpen = false;
      }
    }
  },
  methods: {
    ...mapActions(['logout', 'restoreUser']),
    openURL,
    handleAccountBtn() {
      if (this.user) {
        return this.toggleSideBar();
      }
      this.showLoginModal();
    },
    handleLogout() {
      console.log('logging out');
      this.logout();
      this.leftDrawerOpen = false;
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