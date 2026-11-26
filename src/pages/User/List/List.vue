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
              <v-btn color="primary" variant="outlined" class="button-shadow">
                <v-icon class="mr-2">mdi-filter-variant</v-icon>
                Filters
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-end mt-3 mt-md-0">
              <v-btn color="secondary" variant="outlined" :block=$vuetify.display.smAndDown>
                <v-icon class="mr-3">mdi-download</v-icon>
                Download
              </v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-end mt-3">
              <div :style="$vuetify.display.smAndDown ? 'width: 100%' : 'width: 250px'">
                <v-text-field
                  density="compact"
                  v-model="search"
                  variant="outlined"
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
              :loading="isReceiving || isDeleting"
              loading-text="Loading... Please wait"
              class="users-table"
              show-select
              :headers="headers"
              :items="users"
              :search="search"
              :items-per-page="itemPerPage">
              <template #top>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card class="edit-dialog" >
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field variant="outlined" v-model="editedItem.firstName" label="Name"></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field variant="outlined" v-model="editedItem.email" label="Email"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-select hide-details variant="outlined" :items="role" v-model="editedItem.role" label="Role"></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field hide-details variant="outlined" v-model="editedItem.company" label="Company"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-select hide-details variant="outlined" :items="images" v-model="editedItem.avatar" label="Image">
                              <template #item="{ item, props }">
                                <v-list-item v-bind="props" :title="null"><v-img :src="item.raw" width="50" alt="Available image" /></v-list-item>
                              </template>
                            </v-select>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center">
                            <v-switch
                              class="disabledUser"
                              v-model="editedItem.disabled"
                              :label="`${editedItem.firstName}: ${editedItem.disabled ? 'Inactive' : 'Active'}`"
                            ></v-switch>
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
              <template #item.image="{ item }">
                <v-img v-if="item.avatar" class="my-3" width="34" :src="item.avatar" alt=""></v-img>
                <v-avatar
                  v-else
                  color="warning"
                  size="34">
                  <span class="text-white text-h5">{{ (item.firstName || item.email || '?')[0].toUpperCase() }}</span>
                </v-avatar>
              </template>
              <template #item.firstName="{ item }">
                <a class="text-primaryConst">{{ item.firstName }}</a>
              </template>
              <template #item.lastName="{ item }">
                <a class="text-primaryConst">{{ item.lastName }}</a>
              </template>
              <template #item.role="{ item }">
                {{ item.role }}
              </template>
              <template #item.company="{ item }">
                {{ item.company || 'Flatlogic' }}
              </template>
              <template #item.disabled="{ item }">
                <v-chip
                  :color="!item.disabled ? 'primaryConst' : 'secondaryConst'"
                  size="small">
                  {{ item.disabled ? 'Inactive' : 'Active' }}
                </v-chip>
              </template>
              <template #item.createdAt="{ item }">
                {{ new Date(item.createdAt).toLocaleString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric' }) }}
              </template>
              <template #item.actions="{ item }">
                <v-btn variant="text" icon color="primary" @click="editItem(item)">
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn variant="text" icon color="primary">
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
                <v-btn variant="text" icon color="primary" @click="deleteItem(item)">
                  <v-icon>mdi-delete-outline</v-icon>
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
import mock from "./mock"
import config from "../../../config"
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserList',
  data() {
    return {
      mock,
      search: '',
      config,
      snackbar: null,
      dialog: false,
      headers: [
        { title: 'Image', key: 'image', sortable: false },
        { title: 'First Name', key: 'firstName' },
        { title: 'Last Name', key: 'lastName' },
        { title: 'Role', key: 'role' },
        { title: 'Company', key: 'company' },
        { title: 'Email', key: 'email' },
        { title: 'Status', key: 'disabled' },
        { title: 'Create', key: 'createdAt' },
        { title: 'Actions', key: 'actions', sortable: false },
      ],
      selected: [],
      switch1: true,
      role: ['admin', 'user'],
      editedIndex: -1,
      editedItem: {
        firstName: '',
        image: '',
        role: '',
        company: '',
        email: '',
        disabled: '',
        create: '',
      },
      defaultItem: {
        firstName: '',
        image: '',
        role: '',
        company: '',
        email: '',
        disabled: '',
        create: '',
      },
      images: [
        new URL('../../../assets/img/user/avatars/1.png', import.meta.url).href,
        new URL('../../../assets/img/user/avatars/2.png', import.meta.url).href,
        new URL('../../../assets/img/user/avatars/3.png', import.meta.url).href,
        new URL('../../../assets/img/user/avatars/4.png', import.meta.url).href,
        new URL('../../../assets/img/user/avatars/5.png', import.meta.url).href,
      ],
      itemPerPage: 5,
      text: '',
      notification: 'Demo changes last until you reload the page. Connect a backend to save them.'
    }
  },

  computed: {
    ...mapState('usersList', ['users', 'isReceiving', 'isDeleting', 'idToDelete', 'usersMessage', 'isUpdating']),
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit User'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    usersMessage() {
      this.notification = this.usersMessage;
      this.addSuccessNotification()
    }
  },
  created () {
    this.getUsersRequest()
    this.addSuccessNotification()
  },

  methods: {
    ...mapActions('usersList', [
      "getUsersRequest",
      "deleteUserRequest",
      "updateUserRequest",
      "createUserRequest"
    ]),

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true
    },

    async deleteItem(item) {
      if (window.confirm('Delete this user?')) {
        await this.deleteUserRequest({ id: item.id });
      }
    },

    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1
      })
    },

    async save() {
      if (this.editedIndex > -1) {
        await this.updateUserRequest(this.editedItem);
      } else {
        await this.createUserRequest(this.editedItem);
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

<style src="./List.scss" lang="scss"></style>
