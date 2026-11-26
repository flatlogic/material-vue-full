<template>
  <v-container fluid class="product-management mt-4 px-1">
    <v-row>
      <v-col cols="12">
        <v-card class="mb-1">
          <v-card-title class="d-flex align-center pa-5 pb-3">
            <p>Products</p><span class="text-grey font-weight-regular text-subtitle-2 pt-1">{{'\xa0 (' +  products.length }} total) </span>
            <v-spacer></v-spacer>
            <div>
              <v-text-field
                v-model="search"
                append-inner-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="search"
              ></v-text-field>
            </div>
          </v-card-title>
          <v-card-text class="px-5">
            <v-data-table
              :loading="isReceiving || isDeleting"
              loading-text="Loading... Please wait"
              class="product-table"
              show-select
              :headers="headers"
              :items="products"
              :search="search"
              :sort-by="[{ key: 'id', order: 'asc' }]">
              <template #top>
                <v-dialog v-model="dialog" max-width="500px">
                  <template #activator="{ props }">
                    <v-btn
                      color="success"
                      class="my-4 button-shadow"
                      v-bind="props"
                    >Create Product</v-btn>
                  </template>
                  <v-card class="edit-dialog">
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field variant="outlined" v-model="editedItem.title" label="Product name"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field variant="outlined" v-model="editedItem.subtitle" label="Subtitle"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field variant="outlined" v-model="editedItem.price" label="Price"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field :rules="ratingRules" variant="outlined" v-model="editedItem.rating" type="number" label="Rating"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select variant="outlined" :items="images" v-model="editedItem.img" label="Image">
                              <template #item="{ item, props }">
                                <v-list-item v-bind="props" :title="null"><v-img :src="item.raw" width="50" alt="Available image" /></v-list-item>
                              </template>
                            </v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" variant="outlined" @click="close">Cancel</v-btn>
                      <v-btn color="success" class="button-shadow" @click="save">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              <template #item.img="{ item }">
                <v-img class="my-3" width="100" :src=item.img></v-img>
              </template>
              <template #item.title="{ item }">
                <a class="text-primaryConst">{{ item.title }}</a>
              </template>
              <template #item.rating="{ item }">
                <div class="d-flex align-center">
                  <span class="text-warning" style="font-size: 1rem">{{ item.rating }} </span><v-icon size="20" color="warning">mdi-star</v-icon>
                </div>
              </template>
              <template #item.api="{ item }">
                <v-btn
                  class="mr-3 button-shadow"
                  @click="editItem(item)"
                  size="small"
                  color="success"
                >Edit
                </v-btn>
                <v-btn
                  @click="deleteItem(item)"
                  size="small"
                  class="button-shadow"
                  color="secondary"
                >Delete
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      :close-on-back="false"
        v-model="snackbar"
        color="success"
      location="top end"
        style="top: 50px">
      <div>{{ text }}</div>
      <template #actions="{ props }">
        <v-btn
          variant="text"
          v-bind="props"
          @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import config from "@/config";
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'ProductManagement',
    data() {
      return {
        snackbar: null,
        search: '',
        dialog: false,
        headers: [
          {
            title: 'ID',
            align: 'start',
            key: 'id',
          },
          { title: 'Image', key: 'img', sortable: false },
          { title: 'Title', key: 'title' },
          { title: 'Subtitle', key: 'subtitle' },
          { title: 'Price', key: 'price' },
          { title: 'Rating', key: 'rating' },
          { title: 'Actions', key: 'api', sortable: false },
        ],
        ratingRules: [
          v => !!v || "This field is required",
          v => ( v && v >= 0 ) || "Rating should be above 0",
          v => ( v && v <= 5 ) || "Max Rating not be above 5",
        ],
        selected: [],
        editedIndex: -1,
        editedItem: {
          title: '',
          img: '',
          subtitle: '',
          price: '',
          rating: '',
        },
        defaultItem: {
          title: '',
          img: '',
          subtitle: '',
          price: '',
          rating: '',
        },
        images: [
          new URL('../../../assets/img/e-commerce/low/1.png', import.meta.url).href,
          new URL('../../../assets/img/e-commerce/low/2.png', import.meta.url).href,
          new URL('../../../assets/img/e-commerce/low/3.png', import.meta.url).href,
          new URL('../../../assets/img/e-commerce/low/4.png', import.meta.url).href,
          new URL('../../../assets/img/e-commerce/low/5.png', import.meta.url).href,
          new URL('../../../assets/img/e-commerce/low/6.png', import.meta.url).href
       ],
        notification: 'Demo changes last until you reload the page. Connect a backend to save them.'
      }
    },
    computed: {
        ...mapState('products', ['products', "isReceiving", "isDeleting", "idToDelete", "productMessage", "isUpdating"]),
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
      },
    watch: {
      dialog (val) {
          val || this.close()
        },
      productMessage() {
        if (this.productMessage !== '') {
          this.notification = this.productMessage
          this.addSuccessNotification()
        }
      }
    },
    created () {
        this.addSuccessNotification()
      },
    mounted() {
      this.getProductsRequest()
    },
    methods: {
      ...mapActions('products',
        [
          "getProductsRequest",
          "deleteProductRequest",
          "updateProductRequest",
          "createProductRequest"
        ]
      ),
      editItem (item) {
        this.editedIndex = this.products.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      async deleteItem(item) {
        if (window.confirm('Delete this product?')) {
          await this.deleteProductRequest({ id: item.id });
        }
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      async save() {
        if (this.editedIndex > -1) {
          await this.updateProductRequest(this.editedItem);
        } else {
          await this.createProductRequest(this.editedItem);
        }
        this.close();
      },
      addSuccessNotification() {
        this.snackbar = true;
        this.color = config.light.success;
        this.text = this.notification;
      },
    },
  }
</script>

<style src="./ProductManagement.scss" lang="scss"/>
