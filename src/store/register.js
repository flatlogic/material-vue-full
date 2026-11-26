import axios from '@/api';
import router from '../router';

export default {
  namespaced: true,
  state: {
    isFetching: false,
    errorMessage: '',
  },
  mutations: {
    REGISTER_REQUEST(state) {
      state.isFetching = true;
    },
    REGISTER_SUCCESS(state) {
      state.isFetching = false;
      state.errorMessage = '';
    },
    REGISTER_FAILURE(state, payload) {
      state.isFetching = false;
      state.errorMessage = payload;
    },
  },
  actions: {
    async registerUser({ dispatch }, payload) {
      try {
        dispatch('requestRegister');
        if (payload.email && payload.password) {
          await axios.post('/auth/signup', payload);
          dispatch('receiveRegister');
          return true;
        } else {
          dispatch('registerError', 'Something was wrong. Try again');
        }
      } catch (e) {
        dispatch('registerError', e.response?.data?.message || e.response?.data || e.message);
      }
    },
    requestRegister({ commit }) {
      commit('REGISTER_REQUEST');
    },
    receiveRegister({ commit }) {
      commit('REGISTER_SUCCESS');
    },
    registerError({ commit }, payload) {
      commit('REGISTER_FAILURE', payload);
    },
    async verifyEmail({ dispatch }, payload) {
      try {
        const res = await axios.put('/auth/verify-email', { token: payload });
        if (res) {
          dispatch('snackbar/showSnackbar', 'Your email was verified', {
            root: true,
          });
          router.push('/login');
        }
      } catch (e) {
        dispatch('snackbar/showSnackbar', e, { root: true });
      }
    },
  },
};
