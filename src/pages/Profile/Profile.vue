<template>
  <v-card class="mt-6 py-3">
    <form @submit.prevent="submitHandler">
      <div class="px-8">
        <v-row>
          <v-col cols="12">
            <h4 class="page-title">Profile</h4>
          </v-col>

          <v-col cols="3" class="d-flex align-center">
            <p class="fs-normal greyBold--text mb-0">First Name</p>
          </v-col>
          <v-col cols="9">
            <v-text-field label="First Name" v-model="firstName"></v-text-field>
          </v-col>

          <v-col cols="3" class="d-flex align-center">
            <p class="fs-normal greyBold--text mb-0">Last Name</p>
          </v-col>
          <v-col cols="9">
            <v-text-field label="Last Name" v-model="lastName"></v-text-field>
          </v-col>

          <v-col cols="3" class="d-flex align-center">
            <p class="fs-normal greyBold--text mb-0">Phone Number</p>
          </v-col>
          <v-col cols="9">
            <v-text-field
              label="Phone Number"
              v-model="phoneNumber"
            ></v-text-field>
          </v-col>

          <v-col cols="3" class="d-flex align-center">
            <p class="fs-normal greyBold--text mb-0">Role</p>
          </v-col>
          <v-col cols="9">
            <v-radio-group v-model="role" row>
              <v-col cols="12" sm="4" md="4">
                <v-radio label="admin" value="admin"></v-radio>
              </v-col>

              <v-col cols="12" sm="4" md="4">
                <v-radio label="user" value="user"></v-radio>
              </v-col>
            </v-radio-group>
          </v-col>

          <v-col cols="3" class="d-flex align-center">
            <p class="fs-normal greyBold--text mb-0">Disabled</p>
          </v-col>
          <v-col cols="9">
            <v-checkbox
              label="Disabled"
              v-model="disabled"
              hide-details
            ></v-checkbox>
          </v-col>

          <ImageUploader
            label="Avatar"
            id="0E45B-21AB-1D9D-58B8"
            url="users/avatar"
            :images="avatar"
            @change="avatarAdd"
            @del="avatarDel"
          />

          <v-col cols="12 mt-5">
            <v-btn type="submit" color="primary"> Save </v-btn>

            <v-btn @click="formatData" class="ml-2"> Reset </v-btn>

            <router-link :to="cancelUrl" class="text-decoration-none">
              <v-btn type="button" class="ml-2"> Cancel </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </form>
  </v-card>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  import dataFormatter from '@/use/dataFormatter.js';
  import ImageUploader from '@/components/Uploaders/ImageUploader';
  import FileUploader from '@/components/Uploaders/FileUploader';

  export default {
    data() {
      return {
        firstName: '',

        lastName: '',

        phoneNumber: '',

        email: '',

        role: false,

        disabled: false,

        avatar: [],
      };
    },
    computed: {
      ...mapState({
        data: (state) => state.usersForm.data,
      }),

      cancelUrl() {
        return (
          '/' + this.$route.fullPath.split('/').slice(1).splice(0, 2).join('/')
        );
      },
      dataFormatter() {
        return dataFormatter;
      },
    },
    methods: {
      ...mapMutations({
        showSnackbar: 'snackbar/showSnackbar',
      }),
      ...mapActions({
        getData: 'usersForm/getData',

        edit: 'usersForm/edit',
      }),
      async submitHandler() {
        const data = this.data;

        data.firstName = this.firstName;

        data.lastName = this.lastName;

        data.phoneNumber = this.phoneNumber;

        data.email = this.email;

        data.role = this.role;

        data.disabled = this.disabled;

        data.avatar = this.avatar;

        try {
          await this.edit({ id: this.id, data });
          this.$router.push('/admin/users');
        } catch (e) {
          this.showSnackbar(e);
        }
      },

      avatarAdd(val) {
        this.avatar.push(val);
      },
      avatarDel(id) {
        this.avatar = this.avatar.filter((img) => img.id !== id);
      },

      formatData() {
        this.firstName = this.data.firstName;

        this.lastName = this.data.lastName;

        this.phoneNumber = this.data.phoneNumber;

        this.email = this.data.email;

        this.role = this.data.role;

        this.avatar = this.data.avatar;
      },
    },
    async beforeMount() {
      try {
        const { user } = JSON.parse(localStorage.getItem('user'));
        const id = user.id;

        if (id) {
          this.id = id;
          await this.getData(id);
          this.formatData();
        }
      } catch (e) {
        this.showSnackbar(e);
      }
    },
    watch: {},
    // eslint-disable-next-line vue/no-unused-components
    components: {
      ImageUploader,
      FileUploader,
      VDatetimePicker: () =>
        import('vuetify-datetime-picker/src/components/DatetimePicker.vue'),
    },
  };
</script>
