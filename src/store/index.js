import Vue from 'vue'
import Vuex from 'vuex'

import layout from "./layout"
import auth from "./auth"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    layout
  }
});
