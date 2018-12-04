// eslint-disable-next-line import/prefer-default-export
export const mutations = {
  'SET_USER': function(state, { user }) {
    state.user = null;
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  },
  'SET_LOGIN_ERROR': function(state, { message }) {
    state.loginError = message;
  },
};
