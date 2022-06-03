<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Vue Material Admin </p>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="5"
          class="login-part d-flex align-center justify-center"
        >
          <v-row no-gutters class="align-start">
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center flex-column"
            >
              <div class="login-wrapper pt-16 pt-sm-0">
                <v-form>
                  <v-container>
                    <v-row class="flex-column">
                      <v-col>
                        <p
                          class="
                            login-slogan
                            display-2
                            text-center
                            font-weight-medium
                            my-10
                          "
                        >
                          Good Morning, User
                        </p>
                      </v-col>
                      <v-form ref="log" v-model="valid" lazy-validation>
                        <v-col>
                          <v-text-field
                            light
                            id="email"
                            ref="email"
                            v-model="email"
                            :rules="emailRules"
                            single-line
                            label="Email Address"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex justify-space-between">
                          <v-btn
                            class="text-capitalize"
                            large
                            :disabled="!email"
                            color="primary"
                            :loading="isFetching"
                            @click="submitHandler"
                          >
                            send
                          </v-btn>
                          <v-btn
                            large
                            text
                            class="text-capitalize primary--text"
                            @click="$router.push('/login')"
                          >
                            Enter the account
                          </v-btn>
                        </v-col>
                      </v-form>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">
                  {{ new Date().getFullYear() }} &copy; vue material test model
                  - Made by <a href="https://flatlogic.com/">Flatlogic</a>
                </div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        valid: true,
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
          (v) => v.toLowerCase() === this.email,
        ],
      };
    },
    computed: {
      ...mapState('forgot', ['isFetching']),
    },
    methods: {
      ...mapActions('forgot', ['forgot']),
      async submitHandler() {
        await this.forgot(this.email);
        this.email = '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../styles/_variables.scss';

  .main-part {
    width: 100%;
    height: 100vh;
    background-color: var(--v-primary-base);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 84px;
        color: white;
        font-weight: 500;
      }
      .v-image {
        margin-bottom: 32px;
      }
    }
  }
  .login-part {
    width: 100%;
    height: 100vh;
    background-color: #f6f7ff;
    overflow-y: auto;
    .login-wrapper {
      width: 320px;
      height: auto;
      .login-slogan {
        color: #4a4a4a;
      }
      .v-btn.google {
        box-shadow: $card-shadow !important;
      }
      ::v-deep .v-tabs {
        .v-tab {
          font-size: 18px;
        }
        .v-item-group {
          background-color: #f6f7ff;
        }
      }
    }
    .v-footer {
      position: absolute;
      bottom: 0;
      background-color: #f6f7ff;
    }
  }
</style>
