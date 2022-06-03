<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Vue Material Admin</p>
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
                <v-tabs grow v-model="loginTabs" class="my-16" light>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`"> LOGIN </v-tab>
                  <v-tab :href="`#tab-newUser`"> New User </v-tab>

                  <v-tab-item :value="'tab-login'">
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
                            <v-btn
                              height="45"
                              light
                              block
                              color="white"
                              elevation="0"
                              class="google text-capitalize"
                              @click="googleLogin"
                            >
                              <v-img
                                src="@/assets/google.svg"
                                max-width="30"
                                class="mr-4"
                              ></v-img>
                              Sign in with Google</v-btn
                            >
                          </v-col>
                          <v-col
                            cols="12"
                            class="d-flex align-center my-3 my-sm-8"
                          >
                            <v-divider light></v-divider>
                            <span class="px-5 black--text"> or </span>
                            <v-divider light></v-divider>
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
                                value="admin@flatlogic.com"
                                label="Email Address"
                                required
                                @keydown.enter="isFormValid && login()"
                              ></v-text-field>
                              <v-text-field
                                light
                                id="password"
                                ref="password"
                                v-model="password"
                                :rules="passRules"
                                single-line
                                type="password"
                                label="Password"
                                required
                                @keydown.enter="isFormValid && login()"
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                class="text-capitalize"
                                large
                                :disabled="!isFormValid"
                                color="primary"
                                :loading="isFetching"
                                @click="login"
                              >
                                Login
                              </v-btn>
                              <v-btn
                                large
                                text
                                class="text-capitalize primary--text"
                                @click="$router.push('/forgot')"
                              >
                                Forget Password
                              </v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                  <v-tab-item :value="'tab-newUser'">
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
                                mt-10
                              "
                            >
                              Welcome!
                            </p>
                            <p
                              class="
                                login-slogan
                                display-1
                                text-center
                                font-weight-medium
                                mb-10
                              "
                            >
                              Create your account
                            </p>
                          </v-col>

                          <v-form>
                            <v-col>
                              <v-text-field
                                light
                                v-model="createEmail"
                                :rules="createEmailRules"
                                single-line
                                hide-details
                                label="Email Address"
                                required
                              ></v-text-field>
                              <v-text-field
                                light
                                v-model="createPassword"
                                :rules="passRules"
                                hide-details
                                single-line
                                type="password"
                                label="Password"
                                hint="At least 6 characters"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                light
                                large
                                block
                                :disabled="
                                  createEmail.length === 0 ||
                                  createPassword === 0
                                "
                                color="primary"
                                :loading="regIsFetching"
                                @click="register"
                              >
                                Create your account</v-btn
                              >
                            </v-col>
                          </v-form>

                          <v-col
                            cols="12"
                            class="d-flex align-center my-2 my-sm-8"
                          >
                            <v-divider light></v-divider>
                            <span class="px-5 black--text"> or </span>
                            <v-divider light></v-divider>
                          </v-col>

                          <v-btn
                            light
                            @click="googleLogin"
                            height="45"
                            block
                            color="white"
                            elevation="0"
                            class="google text-capitalize"
                          >
                            <v-img
                              src="@/assets/google.svg"
                              max-width="30"
                              class="mr-4"
                            ></v-img>
                            Sign in with Google</v-btn
                          >
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">
                  {{ new Date().getFullYear() }} &copy; Vue Material Admin
                  - Made by <a href="https://flatlogic.com/">Flatlogic</a>
                </div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="alert" color="error">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="alert = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import config from '../../config';

  export default {
    name: 'Login',
    data() {
      return {
        valid: true,
        loginTabs: '',
        email: 'admin@flatlogic.com',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
          (v) => v.toLowerCase() === this.email,
        ],
        createEmailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
          (v) => v.toLowerCase() === this.createEmail,
        ],
        createEmail: '',
        createPassword: '',
        password: 'password',
        passRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'Min 6 characters',
        ],
        alert: false,
        message: '',
      };
    },
    methods: {
      ...mapActions('register', ['registerUser', 'registerError']),
      ...mapActions('auth', ['loginUser', 'receiveToken', 'receiveLogin']),
      login() {
        const email = this.email;
        const password = this.password;
        this.loginUser({ email, password });
      },
      googleLogin() {
        this.loginUser({ social: 'google' });
      },
      async register() {
        await this.registerUser({
          email: this.createEmail,
          password: this.createPassword,
        }).then(() => {
          this.createEmail = '';
          this.createPassword = '';
          this.loginTabs = 'tab-login';
        });
      },
    },
    computed: {
      ...mapState('auth', {
        isFetching: (state) => state.isFetching,
        errorMessage: (state) => state.errorMessage,
      }),
      ...mapState('register', {
        regIsFetching: (state) => state.isFetching,
        regErrorMessage: (state) => state.errorMessage,
      }),
      isFormValid() {
        return this.password.length !== 0 && this.email.length !== 0;
      },
    },

    watch: {
      errorMessage() {
        this.message = this.errorMessage;
        this.alert = true;
      },
      regErrorMessage() {
        this.message = this.regErrorMessage;
        this.alert = true;
      },
    },

    created() {
      const token = this.$route.query.token;
      if (token) {
        this.receiveToken(token);
      } else if (this.isAuthenticated()) {
        this.receiveLogin();
      }
    },
    mounted() {
      const creds = config.auth;
      this.email = creds.email;
      this.password = creds.password;
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
