import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  state: {
    isFetching: false,
  },
  mutations: {
    FETCH_STARTED(state) {
      state.isFetching = true;
    },
    FETCH_SUCCESS(state) {
      state.isFetching = false;
    },
    FETCH_FAILED(state) {
      state.isFetching = false;
    },
  },
  actions: {
    async reset({ commit, dispatch }, payload) {
      try {
        commit('FETCH_STARTED');
        await axios.put('/auth/password-reset', {
          password: payload.password,
          token: payload.token,
        });
        dispatch('snackbar/showSnackbar', 'Password has been changed', {
          root: true,
        });
        commit('FETCH_SUCCESS');
        router.push('/login');
      } catch (e) {
        commit('FETCH_FAILED', e);
      }
    },
  },
};
