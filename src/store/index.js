import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';
import snackbar from './snackbar';
import auth from './auth';
import register from '@/store/register';
import changePassword from './changePassword';
import forgot from './forgot';
import reset from './reset';
import users from './lists/usersList';
import usersForm from './forms/usersForm';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    register,
    layout,
    changePassword,
    forgot,
    reset,
    snackbar,

    users,
    usersForm,
  },
});
