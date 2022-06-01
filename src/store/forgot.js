import axios from 'axios';

export default {
  namespaced: true,
  state: {
    isFetching: false,
  },
  mutations: {
    TOGGLE_LOAD(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async forgot({ commit, dispatch }, payload) {
      try {
        commit('TOGGLE_LOAD', true);
        await axios.post('/auth/send-password-reset-email', {
          email: payload,
        });
        dispatch('snackbar/showSnackbar', 'Check your email address', {
          root: true,
        });
        commit('TOGGLE_LOAD', false);
      } catch (e) {
        dispatch('snackbar/showSnackbar', e, { root: true });
        commit('TOGGLE_LOAD', false);
      }
    },
  },
};
