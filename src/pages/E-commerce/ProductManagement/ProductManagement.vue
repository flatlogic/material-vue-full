<template>
  <v-container fluid class="product-management mt-4 px-1">
    <v-row>
      <v-col cols="12">
        <v-card class="mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Products</p><span class="grey--text font-weight-regular subtitle-2 pt-1">{{'\xa0 (' +  products.length }} total) </span>
            <v-spacer></v-spacer>
            <div>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
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
              sort-by="id">
              <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="success"
                      dark
                      class="my-4 button-shadow"
                      v-bind="attrs"
                      v-on="on"
                    >Create Product</v-btn>
                  </template>
                  <v-card class="edit-dialog">
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field outlined v-model="editedItem.title" label="Product name"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field outlined v-model="editedItem.subtitle" label="Subtitle"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field outlined v-model="editedItem.price" label="Price"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field :rules="ratingRules" outlined v-model="editedItem.rating" type="number" label="Rating"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select outlined :items="images" v-model="editedItem.img" label="Image">
                              <template v-slot:item="{ item }">
                                <v-img :src="item" width="50" style="margin: 2px"></v-img>
                              </template>
                            </v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" outlined @click="close">Cancel</v-btn>
                      <v-btn color="success" class="button-shadow" @click="save">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              <template v-slot:item.img="{ item }">
                <v-img class="my-3" width="100" :src=item.img></v-img>
              </template>
              <template v-slot:item.title="{ item }">
                <a class="primaryConst--text">{{ item.title }}</a>
              </template>
              <template v-slot:item.rating="{ item }">
                <div class="d-flex align-center">
                  <span class="warning--text" style="font-size: 1rem">{{ item.rating }} </span><v-icon size="20" color="warning">mdi-star</v-icon>
                </div>
              </template>
              <template v-slot:item.api="{ item }">
                <v-btn
                  class="mr-3 button-shadow"
                  @click="editItem(item)"
                  small
                  color="success"
                >Edit
                </v-btn>
                <v-btn
                  @click="deleteItem(item)"
                  small
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
        v-model="snackbar"
        color="success"
        right
        top
        style="top: 50px">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
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
            text: 'ID',
            align: 'start',
            value: 'id',
          },
          { text: 'Image', value: 'img', sortable: false },
          { text: 'Title', value: 'title' },
          { text: 'Subtitle', value: 'subtitle' },
          { text: 'Price', value: 'price' },
          { text: 'Rating', value: 'rating' },
          { text: 'Actions', value: 'api', sortable: false },
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
          require('@/assets/img/e-commerce/low/1.png'),
          require('@/assets/img/e-commerce/low/2.png'),
          require('@/assets/img/e-commerce/low/3.png'),
          require('@/assets/img/e-commerce/low/4.png'),
          require('@/assets/img/e-commerce/low/5.png'),
          require('@/assets/img/e-commerce/low/6.png')
       ],
        notification: 'This page is only available in Vue Material Admin Full with Node.js integration!'
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
      deleteItem (item) {
        if (!config.isBackend ) {
          confirm('Are you sure you want to delete this item?') && this.products.splice(item.id, 1)
        } else {
          confirm('Are you sure you want to delete this item?') && this.deleteProductRequest({id: item.id})
        }
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          !config.isBackend ?
          Object.assign(this.products[this.editedIndex], this.editedItem)
          :
          this.updateProductRequest(this.editedItem)
        } else {
          !config.isBackend ?
          this.products.push(this.editedItem)
          :
          this.createProductRequest(this.editedItem)
        }
        this.close()
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
