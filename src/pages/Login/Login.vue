<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Vue Material Admin</p>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center">
          <v-row no-gutters class="align-start">
            <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
              <div class="login-wrapper pt-16 pt-sm-0">
                <v-tabs grow v-model="loginTabs" class="my-16" light>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`">
                    LOGIN
                  </v-tab>
                  <v-tab :href="`#tab-newUser`">
                    New User
                  </v-tab>

                  <v-tab-item :value="'tab-login'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium my-10">Good Morning, User</p>
                            <v-btn
                              height="45"
                              light
                              block
                              color="white"
                              elevation="0"
                              class="google text-capitalize"
                              @click="googleLogin">
                              <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                              Sign in with Google</v-btn>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center my-3 my-sm-8">
                            <v-divider light></v-divider>
                            <span class="px-5 black--text"> or </span>
                            <v-divider light></v-divider>
                          </v-col>
                          <v-form
                            ref="log"
                            v-model="valid"
                            lazy-validation
                          >
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
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                class="text-capitalize"
                                large
                                :disabled="password.length === 0 || email.length === 0"
                                color="primary"
                                :loading="isFetching"
                                @click="login">
                                Login
                              </v-btn>
                              <v-btn
                                large
                                text
                                class="text-capitalize primary--text">
                                Forget Password
                              </v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                  <v-tab-item :value="'tab-newUser'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">

                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium mt-10">Welcome!</p>
                            <p class="login-slogan display-1 text-center font-weight-medium mb-10">Create your account</p>
                          </v-col>

                          <v-form>
                            <v-col>
                              <v-text-field
                                light
                                v-model="createFullName"
                                hide-details
                                single-line
                                label="Full Name"
                                required
                              ></v-text-field>
                              <v-text-field
                                light
                                v-model="createEmail"
                                :rules="emailRules"
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
                                :disabled="createFullName.length === 0 || createEmail.length === 0 || createPassword === 0"
                                color="primary"
                                :loading="regIsFetching"
                                @click="register">
                                Create your account</v-btn>
                            </v-col>
                          </v-form>

                          <v-col cols="12" class="d-flex align-center my-2 my-sm-8">
                            <v-divider light></v-divider>
                            <span class="px-5 black--text"> or </span>
                            <v-divider light></v-divider>
                          </v-col>

                          <v-btn light @click="googleLogin" height="45" block color="white" elevation="0" class="google text-capitalize">
                            <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                            Sign in with Google</v-btn>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                </v-tabs>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">© 2014-2020 Flatlogic, LLC. All rights reserved.</div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="alert"
      color="error">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="alert = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import config from "../../config";

export default {
  name: 'Login',
  data() {
    return {
      valid: true,
      loginTabs: '',
      email: 'admin@flatlogic.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        v => v.toLowerCase() === this.email
      ],
      createFullName: 'John Smith',
      createEmail: 'john@flatlogic.com',
      createPassword: 'password',
      password: 'password',
      passRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Min 6 characters'
      ],
      alert: false,
      message: ''
    }
  },
  methods: {
    ...mapActions('register', ['registerUser', 'registerError']),
    ...mapActions('auth', ['loginUser', 'receiveToken', 'receiveLogin']),
    login(){
      const email = this.email;
      const password = this.password;
      this.loginUser({email, password});
    },
    googleLogin() {
      this.loginUser({social: "google"});
    },
    register() {
      const email = this.createEmail;
      const password = this.createPassword;

      this.registerUser({ creds: {email, password} });
      setTimeout(() => {
        this.loginTabs = 'tab-login';
      }, 1500)

    },
    validate(){
      if (this.$refs.log.validate()) {
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/user/profile');
      }
    },
  },
  computed: {
    ...mapState('auth', {
      isFetching: state => state.isFetching,
      errorMessage: state => state.errorMessage
    } ),
    ...mapState('register', {
      regIsFetching: state => state.isFetching,
      regErrorMessage: state => state.errorMessage
    } ),
  },

  watch: {
    errorMessage() {
      this.message = this.errorMessage;
      this.alert = true;

    },
    regErrorMessage() {
      this.message = this.regErrorMessage;
      this.alert = true;
    }
  },

  created() {
    console.log('Backend: ' + !!config.isBackend)
    let token = localStorage.getItem('token');
    if (token) {
      this.receiveToken(token);
    }
    else
    {
    if (this.isAuthenticated(localStorage.getItem('token'))) {
      this.receiveLogin();
    }
    }
  },
  mounted() {
    const creds = config.auth;
    this.email = creds.email;
    this.password = creds.password;
  }
}

</script>

<style src="./Login.scss" lang="scss"/>
