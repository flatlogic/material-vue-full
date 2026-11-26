import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'font-awesome/css/font-awesome.css';
import config from '@/config';

export default createVuetify({
  components,
  directives,
  defaults: { VTextField: { variant: 'underlined' }, VChip: { variant: 'flat' } },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { dark: false, colors: config.light },
      dark: { dark: true, colors: config.dark },
    },
  },
});
