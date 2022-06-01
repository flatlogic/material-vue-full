export default {
  namespaced: true,
  state: {
    show: false,
    text: '',
  },
  mutations: {
    showSnackbar(state, payload) {
      state.show = true;
      state.text = payload;
    },
    hideSnackbar(state) {
      state.show = false;
      state.text = '';
    },
  },
  actions: {
    showSnackbar({ commit }, payload) {
      commit('showSnackbar', payload);
    },
  },
};
