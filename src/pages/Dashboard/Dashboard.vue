<template>
  <div>
    <div class="dashboard-page">
      <h1 class="page-title mt-2">
        Welcome,
        {{
          currentUser && currentUser.firstName ? currentUser.firstName : 'User'
        }}
      </h1>
      <v-card width="100%" class="mx-1 mb-6">
        <v-row no-gutters class="d-flex align-center mt-8 mb-3 px-5 py-1 mx-1">
          <v-col
            cols="12"
            md="6"
            class="d-sm-flex justify-content-center align-center"
          >
            <img class="d-block" src="../../assets/logo.svg" alt="Vue" />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        currentUser: (state) => state.auth.currentUser,
      }),
    },
  };
</script>
