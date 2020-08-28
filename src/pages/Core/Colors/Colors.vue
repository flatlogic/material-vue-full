<template>
  <v-container fluid class="colors-page mt-3">
    <v-row>
      <v-col cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title>
            <p>States Colors</p>
          </v-card-title>
          <v-card-text>
            <p>There is a couple of brand colors that we're using.</p>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left pa-6">State</th>
                  <th class="text-left">Preview</th>
                  <th class="text-left">Usage Example</th>
                  <th class="text-left">Hex Value</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in statesColors" :key="item.name">
                  <td class="pa-6">{{ item.state }}</td>
                  <td>
                    <v-icon :color="item.state.toLocaleLowerCase()">mdi-circle</v-icon>
                  </td>
                  <td>
                    <code>{{ item.example }}</code>
                  </td>
                  <td>
                    <code>{{ item.hex }}</code>
                  </td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=6>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Typography Colors</p>
          </v-card-title>
          <v-card-text class="pa-5">
            <v-row no-gutters class="typography-widget pb-6">
              <v-col cols="12" class="card-dark-grey">
                <h1 class="primary--text">h1. Heading</h1>
                <h2 class="success--text">h2. Heading</h2>
                <h3 class="secondary--text">h3. Heading</h3>
                <h4 class="warning--text">h4. Heading</h4>
                <h5 class="primary--text">h5. Heading</h5>
                <h6 class="info--text">h6. Heading</h6>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=6>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title>
            <p>Example buttons</p>
          </v-card-title>
          <v-card-text>
            <v-btn color="default" class="button-shadow mr-4 mb-4">Default</v-btn>
            <template v-for="button in statesColors">
              <v-btn
                :key="button.state"
                :color="button.state.toLocaleLowerCase()"
                class="button-shadow mr-4 mb-4"
              >{{ button.state }}</v-btn>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Colors',
  data () {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ],
      statesColors: [
        {
          state: 'Primary',
          preview: '<v-button color="primary">',
          example: '<v-button color="primary">',
          hex: '#536DFE'
        },
        {
          state: 'Secondary',
          preview: '<Button color="secondary">',
          example: '<Button color="secondary">',
          hex: '#FF5C93'
        },
        {
          state: 'Warning',
          preview: '<Button color="warning">',
          example: '<Button color="warning">',
          hex: '#FFC260'
        },
        {
          state: 'Success',
          preview: '<Button color="success">',
          example: '<Button color="success">',
          hex: '#3CD4A0'
        },
        {
          state: 'Info',
          preview: '<Button color="info">',
          example: '<Button color="info">',
          hex: '#9013FE'
        },
      ],
    }
  }
}
</script>
