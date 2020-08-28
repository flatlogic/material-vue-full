<template>
  <v-container fluid class="user-add-page mt-3">
    <v-row>
      <v-col cols="12">
        <v-stepper v-model="e1">
          <v-stepper-header >
            <v-stepper-step :complete="e1 > 1" step="1">Create Account</v-stepper-step>

            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">User Details</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="3">Business Details</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="4">Social</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items >
            <v-stepper-content step="1">
              <v-card>
                <v-row justify="center">
                    <v-col cols="12" md="6">
                      <v-form>
                        <p class="text-h5">Create New Account</p>
                        <v-text-field
                            class="mb-4"
                            outlined
                            dense
                            placeholder="User Name"
                            persistent-hint
                            single-line hint="Please enter your user name">
                        </v-text-field>
                        <v-text-field
                            class="mb-4"
                            outlined
                            dense
                            placeholder="Email Address"
                            persistent-hint
                            single-line hint="We’ll never share your email with anyone else">
                        </v-text-field>
                        <v-text-field
                            class="mb-4"
                            outlined
                            dense
                            placeholder="Password"
                            persistent-hint
                            single-line hint="Enter your password. Min 6 characters long">
                        </v-text-field>
                        <v-select
                            class="mb-4"
                            :items=items
                            outlined
                            dense
                            placeholder="Role"
                            persistent-hint
                            single-line hint="Please choose the role">
                        </v-select>
                        <v-btn
                            color="primary"
                            @click="e1 = 2"
                        >
                          Next
                        </v-btn>
                      </v-form>
                    </v-col>


                  </v-row>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Create User Details</p>
                      <p>Photo:</p>
                      <v-file-input multiple label="File input" class="mb-4"></v-file-input>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="First Name"
                          persistent-hint
                          single-line hint="Please enter your user first name">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Last Name"
                          persistent-hint
                          single-line hint="Please enter your user last name">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Contact Number"
                          persistent-hint
                          single-line hint="Enter your contact number">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Adress"
                          persistent-hint
                          single-line hint="Enter your address">
                      </v-text-field>
                      <v-select
                          class="mb-4"
                          :items=items
                          outlined
                          dense
                          placeholder="Role"
                          persistent-hint
                          single-line hint="Please choose the role">
                      </v-select>
                      <div class="d-flex justify-center">
                        <v-btn
                            outlined
                            color="primary"
                            @click="e1 = 1"
                        >
                          Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
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
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Business Details</p>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Company Name"
                          persistent-hint
                          single-line hint="Please enter your company name">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Company Registered ID"
                          persistent-hint
                          single-line hint="Please enter your company registered ID">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Company Email"
                          persistent-hint
                          single-line hint="Enter your company email">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Company Contact"
                          persistent-hint
                          single-line hint="Enter your company contact">
                      </v-text-field>
                      <div class="d-flex justify-center">
                        <v-btn
                            outlined
                            color="primary"
                            @click="e1 = 2"
                        >
                          Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
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
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Social</p>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Facebook"
                          persistent-hint
                          single-line hint="Please enter your Facebook link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Twitter"
                          persistent-hint
                          single-line hint="Please enter your Twitter link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Instagram"
                          persistent-hint
                          single-line hint="Please enter your Instagram link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="GitHub"
                          persistent-hint
                          single-line hint="Please enter your GitHub link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="CodePen"
                          persistent-hint
                          single-line hint="Please enter your CodePen link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          placeholder="Slack"
                          persistent-hint
                          single-line hint="Please enter your Slack link">
                      </v-text-field>
                      <div class="d-flex justify-center">
                        <v-btn
                            outlined
                            color="primary"
                            @click="e1 = 3"
                        >
                          Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            to="/user/list"
                        >
                          Finish
                        </v-btn>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data () {
    return {
      e1: 1,
      items: ['Admin', 'User'],
    }
  },
}
</script>
<style>
.v-input .v-label {
  height: 23px;
}
</style>
