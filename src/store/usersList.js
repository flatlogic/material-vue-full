import axios from "axios";
import mock from "../pages/User/List/mock";
import config from "../config";

export default {
  namespaced: true,
  state: {
    users: [],
    images: [],
    isReceiving: false,
    isUpdating: false,
    isDeleting: false,
    idToDelete: null,
    usersMessage: ''
  },
  mutations: {
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
        usersMessage: 'Users has been updating!',
      })
    },
    UPDATING_USER(state) {
      state.isUpdating = true;
    },
    DELETED_USER(state, payload) {
      let indexToDelete = state.users.findIndex(p => p.id === payload.id);
      let users = [...state.users];
      users.splice(indexToDelete, 1);
      state = Object.assign(state, {
        users: [...users],
        isDeleting: false,
        idToDelete: null,
        usersMessage: 'User has been Deleted!',
      });
    },
    DELETING_USER(state, payload) {
      state.isDeleting = true;
      state.idToDelete = payload.id;
    },
  },
  actions: {
    getUsersRequest({dispatch}) {
      // We check if app runs with backend mode
      if (!config.isBackend) {
        dispatch("receiveUsers", mock);
      }

      else {
        dispatch("receivingUsers");
        axios.get('/users').then(res => {
          dispatch("receiveUsers", res.data.rows);
        })
      }
    },
    loadUserRequest({dispatch}, id) {
      // We check if app runs with backend mode
      if (!config.isBackend) {
        dispatch("receiveUser", mock.find(arr => arr.id === id));
      }

      else {
        dispatch("receivingUser");
        axios.get('/users/' + id).then(res => {
          dispatch("receiveUser", res.data);
        })
      }
    },
    updateUserRequest({dispatch}, payload) {
      const id = payload.id;
      dispatch("updatingUser");
      axios.put(`/users/${id}`, {id, data: payload}).then(res => {
        dispatch("updateUser", res.data);
      });

      dispatch("receivingUsers");
      axios.get('/users').then(res => {
        dispatch("receiveUsers", res.data.rows);
      })
    },
    createUserRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;
      dispatch("receivingUsers");
      axios.post('/users', {data: payload}).then(res => {
        dispatch("receiveUser", res.data);
      })

      dispatch("receivingUsers");
      axios.get('/users').then(res => {
        dispatch("receiveUsers", res.data.rows);
      })
    },
    deleteUserRequest({dispatch}, payload) {
      dispatch("deletingUser", payload);
      axios.delete('/users/' + payload.id).then(() => {
        dispatch("deleteUser", {id: payload.id});
      })
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
