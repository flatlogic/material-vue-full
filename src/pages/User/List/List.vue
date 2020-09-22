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
              :items="products"
              sort-by="calories"
              :items-per-page="itemPerPage"
            >
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
  name: 'UserList',
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
        { text: 'Name', value: 'name' },
        { text: 'Role', value: 'role' },
        { text: 'Company', value: 'company' },
        { text: 'Email', value: 'email' },
        { text: 'Status', value: 'status' },
        { text: 'Create', value: 'create' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      selected: [],
      products: [],
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
          image: require('@/assets/img/user/avatars/1.png'),
          name: 'Jane Hew',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Active',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '2',
          image: require('@/assets/img/user/avatars/2.png'),
          name: 'Axel Pittman',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Inactive',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '3',
          image: require('@/assets/img/user/avatars/3.png'),
          name: 'Sophia Fernandez',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Active',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '4',
          image: require('@/assets/img/user/avatars/4.png'),
          name: 'Bob Nilson',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Inactive',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '5',
          image: require('@/assets/img/user/avatars/5.png'),
          name: 'Jessica Nilson',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Active',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '6',
          image: require('@/assets/img/user/avatars/1.png'),
          name: 'Jane Hew',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Inactive',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '7',
          image: require('@/assets/img/user/avatars/2.png'),
          name: 'Axel Pittman',
          role: 'Admin',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Active',
          create: '2020-06-07',
          actions: '1234',
        },
        {
          id: '8',
          image: require('@/assets/img/user/avatars/3.png'),
          name: 'Sophia Fernandez',
          role: 'User',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Inactive',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '9',
          image: require('@/assets/img/user/avatars/4.png'),
          name: 'Bob Nilson',
          role: 'Writer',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Active',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '10',
          image: require('@/assets/img/user/avatars/5.png'),
          name: 'Jessica Nilson',
          role: 'User',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Inactive',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '11',
          image: require('@/assets/img/user/avatars/1.png'),
          name: 'Jane Hew',
          role: 'User',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Active',
          create: '2020-06-07',
          actions: true,
        },
        {
          id: '12',
          image: require('@/assets/img/user/avatars/2.png'),
          name: 'Axel Pittman',
          role: 'Writer',
          company: 'Flatlogic',
          email: 'admin@flatlogic.com',
          status: 'Inactive',
          create: '2020-06-07',
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

<style src="./List.scss" lang="scss"></style>
