<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>vue material test model</p>
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
                          Forgot password?
                        </p>
                      </v-col>
                      <v-form ref="log" v-model="valid" lazy-validation>
                        <v-col>
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
                          <v-text-field
                            light
                            id="password"
                            ref="password"
                            v-model="confirmPassword"
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
                            :disabled="!password || !confirmPassword"
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
        password: '',
        confirmPassword: '',
        passRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'Min 6 characters',
        ],
      };
    },
    computed: {
      ...mapState('reset', ['isFetching']),
    },

    methods: {
      ...mapActions('reset', ['reset']),
      async submitHandler() {
        if (this.password === this.confirmPassword) {
          const token = this.$route.query.token;
          await this.reset({ password: this.password, token });
          this.password = '';
          this.confirmPassword = '';
        }
      },
    },
  };
</script>
