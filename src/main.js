import { createApp } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { AuthMixin } from './mixins/auth';

const app = createApp(App);
app.component('VueGoogleMap', GoogleMap);
app.component('MapMarker', Marker);
app.config.globalProperties.$googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY || 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg';
app.mixin(AuthMixin);
app.use(store).use(vuetify);
store.dispatch('auth/doInit').then(() => {
  app.use(router).mount('#app');
});
