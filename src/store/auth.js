import config from '../config';
import api from '@/api';
import decode from 'jwt-decode';
import router from '../router';

function clearApiSession() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

function errorMessage(error, fallback) {
  const response = error.response?.data;
  if (typeof response === 'string') return response;
  if (typeof response?.message === 'string') return response.message;
  return fallback;
}

export default {
  namespaced: true,
  state: {
    isFetching: false,
    errorMessage: '',
    currentUser: null,
  },
  mutations: {
    LOGIN_FAILURE(state, message) {
      state.isFetching = false;
      state.errorMessage = message;
      state.currentUser = null;
    },
    LOGIN_SUCCESS(state, user) {
      state.isFetching = false;
      state.errorMessage = '';
      state.currentUser = user || null;
    },
    LOGIN_REQUEST(state) {
      state.isFetching = true;
    },
  },
  actions: {
    async findMe({ commit, dispatch }) {
      const token = localStorage.getItem('token');
      if (!config.isBackend || !token) return null;

      try {
        const { data } = await api.get('/auth/me');
        if (localStorage.getItem('token') !== token) return null;

        const profile = data.user || data;
        const { id, firstName, lastName, email, avatar } = profile;
        if (id == null) throw new Error('The account response is missing its user ID.');
        const user = { id, firstName, lastName, email, avatar };
        localStorage.setItem('user', JSON.stringify({ user: { id } }));
        commit('LOGIN_SUCCESS', user);
        return user;
      } catch (error) {
        if (localStorage.getItem('token') !== token) return null;
        clearApiSession();
        const message = errorMessage(error, 'Could not verify your session. Please sign in again.');
        commit('LOGIN_FAILURE', message);
        dispatch('snackbar/showSnackbar', message, { root: true });
        if (router.currentRoute.value.path !== '/login') await router.replace('/login');
        return null;
      }
    },
    async doInit({ dispatch, commit }) {
      // Discard complete JWT claims cached by earlier releases.
      localStorage.removeItem('user');
      if (config.isBackend && localStorage.getItem('token')) {
        await dispatch('findMe');
      } else {
        commit('LOGIN_SUCCESS');
      }
    },
    async loginUser({ dispatch }, payload) {
      dispatch('requestLogin');
      if (!config.isBackend) {
        localStorage.setItem('material-demo-session', 'active');
        dispatch('receiveLogin');
        await router.push('/app/dashboard');
        return;
      }
      if (payload.social) {
        window.location.href = config.baseURLApi + '/auth/signin/' + payload.social;
        return;
      }
      if (!payload.email || !payload.password) {
        dispatch('loginError', 'Enter your email and password.');
        return;
      }

      try {
        const { data } = await api.post('/auth/signin/local', { email: payload.email, password: payload.password });
        await dispatch('receiveToken', typeof data === 'string' ? data : data?.token);
      } catch (error) {
        const message = errorMessage(error, 'Sign-in failed. Please try again.');
        dispatch('snackbar/showSnackbar', message, { root: true });
        dispatch('loginError', message);
      }
    },
    async receiveToken({ dispatch }, token) {
      if (!config.isBackend) return;
      try {
        if (!token || !(decode(token).exp > Date.now() / 1000)) throw new Error('Expired session');
      } catch {
        clearApiSession();
        dispatch('loginError', 'Your session is invalid or expired.');
        return;
      }

      localStorage.setItem('token', token);
      const user = await dispatch('findMe');
      if (user) await router.replace('/app/dashboard');
    },
    logoutUser({ commit }) {
      localStorage.removeItem('material-demo-session');
      clearApiSession();
      commit('LOGIN_SUCCESS');
      return router.push('/login');
    },
    loginError({ commit }, message) {
      commit('LOGIN_FAILURE', message);
    },
    requestLogin({ commit }) {
      commit('LOGIN_REQUEST');
    },
    receiveLogin({ commit, state }) {
      commit('LOGIN_SUCCESS', state.currentUser);
    },
  },
};
