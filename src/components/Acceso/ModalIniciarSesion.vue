<template>
  <div class="login-modal">
      <q-modal v-model="opened" minimized content-css="padding: 10px 30px 20px 30px">
      <h4>Inicia Sesión</h4>
      <div class="form-body">
        <q-input stack-label="email" v-model="email"/>
        <q-input stack-label="password" type="password" v-model="password"/>
      </div>
      <div class="login-actions">
        <q-btn
        color="secondary"
        @click="closeModal"
        label="Cancelar"
      />
      <q-btn
        color="primary"
        @click="handleLogin"
        label="Aceptar"
      />
      </div>
    </q-modal>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ModalIniciarSesion',
  props: ['opened', 'closeModal'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      console.log('login start with', this.email, this.password);
      this.login({ email: this.email, password: this.password})
    }
  },
  computed: {
    ...mapGetters(['user', 'loginError'])
  },
  watch: {
    loginError(message) {
      if (message) {
        this.$q.notify({ message, type: 'negative', position: top })
      }
    },
    user(userData) {
      if (userData) {
        console.log('login ok', userData);
        this.closeModal()
      }
    }
  }
}
</script>

<style lang="css">
.login-modal .form-body {
  padding: 20px 0;
}
.login-actions {
  width: 100%;
  display: flex;
  padding-top: 20px;
}
 .login-actions > .q-btn:first-child {
  margin-right: 5px;
}

</style>


