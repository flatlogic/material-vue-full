<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-card width="100%" class="mb-6">
        <v-form @submit="submitHandler">
          <v-row
            no-gutters
            class="d-flex align-center mt-8 mb-3 px-5 py-1 mx-1"
          >
            <v-col cols="3" class="d-flex align-center">
              <p class="fs-normal greyBold--text mb-0">Current Password</p>
            </v-col>
            <v-col cols="9">
              <v-text-field
                :rules="oldPassRules"
                type="password"
                v-model="currentPassword"
              ></v-text-field>
            </v-col>

            <v-col cols="3" class="d-flex align-center">
              <p class="fs-normal greyBold--text mb-0">New Password</p>
            </v-col>
            <v-col cols="9">
              <v-text-field
                :rules="passRules"
                type="password"
                v-model="newPassword"
              ></v-text-field>
            </v-col>

            <v-col cols="3" class="d-flex align-center">
              <p class="fs-normal greyBold--text mb-0">Confirm new Password</p>
            </v-col>
            <v-col cols="9">
              <v-text-field
                :rules="passRules"
                type="password"
                v-model="confirmPassword"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-col cols="12">
            <v-btn
              :loading="loading"
              color="primary"
              type="submit"
              class="button-shadow mr-4"
            >
              <span>Change Password</span>
            </v-btn>
            <router-link class="text-decoration-none" to="/app">
              <v-btn color="primary" outlined type="button"> Cancel </v-btn>
            </router-link>
          </v-col>
        </v-form>
      </v-card>
    </div>
  </v-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        passRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'Min 6 characters',
        ],
        oldPassRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 1 || 'The field cannot be empty',
        ],
      };
    },
    computed: {
      ...mapState({
        loading: (state) => state.changePassword.loading,
      }),
    },
    methods: {
      ...mapActions({
        changePassword: 'changePassword/changePassword',
      }),
      submitHandler() {
        if (this.newPassword !== this.confirmPassword) return false;

        this.changePassword({
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        });
      },
    },
  };
</script>
