<template>
  <v-container fluid class="elements-page mt-4">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1">
          <v-card-title class="pa-5 pb-3">
            <p>Simple Validation</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on">
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}">
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-form
              ref="form"
              v-model="firstForm.valid"
              lazy-validation>
              <v-row>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Normal field</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    v-model="firstForm.name"
                    :counter="10"
                    :rules="firstForm.nameRules"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Email input</p>
                </v-col>
                <v-col cols="7"><v-text-field
                  v-model="firstForm.email"
                  :rules="firstForm.emailRules"
                  label="E-mail"
                  required
                ></v-text-field></v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal greyBold--text mb-0">Simple select</p>
                </v-col>
                <v-col cols="7"><v-select
                  v-model="firstForm.select"
                  :items="firstForm.items"
                  :rules="[v => !!v || 'Item is required']"
                  label="Item"
                  required
                ></v-select></v-col>
              </v-row>
              <v-checkbox
                v-model="firstForm.checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="I agree"
                required
              ></v-checkbox>
              <v-row justify="end">
                <v-btn
                  color="primary"
                  outlined
                  class="button-shadow mr-4"
                  @click="reset">
                  Reset Form
                </v-btn>
                <v-btn
                  :disabled="!firstForm.valid"
                  color="primary"
                  class="button-shadow mr-4"
                  @click="validate">
                  Validate
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1">
          <v-card-title class="pa-5 pb-3">
            <p>Custom Validation</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on">
                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in menu"
                  :key="i"
                  @click="() => {}">
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-form
              ref="formS"
              v-model="secondForm.form"
              class="pt-6">
              <v-text-field
                v-model="secondForm.password"
                :rules="[secondForm.rules.password, secondForm.rules.length(8)]"
                color=""
                counter="8"
                label="Password"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="secondForm.phone"
                color=""
                label="Phone number"
              ></v-text-field>
              <v-text-field
                v-model="secondForm.email"
                :rules="[secondForm.rules.email]"
                color=""
                label="Email address"
                type="email"
              ></v-text-field>
              <v-textarea
                v-model="secondForm.bio"
                auto-grow
                color=""
                label="Bio"
                rows="1"
              ></v-textarea>
              <v-checkbox
                v-model="secondForm.agreement"
                :rules="[secondForm.rules.required]"
                color="primary">
                <template v-slot:label>
                  <span>I agree to the&nbsp;<a href="#" @click.stop.prevent="secondForm.dialog = true">Terms of Service</a>
                  &nbsp; and &nbsp;
                  <a href="#" @click.stop.prevent="secondForm.dialog = true">Privacy Policy</a>*
                  </span>
                </template>
              </v-checkbox>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions class="pt-5 pb-0">
              <v-spacer></v-spacer>
              <v-btn
                class="button-shadow mr-4"
                outlined
                color="primary"
                @click="$refs.formS.reset()"
              >
                Clear
              </v-btn>
              <v-btn
                :disabled="!secondForm.form"
                :loading="secondForm.isLoading"
                class="button-shadow white--text"
                color="primary"
                depressed
              >Submit</v-btn>
            </v-card-actions>
            <v-dialog
              v-model="secondForm.dialog"
              absolute
              max-width="400"
              persistent
            >
              <v-card>
                <v-card-title class="headline grey lighten-3">Legal</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn
                    text
                    @click="secondForm.agreement = false, secondForm.dialog = false"
                  >
                    No
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="white--text"
                    color="info"
                    @click="secondForm.agreement = true, secondForm.dialog = false"
                  >
                    Yes
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FormsValidation',
    data: () => ({
      menu: [
          'Edit',
          'Copy',
          'Delete',
          'Print'
        ],
      firstForm: {
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,
      },
      secondForm: {
        agreement: false,
        bio: 'Pop culture buff. Travel nerd. Tv trailblazer. Music expert. Beer maven. Writer.',
        dialog: false,
        email: undefined,
        form: false,
        isLoading: false,
        password: undefined,
        phone: undefined,
        rules: {
          email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
          length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
          password: v => !!(v || '').match(/(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/) ||
              'Password must contain an upper case letter, a numeric character, and a special character',
          required: v => !!v || 'This field is required',
        },
      }
    }),
    methods: {
      validate() {
        this.$refs.form.validate()
      },
      reset() {
        this.$refs.form.reset()
      },
    },
  }
</script>
