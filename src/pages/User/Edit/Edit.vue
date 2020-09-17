<template>
  <v-container fluid class="user-edit mt-3 mx-1">
    <v-row>
      <v-col cols="12">
        <v-tabs
          color="primary"
          centered
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            :href="`#tab-account`"
            class="mr-5"
          >
            <v-icon class="mr-3">mdi-shield-account-variant-outline</v-icon>
            Account
          </v-tab>
          <v-tab
            class="mr-5"
            :href="`#tab-profile`"
          >
            <v-icon class="mr-3">mdi-account-outline</v-icon>
            Profile
          </v-tab>
          <v-tab
            class="mr-5"
            :href="`#tab-password`"
          >
            <v-icon class="mr-3">mdi-lock</v-icon>
            Change Password
          </v-tab>
          <v-tab
            :href="`#tab-settings`"
          >
            <v-icon class="mr-3">mdi-cog</v-icon>
            Settings
          </v-tab>

          <v-tab-item
            :value="'tab-account'"
          >
            <v-card
              elevation="0"
              flat
              tile
            >
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Account</p>
                      <v-text-field
                        class="mb-4"
                        outlined
                        dense
                        value="User"
                        placeholder="User Name"
                        persistent-hint
                        single-line hint="Please enter your user name">
                      </v-text-field>
                      <v-text-field
                        class="mb-4"
                        outlined
                        dense
                        value="user@mail.com"
                        placeholder="User Email"
                        persistent-hint
                        single-line hint="Please enter your email">
                      </v-text-field>
                      <v-select
                        class="mb-4"
                        :items=items
                        :value="items[1]"
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
                        >
                          Reset
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                          class="button-shadow"
                          color="primary"
                        >
                          Save
                        </v-btn>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
              :value="'tab-profile'"
          >
            <v-card
                flat
                tile
            >
              <v-card-text>

                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Profile</p>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="Jane"
                          placeholder="User Name"
                          persistent-hint
                          single-line hint="Please enter your first name">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="Jonson"
                          placeholder="User Last Name"
                          persistent-hint
                          single-line hint="Please enter your last name">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="1-555-666-7070"
                          placeholder="User Number"
                          persistent-hint
                          single-line hint="Please enter your phone number">
                      </v-text-field>
                      <v-select
                          class="mb-4"
                          :items=items
                          :value="items[1]"
                          outlined
                          dense
                          placeholder="Role"
                          persistent-hint
                          single-line hint="Please choose the role">
                      </v-select>
                      <p class="text-h5">Company Information</p>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="Company"
                          placeholder="Company Name"
                          persistent-hint
                          single-line hint="Please enter your company name">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="AD123456789"
                          placeholder="Company ID"
                          persistent-hint
                          single-line hint="Please enter company ID">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="1-555-666-7070"
                          placeholder="Company Number"
                          persistent-hint
                          single-line hint="Please enter your company number">
                      </v-text-field>
                      <p class="text-h5">Social</p>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="https://www.facebook.com/janejonson"
                          placeholder="Facebook Link"
                          persistent-hint
                          single-line hint="Please enter your Facebook link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="https://www.twitter.com/janejonson"
                          placeholder="Twitter Link"
                          persistent-hint
                          single-line hint="Please enter your Twitter link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="https://www.instagram.com/janejonson"
                          placeholder="Instagram Link"
                          persistent-hint
                          single-line hint="Please enter your Instagram link">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value="https://www.github.com/janejonson"
                          placeholder="GitHub Link"
                          persistent-hint
                          single-line hint="Please enter your GitHub link">
                      </v-text-field>
                      <div class="d-flex justify-center">
                        <v-btn
                            outlined
                            color="primary"
                        >
                          Reset
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                        >
                          Save
                        </v-btn>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>

              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
              :value="'tab-password'"
          >
            <v-card
                flat
                tile
            >
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Password</p>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value=""
                          placeholder="Current Password"
                          persistent-hint
                          single-line hint="Please enter your password">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value=""
                          placeholder="New Password"
                          persistent-hint
                          single-line hint="Please enter your new password">
                      </v-text-field>
                      <v-text-field
                          class="mb-4"
                          outlined
                          dense
                          value=""
                          placeholder="Verify Password"
                          persistent-hint
                          single-line hint="Please enter your new password">
                      </v-text-field>
                      <div class="d-flex justify-center">
                        <v-btn
                            outlined
                            color="primary"
                        >
                          Reset
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                        >
                          Save Password
                        </v-btn>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
              :value="'tab-settings'"
          >
            <v-card
                flat
                tile
            >
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="6">
                    <v-form>
                      <p class="text-h5">Settings</p>
                      <v-select
                          class="mb-4"
                          :items=lang
                          :value="items[0]"
                          outlined
                          dense
                          placeholder="Language"
                          persistent-hint
                          single-line hint="Please choose your language">
                      </v-select>
                      <p class="body-1">Communication:</p>

                        <v-col class="d-flex flex-wrap">
                          <v-checkbox
                            class="mr-3"
                            color="secondary"
                            v-model="checkbox.email"
                            label="Email"></v-checkbox>
                          <v-checkbox
                            class="mr-3"
                            color="secondary"
                            v-model="checkbox.messages"
                            label="Messages"></v-checkbox>
                          <v-checkbox
                            color="secondary"
                            v-model="checkbox.phone"
                            label="Phone"></v-checkbox>
                        </v-col>
                      <p class="body-1">Email notification</p>
                      <v-switch v-model="switch1"></v-switch>
                      <p class="body-1">Send copy to personal email</p>
                      <v-switch v-model="switch2"></v-switch>
                      <div class="d-flex justify-center">
                        <v-btn
                          outlined
                          color="primary"
                        >
                          Reset
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                        >
                          Save
                        </v-btn>
                      </div>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
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
      lang: ['English', 'Russian', 'Latin'],
      checkbox: {
        email: true,
        messages: true,
        phone: true,
      },
      switch1: false,
      switch2: false,
    }
  },
}
</script>

<style src="./Edit.scss" lang="scss"></style>
