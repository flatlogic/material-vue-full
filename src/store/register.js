import config from "../config";
import axios from "axios";
import router from '../Routes';

export default {
  namespaced: true,
  state: {
    isFetching: false,
    errorMessage: ''
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
    registerUser({dispatch}, payload) {
      if (!config.isBackend) {
        router.push('/user/profile');
      }

      else {
        dispatch('requestRegister');
        const creds = payload.creds;
        if (creds.email.length > 0 && creds.password.length > 0) {
          axios.post("/auth/signup", creds).then(() => {
            dispatch('receiveRegister');
          }).catch(err => {
            console.log(err.response.data)
            dispatch('registerError', err.response.data);
          })
        } else {
          dispatch('registerError', 'Something was wrong. Try again');
        }
      }
    },
    requestRegister({commit}) {
      commit('REGISTER_REQUEST');
    },
    receiveRegister({commit}) {
      commit('REGISTER_SUCCESS');
    },
    registerError({commit}, payload) {
      commit('REGISTER_FAILURE', payload);
    },
  },
};
