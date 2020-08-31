<template>
  <v-container fluid class="docs mt-4">
    <v-row>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-text class="pa-5">
            <p class="text-h5">Form Usage</p>
            <p class="mb-3">The internal <code>v-form</code> component makes it easy to add validation to form inputs.
              All input components have a <code>rules</code> prop which takes an array of functions. These functions allow you
              to specify conditions in which the field is valid or invalid. Whenever the value of an input is changed,
              each function in the array will receive the new value. If a function returns false or a string, validation
              has failed.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-text class="pa-5">
            <p class="text-h5">Validation with submit & clear</p>
            <p class="mb-3">The <code>v-form</code> component has <b>three</b> functions that can be accessed by setting a ref on the
              component. A ref allows us to access internal methods on a component, for example, <code>v-form ref="form"</code>.
                <b>this.$refs.form.validate()</b> will validate all inputs and return if they are all valid or not.
                <b>this.$refs.form.reset()</b> will clear all inputs and reset their validation errors.
                <b>this.$refs.form.resetValidation()</b> will only reset input validation and not alter their state.</p>
            <v-btn text href="https://vuetifyjs.com/en/components/forms/" class="text-capitalize font-weight-regular">More info</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

