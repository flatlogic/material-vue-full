import api from "@/api";
import mock from "../pages/User/List/mock";
import config from "../config";

function userRow(user) {
  const { id, firstName, lastName, role, company, email, disabled, createdAt, avatar, phoneNumber } = user;
  return { id, firstName, lastName, role, company, email, disabled, createdAt, avatar, phoneNumber };
}

export default {
  namespaced: true,
  state: {
    users: config.isBackend ? [] : mock.map(item => ({ ...item })),
    images: [],
    isReceiving: false,
    isUpdating: false,
    isDeleting: false,
    idToDelete: null,
    usersMessage: ''
  },
  mutations: {
    FINISHED_USER_REQUEST(state, flag) {
      state[flag] = false;
    },
    RECEIVED_USERS(state, payload) {
      state.users = payload;
      state.isReceiving = false;
    },
    RECEIVING_USERS(state) {
      state.isReceiving = true;
    },
    RECEIVED_USER(state, payload) {
      state = Object.assign(state, {
        users: [...state.users, payload],
        isReceiving: false,
      })
    },
    RECEIVING_USER(state) {
      state.isReceiving = true;
    },
    UPDATED_USER(state, payload) {
      let index = state.users.findIndex(u => u.id === payload.id);
      state = Object.assign(state, {
        users: state.users.map((u, i) => {
          if (i === index) {
            return Object.assign({}, u, payload);
          }
          return u;
        }),
        isUpdating: false,
        usersMessage: 'User updated.',
      })
    },
    UPDATING_USER(state) {
      state.isUpdating = true;
    },
    DELETED_USER(state, payload) {
      Object.assign(state, {
        users: state.users.filter(item => item.id !== payload.id),
        isDeleting: false,
        idToDelete: null,
        usersMessage: 'User deleted.',
      });
    },
    DELETING_USER(state, payload) {
      state.isDeleting = true;
      state.idToDelete = payload.id;
    },
  },
  actions: {
    async getUsersRequest({ state, commit }) {
      if (!config.isBackend) return state.users;
      commit('RECEIVING_USERS');
      try {
        const { data } = await api.get('/users');
        commit('RECEIVED_USERS', data.rows.map(userRow));
      } finally {
        commit('FINISHED_USER_REQUEST', 'isReceiving');
      }
    },
    async loadUserRequest({ state }, id) {
      if (!config.isBackend) return state.users.find(item => item.id === id);
      const { data } = await api.get(`/users/${id}`);
      return userRow(data);
    },
    async updateUserRequest({ commit }, payload) {
      commit('UPDATING_USER');
      try {
        const item = config.isBackend
          ? (await api.put(`/users/${payload.id}`, {id: payload.id, data: payload})).data
          : payload;
        commit('UPDATED_USER', userRow(item));
      } finally {
        commit('FINISHED_USER_REQUEST', 'isUpdating');
      }
    },
    async createUserRequest({ commit }, payload) {
      commit('RECEIVING_USER');
      try {
        const item = config.isBackend
          ? (await api.post('/users', {data: payload})).data
          : { ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
        commit('RECEIVED_USER', userRow(item));
      } finally {
        commit('FINISHED_USER_REQUEST', 'isReceiving');
      }
    },
    async deleteUserRequest({ commit }, payload) {
      commit('DELETING_USER', payload);
      try {
        if (config.isBackend) await api.delete(`/users/${payload.id}`);
        commit('DELETED_USER', payload);
      } finally {
        commit('FINISHED_USER_REQUEST', 'isDeleting');
      }
    },
    receiveUsers({commit}, payload) {
      commit("RECEIVED_USERS", payload)
    },
    receivingUsers({commit}) {
      commit("RECEIVING_USERS")
    },
    receiveUser({commit}, payload) {
      commit("RECEIVED_USER", payload)
    },
    receivingUser({commit}) {
      commit("RECEIVING_USER")
    },
    updateUser({commit}, payload) {
      commit("UPDATED_USER", payload)
    },
    updatingUser({commit}) {
      commit("UPDATING_USER")
    },
    deleteUser({commit}, payload) {
      commit("DELETED_USER", payload)
    },
    deletingUser({commit}, payload) {
      commit("DELETING_USER", payload)
    }
  },
};
