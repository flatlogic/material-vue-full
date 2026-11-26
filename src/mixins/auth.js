import decode from 'jwt-decode';
import config from '@/config';
import store from '@/store';

export function isAuthenticated() {
  if (!config.isBackend) return localStorage.getItem('material-demo-session') === 'active';
  const token = localStorage.getItem('token');
  if (!token || !store.state.auth.currentUser) return false;
  const date = new Date().getTime() / 1000;
  try {
    return date < decode(token).exp;
  } catch {
    return false;
  }
}

export const AuthMixin = {
  methods: {
    isAuthenticated,
  },
};
