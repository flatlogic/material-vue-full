<template>
  <v-container fluid class="user-list mt-3">
    <v-row class="ma-0">
      <v-card width="100%" class="ma-1">
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" md="6" class="d-flex justify-space-between justify-md-start">
              <v-btn to="/user/add" color="success" class="button-shadow mr-3">
                <v-icon class="mr-2">mdi-plus</v-icon>
                Add
              </v-btn>
              <v-btn color="primary" outlined class="button-shadow">
                <v-icon class="mr-2">mdi-filter-variant</v-icon>
                Filters
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-end mt-3 mt-md-0">
              <v-btn color="secondary" outlined :block=$vuetify.breakpoint.smAndDown>
                <v-icon class="mr-3">mdi-download</v-icon>
                Download
              </v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-end mt-3">
              <div :style="$vuetify.breakpoint.smAndDown ? 'width: 100%' : 'width: 250px'">
                <v-text-field
                  dense
                  :full-width=$vuetify.breakpoint.smAndDown
                  outlined
                  hide-details
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="ma-1">
          <v-card-text>
            <v-data-table
              class="users-table"
              show-select
              :headers="headers"
              :items="users"
              sort-by="calories"
              :items-per-page="itemPerPage"
            >
              <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card class="edit-dialog" >
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field outlined v-model="editedItem.name" label="Name"></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field outlined v-model="editedItem.email" label="Email"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-select outlined :items="role" v-model="editedItem.role" label="Role"></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field outlined v-model="editedItem.company" label="Company"></v-text-field>
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
              <template v-slot:item.image="{ item }">
                <v-img class="my-3" width="34" :src=item.image></v-img>
              </template>
              <template v-slot:item.name="{ item }">
                <a class="primaryConst--text">{{ item.name }}</a>
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip :color="item.status === 'Active' ? 'primaryConst white--text' : 'secondaryConst white--text'" small>{{ item.status }}</v-chip>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-btn icon color="primary" @click="editItem(item)">
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn icon color="primary">
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="deleteItem(item)">
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from "./mock"

export default {
  name: 'UserList',
  data() {
    return {
      mock,
      dialog: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Image', value: 'image', sortable: false },
        { text: 'Name', value: 'name' },
        { text: 'Role', value: 'role' },
        { text: 'Company', value: 'company' },
        { text: 'Email', value: 'email' },
        { text: 'Status', value: 'status' },
        { text: 'Create', value: 'create' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      selected: [],
      users: [],
      role: ['Admin', 'User'],
      editedIndex: -1,
      editedItem: {
        name: '',
        image: '',
        role: '',
        company: '',
        email: '',
        status: '',
        create: '',
      },
      defaultItem: {
        name: '',
        image: '',
        role: '',
        company: '',
        email: '',
        status: '',
        create: '',
      },
      images: [
        require('@/assets/img/user/avatars/1.png'),
        require('@/assets/img/user/avatars/2.png'),
        require('@/assets/img/user/avatars/3.png'),
        require('@/assets/img/user/avatars/4.png'),
        require('@/assets/img/user/avatars/5.png'),
      ],
      itemPerPage: 5
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit User'
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
      this.users = mock
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.users.indexOf(item);
      confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
    },

    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style src="./List.scss" lang="scss"></style>
