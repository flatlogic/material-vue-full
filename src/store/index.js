import Vue from 'vue'
import Vuex from 'vuex'

import layout from "./layout"
import auth from "./auth"
import register from "@/store/register"
import products from "@/store/products";
import usersList from "./usersList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    register,
    products,
    usersList,
    layout
  }
});
