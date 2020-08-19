<template>
  <v-container fluid class="search-result-page">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Search Result</h1>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-inline-flex">
          <v-select
            style="width: 150px"
            :items="items"
            class="mr-3"
            value="Popular"
            solo
            label="Standard"
          ></v-select>
          <v-select
                  style="width: 150px"
                  solo
                  value="All Time"
                  :items="itemsSec"
                  label="Standard"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <p>About 94 700 000 (0.39 sec.) results</p>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card class="mb-5">
              <v-card-title>Title</v-card-title>
              <v-card-text>Text</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="mb-5">
              <v-card-title>Title</v-card-title>
              <v-card-text>Text</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="mb-5">
              <v-card-title>Title</v-card-title>
              <v-card-text>Text</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="mb-5">
              <v-card-title>Title</v-card-title>
              <v-card-text>Text</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SearchResult',
      data: () => ({
        items: ['All', 'Popular', 'Interesting', 'Latest'],
        itemsSec: ['All Time', 'Last 24 h', 'Last Month', 'Last Year', 'Latest']
    }),
  }
</script>
