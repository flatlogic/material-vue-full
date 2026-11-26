import api from "@/api";
import mock from "../pages/E-commerce/mock";
import config from "../config";

export default {
  namespaced: true,
  state: {
    products: config.isBackend ? [] : mock.map(item => ({ ...item })),
    images: [],
    isReceiving: false,
    isUpdating: false,
    isDeleting: false,
    idToDelete: null,
    productMessage: ''
  },
  mutations: {
    FINISHED_PRODUCT_REQUEST(state, flag) {
      state[flag] = false;
    },
    RECEIVED_PRODUCTS(state, payload) {
      state.products = payload;
      state.isReceiving = false;
    },
    RECEIVING_PRODUCTS(state) {
      state.isReceiving = true;
    },
    RECEIVED_PRODUCT(state, payload) {
      state = Object.assign(state, {
        products: [...state.products, payload],
        isReceiving: false,
      })
    },
    RECEIVING_PRODUCT(state) {
      state.isReceiving = true;
    },
    UPDATED_PRODUCT(state, payload) {
      let index = state.products.findIndex(p => p.id === payload.id);
      state = Object.assign(state, {
        products: state.products.map((p, i) => {
          if (i === index) {
            return Object.assign({}, p, payload);
          }
          return p;
        }),
        isUpdating: false,
        productMessage: 'Product updated.',
      })
    },
    UPDATING_PRODUCT(state) {
      state.isUpdating = true;
    },
    DELETED_PRODUCT(state, payload) {
      Object.assign(state, {
        products: state.products.filter(item => item.id !== payload.id),
        isDeleting: false,
        idToDelete: null,
        productMessage: 'Product deleted.',
      });
    },
    DELETING_PRODUCT(state, payload) {
      state.isDeleting = true;
      state.idToDelete = payload.id;
    },
  },
  actions: {
    async getProductsRequest({ state, commit }) {
      if (!config.isBackend) return state.products;
      commit('RECEIVING_PRODUCTS');
      try {
        const { data } = await api.get('/products');
        commit('RECEIVED_PRODUCTS', data);
      } finally {
        commit('FINISHED_PRODUCT_REQUEST', 'isReceiving');
      }
    },
    async loadProductRequest({ state }, id) {
      if (!config.isBackend) return state.products.find(item => item.id === id);
      const { data } = await api.get(`/products/${id}`);
      return data;
    },
    async updateProductRequest({ commit }, payload) {
      commit('UPDATING_PRODUCT');
      try {
        const item = config.isBackend
          ? (await api.put(`/products/${payload.id}`, payload)).data
          : payload;
        commit('UPDATED_PRODUCT', item);
      } finally {
        commit('FINISHED_PRODUCT_REQUEST', 'isUpdating');
      }
    },
    async createProductRequest({ commit }, payload) {
      commit('RECEIVING_PRODUCT');
      try {
        const item = config.isBackend
          ? (await api.post('/products', payload)).data
          : { ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
        commit('RECEIVED_PRODUCT', item);
      } finally {
        commit('FINISHED_PRODUCT_REQUEST', 'isReceiving');
      }
    },
    async deleteProductRequest({ commit }, payload) {
      commit('DELETING_PRODUCT', payload);
      try {
        if (config.isBackend) await api.delete(`/products/${payload.id}`);
        commit('DELETED_PRODUCT', payload);
      } finally {
        commit('FINISHED_PRODUCT_REQUEST', 'isDeleting');
      }
    },
    receiveProducts({commit}, payload) {
      commit("RECEIVED_PRODUCTS", payload)
    },
    receivingProducts({commit}) {
      commit("RECEIVING_PRODUCTS")
    },
    receiveProduct({commit}, payload) {
      commit("RECEIVED_PRODUCT", payload)
    },
    receivingProduct({commit}) {
      commit("RECEIVING_PRODUCT")
    },
    updateProduct({commit}, payload) {
      commit("UPDATED_PRODUCT", payload)
    },
    updatingProduct({commit}) {
      commit("UPDATING_PRODUCT")
    },
    deleteProduct({commit}, payload) {
      commit("DELETED_PRODUCT", payload)
    },
    deletingProduct({commit}, payload) {
      commit("DELETING_PRODUCT", payload)
    }
  },
};
