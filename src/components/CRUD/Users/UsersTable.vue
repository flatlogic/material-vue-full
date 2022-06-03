<template>
  <div>
    <router-link :to="$route.fullPath + '/new'">
      <v-btn color="primary mb-3"> New </v-btn>
    </router-link>
    <v-btn color="primary mb-3 mx-3" @click="addFilter"> Add filter </v-btn>

    <div class="my-4 ml-3">
      <a :href="externalLink"> API documentation for users </a>
    </div>

    <v-card class="mb-6 mt-3 pa-3" v-show="showFilters">
      <FilterForm
        v-for="(component, index) in config"
        :filters="filters"
        :key="index"
        :id="index"
        @apply="apply"
        @delFilter="delFilter(index)"
      />
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn class="default mr-3" @click="clearFilters"> Clear </v-btn>
          <v-btn class="primary mb-3" @click="submitHandler"> Apply </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-data-table
      :headers="headers"
      :items="tableData"
      :search="search"
      :loading="loading"
      @click:row="rowClickHandler"
      :options.sync="options"
      :server-items-length="count"
      :footer-props="{
        'items-per-page-options': [10, 20, 50, 100],
      }"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Filter"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.disabled="{ item }">
        <span>
          {{ dataFormatter.booleanFormatter(item.disabled) }}
        </span>
      </template>

      <template v-slot:item.avatar="{ item }">
        <div class="pa-1">
          <div
            :style="{
              background: `url(${dataFormatter.oneImageFormatter(
                item.avatar,
              )}) center center / cover`,
            }"
            class="table-img"
          ></div>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="greyTint">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <router-link
              class="text-decoration-none"
              :to="`/admin/users/${item.id}/edit`"
            >
              <v-list-item>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
            </router-link>
            <v-list-item @click="showDeleteModal(item.id)">
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template v-slot:no-data>
        <span>No matching records</span>
      </template>
    </v-data-table>

    <v-dialog v-model="modal" max-width="390">
      <v-card>
        <v-card-title class="headline greyMedium--text"
          >Confirm delete</v-card-title
        >

        <v-card-text> Are you sure you want to delete this item? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" outlined @click="modal = false">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="del"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  import dataFormatter from '@/use/dataFormatter.js';
  import FilterForm from '@/components/Filter/Filter';

  export default {
    components: { FilterForm },
    data() {
      return {
        config: [],
        search: '',
        modal: false,
        headers: [
          { text: 'First Name', value: 'firstName' },
          { text: 'Last Name', value: 'lastName' },
          { text: 'Phone Number', value: 'phoneNumber' },
          { text: 'E-Mail', value: 'email' },
          { text: 'Role', value: 'role' },
          { text: 'Disabled', value: 'disabled' },
          { text: 'Avatar', value: 'avatar' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        showFilters: false,
        filters: [
          { label: 'First Name', title: 'firstName' },
          { label: 'Last Name', title: 'lastName' },
          { label: 'Phone Number', title: 'phoneNumber' },
          { label: 'E-Mail', title: 'email' },
        ],
        options: {},
      };
    },
    watch: {
      options: {
        handler() {
          this.getData({
            page: this.options.page - 1,
            limit: this.options.itemsPerPage,
            field: this.options.sortBy[0],
            sort: this.options.sortDesc[0] === true ? 'desc' : 'asc',
          });
        },
        deep: true,
      },
    },
    computed: {
      ...mapState({
        loading: (state) => state.users.loading,
        tableData: (state) => state.users.rows,
        modalOpen: (state) => state.users.modalOpen,
        deleteId: (state) => state.users.deleteId,
        count: (state) => state.users.count,
      }),
      dataFormatter() {
        return dataFormatter;
      },
      externalLink: () => {
        return process.env.NODE_ENV === 'production'
          ? window.location.origin + '/api-docs/#/Users'
          : 'http://localhost:8080/api-docs/#/Users';
      },
    },
    methods: {
      ...mapActions({
        getData: 'users/getData',
        getFilteredData: 'users/getFilteredData',
        deleteItem: 'users/deleteItem',
      }),
      ...mapMutations({
        setDeleteId: 'users/setDeleteId',
      }),
      delFilter(index) {
        this.config.splice(index, 1);
        this.config.length === 0 ? (this.showFilters = false) : null;
      },
      addFilter() {
        !this.showFilters ? (this.showFilters = true) : null;
        this.config.push({});
      },
      clearFilters() {
        this.getData();
      },
      showDeleteModal(id) {
        this.modal = true;
        this.setDeleteId(id);
      },
      del() {
        this.deleteItem();
        this.modal = false;
      },
      submitHandler() {
        let request = '?';
        this.config.forEach((item) => {
          item.number
            ? (request += `${item.filter}Range=${item.valueFrom}&${item.filter}Range=${item.valueTo}&`)
            : (request += `${item.filter}=${item.value}&`);
        });
        this.getFilteredData(request);
      },
      apply(data) {
        let id = data.id;
        this.config.splice(id, 1, data);
      },
      rowClickHandler(row) {
        this.$router.push(`/admin/users/${row.id}/edit`);
      },
    },
  };
</script>

<style scoped>
  .image-preview {
    width: 191px;
    height: 141px;
    background-size: cover;
    background-position: 50% center;
  }
  .table-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .file {
    display: block;
    white-space: nowrap;
  }
</style>
