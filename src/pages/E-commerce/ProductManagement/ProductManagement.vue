<template>
  <v-container fluid class="product-management mt-3">
    <v-row>
      <v-col cols="12">
        <v-card class="mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Products</p><pre>&nbsp;</pre><span class="grey--text font-weight-regular subtitle-2 pt-1">({{ products.length }} total) </span>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                style="width: 5%"
            ></v-text-field>
          </v-card-title>
          <v-card-text class="px-5">
            <v-data-table
              show-select
              :headers="headers"
              :items="products"
              :search="search"
              sort-by="calories"
            >
              <template v-slot:top>
                <v-toolbar flat color="transparent" class="ml-n3">
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="success"
                        dark
                        class="mb-2 button-shadow"
                        v-bind="attrs"
                        v-on="on"
                      >Create Product</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.title" label="Product name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.subtitle" label="Subtitle"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.rating" label="Rating"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-select :items="images" v-model="editedItem.image" label="Image">
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
                        <v-btn color="warning" text @click="close">Cancel</v-btn>
                        <v-btn color="success" text @click="save">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.image="{ item }">
                <v-img class="my-3" width="100" :src=item.image></v-img>
              </template>
              <template v-slot:item.title="{ item }">
                <a class="primary-text">{{ item.title }}</a>
              </template>
              <template v-slot:item.rating="{ item }">
                <div class="d-flex align-center">
                  <span class="warning--text" style="font-size: 1rem">{{ item.rating }} </span><v-icon color="warning">mdi-star</v-icon>
                </div>
              </template>
              <template v-slot:item.actions="{ item }">
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
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProductManagement',
      data() {
        return {
          search: '',
          dialog: false,
          headers: [
            {
              text: 'ID',
              align: 'start',
              sortable: false,
              value: 'id',
            },
            { text: 'Image', value: 'image', sortable: false },
            { text: 'Title', value: 'title' },
            { text: 'Subtitle', value: 'subtitle' },
            { text: 'Price', value: 'price' },
            { text: 'Rating', value: 'rating' },
            { text: 'Actions', value: 'actions', sortable: false },
          ],
          selected: [],
          products: [],
          editedIndex: -1,
          editedItem: {
            title: '',
            image: '',
            subtitle: '',
            price: '',
            rating: '',
          },
          defaultItem: {
            title: '',
            image: '',
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
         ]
        }
      },

      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
      },

      watch: {
        dialog (val) {
          val || this.close()
        },
      },

      created () {
        this.initialize()
      },

      methods: {
        initialize () {
          this.products = [
            {
              id: '1',
              image: require('@/assets/img/e-commerce/low/1.png'),
              title: 'Trainers',
              subtitle: 'Trainers in white',
              price: '$80',
              rating: '4.6',
              actions: true,
            },
            {
              id: '2',
              image: require('@/assets/img/e-commerce/low/2.png'),
              title: 'Boots',
              subtitle: 'Trainers in blue',
              price: '$37',
              rating: '4.6',
              actions: true,
            },
            {
              id: '3',
              image: require('@/assets/img/e-commerce/low/3.png'),
              title: 'Flat sandals',
              subtitle: 'Trainers in white',
              price: '$70',
              rating: '4.6',
              actions: true,
            },
            {
              id: '4',
              image: require('@/assets/img/e-commerce/low/4.png'),
              title: 'Trainers',
              subtitle: 'Trainers in blue',
              price: '$85',
              rating: '4.6',
              actions: true,
            },
            {
              id: '5',
              image: require('@/assets/img/e-commerce/low/5.png'),
              title: 'Flat sandals',
              subtitle: 'Trainers in white',
              price: '$12',
              rating: '4.6',
              actions: true,
            },
            {
              id: '6',
              image: require('@/assets/img/e-commerce/low/6.png'),
              title: 'Flat sandals',
              subtitle: 'Trainers in blue',
              price: '$76',
              rating: '4.6',
              actions: true,
            },
            {
              id: '7',
              image: require('@/assets/img/e-commerce/low/1.png'),
              title: 'Trainers',
              subtitle: 'Trainers in white',
              price: '$80',
              rating: '4.6',
              actions: '1234',
            },
            {
              id: '8',
              image: require('@/assets/img/e-commerce/low/2.png'),
              title: 'Boots',
              subtitle: 'Trainers in blue',
              price: '$37',
              rating: '4.6',
              actions: true,
            },
            {
              id: '9',
              image: require('@/assets/img/e-commerce/low/3.png'),
              title: 'Flat sandals',
              subtitle: 'Trainers in white',
              price: '$70',
              rating: '4.6',
              actions: true,
            },
            {
              id: '10',
              image: require('@/assets/img/e-commerce/low/4.png'),
              title: 'Trainers',
              subtitle: 'Trainers in blue',
              price: '$85',
              rating: '4.6',
              actions: true,
            },
            {
              id: '11',
              image: require('@/assets/img/e-commerce/low/5.png'),
              title: 'Flat sandals',
              subtitle: 'Trainers in white',
              price: '$12',
              rating: '4.6',
              actions: true,
            },
            {
              id: '12',
              image: require('@/assets/img/e-commerce/low/6.png'),
              title: 'Flat sandals',
              subtitle: 'Trainers in blue',
              price: '$76',
              rating: '4.6',
              actions: true,
            },
          ]
        },

        editItem (item) {
          this.editedIndex = this.products.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },

        deleteItem (item) {
          const index = this.products.indexOf(item)
          confirm('Are you sure you want to delete this item?') && this.products.splice(index, 1)
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
            Object.assign(this.products[this.editedIndex], this.editedItem)
          } else {
            this.products.push(this.editedItem)
          }
          this.close()
        },
      },
  }
</script>

<style src="./ProductManagement.scss" lang="scss"/>
