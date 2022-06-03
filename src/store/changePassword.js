import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    TOGGLE_LOAD(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async changePassword({ commit, dispatch }, payload) {
      if (!payload) return false;
      try {
        commit('TOGGLE_LOAD', true);
        await axios.put('/auth/password-update', payload);
        dispatch('snackbar/showSnackbar', 'Password has been changed', {
          root: true,
        });
        commit('TOGGLE_LOAD', false);
        router.push('/app');
      } catch (e) {
        dispatch('snackbar/showSnackbar', e, { root: true });
        commit('TOGGLE_LOAD', false);
      }
    },
  },
};
