import decode from 'jwt-decode';

export function isAuthenticated() {
  const token = localStorage.getItem('token');
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = decode(token);
  if (!data) return;
  return date < data.exp;
}

export const AuthMixin = {
  methods: {
    isAuthenticated,
  },
};
