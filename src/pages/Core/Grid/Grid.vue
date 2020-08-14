<template>
  <v-container fluid class="grid-page">
    <h1 class="page-title mt-10 mb-6">Grid</h1>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>How it works</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-10">Material UI’s grid system uses a series of containers, rows, and
              columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example
              and an in-depth look at how the grid comes together.</p>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Equal width</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-10">For example, here are two grid layouts that apply to every device
              and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every
              column will be the same width.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Grid options</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-10">While Material UI grid uses ems or rems for defining most sizes, pxs are used for grid breakpoints and
              container widths. This is because the viewport width is in pixels and does not change with the font size.
              See how aspects of the Material UI grid system work across multiple devices with a handy table.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Vertical Alignment</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-10">Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Vertical Alignment</p>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-10">Use flexbox alignment utilities to vertically and horizontally align columns.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Grid',
};
</script>
