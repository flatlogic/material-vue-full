import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import config from './config';
import { AuthMixin } from './mixins/auth';

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = 'application/json';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

Vue.mixin(AuthMixin);
Vue.config.productionTip = false;
store.dispatch('auth/doInit');

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  store,
}).$mount('#app');
