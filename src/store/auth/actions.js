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
          if (response.body.user && response.body.token) {
            const { user } = response.body;
            user.token = response.body.token;
            commit('SET_USER', { user });
          } else {
            let message = defaultErrorMessage
            commit('SET_LOGIN_ERROR', { message })
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
  commit('SET_USER', { user: null })
}
