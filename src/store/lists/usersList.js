import axios from 'axios';

export default {
  namespaced: true,
  state: {
    loading: true,
    rows: [],
    modalOpen: false,
    deleteId: '',
    count: 0,
  },
  mutations: {
    getData(state, payload) {
      state.rows = [];
      state.rows = payload;
    },
    /**
     * Update total number of items on server
     */
    COUNT_UPDATED(state, payload) {
      state.count = payload;
    },
    showLoader(state) {
      state.loading = true;
    },
    hideLoader(state) {
      state.loading = false;
    },
    setDeleteId(state, payload) {
      state.deleteId = payload;
    },
  },
  actions: {
    async getData({ commit, dispatch }, { page, limit, field, sort }) {
      commit('showLoader');
      try {
        const response = await axios.get(`/users`, {
          params: { page, limit, field, sort },
        });
        commit('getData', response.data.rows);
        commit('COUNT_UPDATED', response.data.count);
      } catch (e) {
        dispatch('snackbar/showSnackbar', e, { root: true });
      } finally {
        commit('hideLoader');
      }
    },
    async getFilteredData({ commit }, request) {
      try {
        commit('showLoader');
        const response = await axios.get(`/users${request}`);
        commit('getData', response.data.rows);
        commit('hideLoader');
      } catch (e) {
        this._vm.$toasted.show('Error: ' + e, {
          type: 'error',
        });
      }
    },
    async deleteItem({ dispatch, state }) {
      try {
        await axios.delete(`/users/${state.deleteId}`);
        dispatch('snackbar/showSnackbar', 'Users has been deleted', {
          root: true,
        });
        dispatch('getData');
      } catch (e) {
        dispatch('snackbar/showSnackbar', e, { root: true });
      }
    },
  },
};
