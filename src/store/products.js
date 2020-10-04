import axios from "axios";
import mock from "../pages/E-commerce/mock";
import config from "../config";

export default {
  namespaced: true,
  state: {
    products: [],
    images: [],
    isReceiving: false,
    isUpdating: false,
    isDeleting: false,
    idToDelete: null,
    productMessage: ''
  },
  mutations: {
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
        productMessage: 'Products has been updating!',
      })
    },
    UPDATING_PRODUCT(state) {
      state.isUpdating = true;
    },
    DELETED_PRODUCT(state, payload) {
      let indexToDelete = state.products.findIndex(p => p.id === payload.id);
      let products = [...state.products];
      products.splice(indexToDelete, 1);
      state = Object.assign(state, {
        products: [...products],
        isDeleting: false,
        idToDelete: null,
        productMessage: 'Product has been Deleted!',
      });
    },
    DELETING_PRODUCT(state, payload) {
      state.isDeleting = true;
      state.idToDelete = payload.id;
    },
  },
  actions: {
    getProductsRequest({dispatch}) {
      // We check if app runs with backend mode
      if (!config.isBackend) {
        dispatch("receiveProducts", mock);
      }

      else {
        dispatch("receivingProducts");
        axios.get('/products').then(res => {
          dispatch("receiveProducts", res.data);
        })
      }
    },
    loadProductRequest({dispatch}, id) {
      // We check if app runs with backend mode
      if (!config.isBackend) {
        dispatch("receiveProduct", mock.find(arr => arr.id === id));
      }

      else {
        dispatch("receivingProduct");
        axios.get('/products/' + id).then(res => {
          dispatch("receiveProduct", res.data);
        })
      }
    },
    updateProductRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      dispatch("updatingProduct");
      axios.put('/products/' + payload.id, payload).then(res => {
        dispatch("updateProduct", res.data);
      })
    },
    createProductRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      dispatch("receivingProducts");
      axios.post('/products', payload).then(res => {
        dispatch("receiveProduct", res.data);
      })
    },
    deleteProductRequest({dispatch}, payload) {
      // We check if app runs with backend mode
      if (!config.isBackend) return;

      dispatch("deletingProduct", payload);
      axios.delete('/products/' + payload.id).then(() => {
        dispatch("deleteProduct", {id: payload.id});
      })
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
