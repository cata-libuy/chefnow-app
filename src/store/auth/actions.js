import axios from 'axios';
import settings from '../../config/settings'

export const login = ({ commit, state }, userData) => {
  console.log('action login', userData.email && userData.password);
  if (state.loginError) commit('SET_LOGIN_ERROR', { message: null }) // Limpiamos error si hay
  const defaultErrorMessage = 'Error en inicio de sesion';

  if (userData.email && userData.password) {
    console.log('post...');
    axios.post(`${settings.api}/login/`, userData)
      .then(
        (response) => {
          console.log('res', response);
          if (response.data.user && response.data.token) {
            const { user } = response.data;
            user.token = response.data.token;
            commit('SET_USER', { user });
          } else {
            let message = defaultErrorMessage;
            commit('SET_LOGIN_ERROR', { message });
          }
        },
        (error) => {
          console.log('error on login', Object.keys(error));
          console.log(error.response);
          const errorText = error.response && error.response.data
            ? error.response.data.message : defaultErrorMessage;
          commit('SET_LOGIN_ERROR', { message: errorText })
        }
      )
  }
}

export const logout = ({ commit }) => {
  console.log('bye!');
  commit('SET_USER', { user: null })
}

export const restoreUser = ({ commit, state }) => {
  if (!state.user) {
    console.log('intentando recuperar usuario de local storage');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      commit('SET_USER', { user })
    }
  }
}
