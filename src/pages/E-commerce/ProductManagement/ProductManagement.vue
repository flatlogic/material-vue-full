<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Product Management</h1>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Products</p>
          </v-card-title>
          <v-card-text>
            <v-data-table
              show-select
              :headers="headers"
              :items="desserts"
              sort-by="calories"
            >
              <template v-slot:top>
                <v-toolbar flat color="white">
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
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
                              <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
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
              <template v-slot:item.image="{ item }"> <v-img class="my-3" width="100" :src=item.image></v-img> </template>
              <template v-slot:item.actions>
                <v-btn
                  class="mr-3"
                  @click="editItem(item)"
                  small
                  color="success"
                >Edit
                </v-btn>
                <v-btn
                  @click="deleteItem(item)"
                  small
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
          desserts: [],
          editedIndex: -1,
          editedItem: {
              name: '',
              calories: 0,
              fat: 0,
              carbs: 0,
              protein: 0,
          },
          defaultItem: {
              name: '',
              calories: 0,
              fat: 0,
              carbs: 0,
              protein: 0,
          },
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
              this.desserts = [
                  {
                      id: '1',
                      image: require('@/assets/img/e-commerce/1.png'),
                      title: 'Trainers',
                      subtitle: 'Trainers in white',
                      price: '$80',
                      rating: '4.6',
                      actions: '1234',
                  },
                  {
                      id: '2',
                      image: require('@/assets/img/e-commerce/1.png'),
                      title: 'Boots',
                      subtitle: 'Trainers in blue',
                      price: '$37',
                      rating: '4.6',
                      actions: true,
                  },
                  {
                      id: '3',
                      image: require('@/assets/img/e-commerce/1.png'),
                      title: 'Flat sandals',
                      subtitle: 'Trainers in white',
                      price: '$70',
                      rating: '4.6',
                      actions: true,
                  },
              ]
          },

          editItem (item) {
              this.editedIndex = this.desserts.indexOf(item)
              this.editedItem = Object.assign({}, item)
              this.dialog = true
          },

          deleteItem (item) {
              const index = this.desserts.indexOf(item)
              confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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
                  Object.assign(this.desserts[this.editedIndex], this.editedItem)
              } else {
                  this.desserts.push(this.editedItem)
              }
              this.close()
          },
      },
  }
</script>