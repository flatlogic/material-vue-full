export default {
  namespaced: true,
  state: {
    drawer: true,
    theme: false
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    toggleTheme(state) {
      state.theme = !state.theme;
    },
  },
  actions: {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
    },
    TOGGLE_THEME({ commit }) {
      commit('toggleTheme');
    },
  },
  getters: {
    DRAWER_STATE(state) {
      return state.drawer;
    },
    THEME_STATE(state) {
      return state.theme;
    },
  },
}