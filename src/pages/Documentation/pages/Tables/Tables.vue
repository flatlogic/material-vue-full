<template>
  <v-container fluid class="docs mt-4">
    <v-row>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-text class="pa-5">
            <p class="text-h5">Simple Tables</p>
            <p class="mb-3">The v-simple-table component is a simple wrapper component around the table element.
            Inside the component you can use all the regular table elements such as thead, tbody, tr, etc.</p>
            <v-btn text to="/tables/basic" class="text-capitalize font-weight-regular">Example</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-text class="pa-5">
            <p class="text-h5">Data Tables</p>
            <p class="mb-3">The v-data-table component is used for displaying tabular data. Features include sorting,
              searching, pagination, inline-editing, and row selection.</p>
            <v-btn text to="/tables/dynamic" class="text-capitalize font-weight-regular">Example</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
