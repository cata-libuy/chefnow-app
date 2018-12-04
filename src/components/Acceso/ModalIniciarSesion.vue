<template>
  <div class="login-modal">
      <q-modal v-model="opened" minimized content-css="padding: 10px 30px 20px 30px">
      <h4>Inicia Sesión</h4>
      <div class="form-body">
        <q-input stack-label="email" v-model="email"/>
        <q-input stack-label="password" type="password" v-model="password"/>
      </div>
      
      <q-btn
        color="primary"
        @click="closeModal"
        label="Cancelar"
      />
      <q-btn
        color="primary"
        @click="handleLogin"
        label="Aceptar"
      />
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
      alert(message)
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

<style lang="scss">ç
.login-modal {
  .form-body {
    padding: 20px 0;
  }
}

</style>


