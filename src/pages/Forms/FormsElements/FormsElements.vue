<template>
  <v-container fluid class="elements-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Forms Elements</h1>
    </v-row>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Inputs</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-form
                ref="form"
            >
              <v-row>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Normal field</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    label="Name"
                ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Label hint</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    hint="Some important helper text"
                    persistent-hint
                    label="Input with  hint"
                ></v-text-field>
                </v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Disable input</p>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    disabled
                    label="Disable"
                ></v-text-field></v-col>
                <v-col cols="5" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Simple select</p>
                </v-col>
                <v-col cols="7"><v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                ></v-select></v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Horizontal form</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-row>
                <v-col cols="6" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Normal field</p>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>
                </v-col>
                <v-col cols="6" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Email input</p>
                </v-col>
                <v-col cols="6"><v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field></v-col>
                <v-col cols="6" class="d-flex align-center">
                  <p class="fs-normal card-dark-grey mb-0">Simple select</p>
                </v-col>
                <v-col cols="6"><v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                ></v-select></v-col>
              </v-row>
              <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
              ></v-checkbox>
              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
              >
                Validate
              </v-btn>
              <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
              >
                Reset Form
              </v-btn>
              <v-btn
                  color="warning"
                  @click="resetValidation"
              >
                Reset Validation
              </v-btn>

            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Control sizing</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">

          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Selects</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">

          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Input variants</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">

          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Textareas</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon color="textColor">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, i) in menu"
                    :key="i"
                    @click="() => {}"
                >
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FormsElements',
  data: () => ({
    menu: [
      'Edit',
      'Copy',
      'Delete',
      'Print'
    ],
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
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}

</script>
