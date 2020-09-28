import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import config from "./config";
import * as VueGoogleMaps from 'vue2-google-maps'
import {AuthMixin} from "./mixins/auth"


axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = "application/json";
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});
Vue.mixin(AuthMixin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App), store
}).$mount('#app');
