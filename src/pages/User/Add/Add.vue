<template>
  <v-container fluid class="user-add-page mt-3 mx-1">
    <v-row>
      <v-col cols="12">
        <v-stepper v-model="e1" class="bg-transparent elevation-0">
          <v-card class="mb-5">
            <v-stepper-header >
              <v-stepper-item :complete="e1 > 1" :value="1" title="Create Account"></v-stepper-item>

              <v-divider></v-divider>
              <v-stepper-item :complete="e1 > 2" :value="2" title="User Details"></v-stepper-item>
              <v-divider></v-divider>

              <v-stepper-item :complete="e1 > 3" :value="3" title="Business Details"></v-stepper-item>
              <v-divider></v-divider>

              <v-stepper-item :value="4" title="Social"></v-stepper-item>
            </v-stepper-header>
          </v-card>

          <v-card>
            <v-stepper-window v-model="e1">
              <v-stepper-window-item :value="1">
                <v-card>
                  <v-row justify="center">
                    <v-col cols="12" md="6">
                      <v-form>
                        <p class="text-h5">Create New Account</p>
                        <v-text-field
                          class="mb-4"
                          v-model="user.firstName"
                          variant="outlined"
                          density="compact"
                          placeholder="User First Name"
                          persistent-hint
                          single-line hint="Please enter your user first name">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          v-model="user.lastName"
                          variant="outlined"
                          density="compact"
                          placeholder="User Last Name"
                          persistent-hint
                          single-line hint="Please enter your user last name">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          v-model="user.email"
                          variant="outlined"
                          density="compact"
                          placeholder="Email Address"
                          persistent-hint
                          single-line hint="We’ll never share your email with anyone else">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          v-model="user.password"
                          type="password"
                          variant="outlined"
                          density="compact"
                          placeholder="Password"
                          persistent-hint
                          single-line hint="Enter your password. Min 6 characters long">
                        </v-text-field>
                        <v-select
                          class="mb-4"
                          :items="items"
                          v-model="user.role"
                          variant="outlined"
                          density="compact"
                          placeholder="Role"
                          persistent-hint
                          single-line hint="Please choose the role">
                        </v-select>
                        <div class="d-flex justify-end">
                          <v-btn
                            class="button-shadow"
                            color="primary"
                            @click="e1 = 2">
                            Next
                          </v-btn>
                        </div>

                      </v-form>
                    </v-col>
                  </v-row>
                </v-card>
              </v-stepper-window-item>

              <v-stepper-window-item :value="2">
                <v-card>
                  <v-row justify="center">
                    <v-col cols="12" md="6">
                      <v-form>
                        <p class="text-h5">Create User Details</p>
                        <p>Photo:</p>
                        <v-file-input multiple label="File input" class="mb-4"></v-file-input>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          v-model="user.firstName"
                          placeholder="First Name"
                          persistent-hint
                          single-line hint="Please enter your user first name">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          v-model="user.lastName"
                          placeholder="Last Name"
                          persistent-hint
                          single-line hint="Please enter your user last name">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          v-model="user.phoneNumber"
                          placeholder="Contact Number"
                          persistent-hint
                          single-line hint="Enter your contact number">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Address"
                          persistent-hint
                          single-line hint="Enter your address">
                        </v-text-field>
                        <v-select
                          class="mb-4"
                          :items=items
                          variant="outlined"
                          density="compact"
                          placeholder="Role"
                          persistent-hint
                          single-line hint="Please choose the role">
                        </v-select>
                        <div class="d-flex justify-center">
                          <v-btn
                            variant="outlined"
                            color="primary"
                            @click="e1 = 1"
                          >
                            Back
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            class="button-shadow"
                            color="primary"
                            @click="e1 = 3"
                          >
                            Next
                          </v-btn>
                        </div>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card>
              </v-stepper-window-item>

              <v-stepper-window-item :value="3">
                <v-card>
                  <v-row justify="center">
                    <v-col cols="12" md="6">
                      <v-form>
                        <p class="text-h5">Business Details</p>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          v-model="user.company"
                          placeholder="Company Name"
                          persistent-hint
                          single-line hint="Please enter your company name">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Company Registered ID"
                          persistent-hint
                          single-line hint="Please enter your company registered ID">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Company Email"
                          persistent-hint
                          single-line hint="Enter your company email">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Company Contact"
                          persistent-hint
                          single-line hint="Enter your company contact">
                        </v-text-field>
                        <div class="d-flex justify-center">
                          <v-btn
                            variant="outlined"
                            color="primary"
                            @click="e1 = 2"
                          >
                            Back
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            class="button-shadow"
                            color="primary"
                            @click="e1 = 4"
                          >
                            Next
                          </v-btn>
                        </div>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card>
              </v-stepper-window-item>

              <v-stepper-window-item :value="4">
                <v-card>
                  <v-row justify="center">
                    <v-col cols="12" md="6">
                      <v-form>
                        <p class="text-h5">Social</p>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Facebook"
                          persistent-hint
                          single-line hint="Please enter your Facebook link">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Twitter"
                          persistent-hint
                          single-line hint="Please enter your Twitter link">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Instagram"
                          persistent-hint
                          single-line hint="Please enter your Instagram link">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="GitHub"
                          persistent-hint
                          single-line hint="Please enter your GitHub link">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="CodePen"
                          persistent-hint
                          single-line hint="Please enter your CodePen link">
                        </v-text-field>
                        <v-text-field
                          class="mb-4"
                          variant="outlined"
                          density="compact"
                          placeholder="Slack"
                          persistent-hint
                          single-line hint="Please enter your Slack link">
                        </v-text-field>
                        <div class="d-flex justify-center">
                          <v-btn
                            variant="outlined"
                            color="primary"
                            @click="e1 = 3"
                          >
                            Back
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            :loading="isReceiving"
                            class="button-shadow"
                            color="primary"
                            @click="createUser()">
                            Finish
                          </v-btn>
                        </div>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card>
              </v-stepper-window-item>
            </v-stepper-window>
          </v-card>

        </v-stepper>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import {mapActions, mapState} from "vuex";
import router from '@/Routes';

export default {
  data () {
    return {
      e1: 1,
      items: [{ title: 'Admin', value: 'admin' }, { title: 'User', value: 'user' }],
      user: {
        firstName: '',
        lastName: '',
        password: '',
        createdAt: new Date(),
        image: '',
        role: '',
        company: 'Flatlogic',
        email: '',
        disabled: '',
        create: '',
      },
    }
  },

  methods: {
    ...mapActions('usersList', [
      'createUserRequest'
    ]),
    async createUser() {
      await this.createUserRequest(this.user)
      router.push('/user/list')
    }
  },
  computed: {
    ...mapState('usersList', ['isReceiving'])
  }
}
</script>

<style src="./Add.scss" lang="scss"></style>
