import * as actions from './actions';
import { mutations } from './mutations';
import * as getters from './getters';

export default {
  state: {
    user: null,
    loginError: null,
  },
  getters,
  mutations,
  actions,
}
