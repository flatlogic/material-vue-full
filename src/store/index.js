import { createStore } from 'vuex';

import layout from './layout';
import snackbar from './snackbar';
import auth from './auth';
import register from '@/store/register';
import changePassword from './changePassword';
import forgot from './forgot';
import reset from './reset';
import users from './lists/usersList';
import usersList from './usersList';
import usersForm from './forms/usersForm';
import products from '@/store/products';

export default createStore({
  modules: {
    auth,
    register,
    layout,
    changePassword,
    forgot,
    reset,
    snackbar,
    products,
    users,
    usersForm,
    usersList,
  },
});
