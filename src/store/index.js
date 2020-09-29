import Vue from 'vue'
import Vuex from 'vuex'

import layout from "./layout"
import auth from "./auth"
import register from "@/store/register"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    register,
    layout
  }
});
