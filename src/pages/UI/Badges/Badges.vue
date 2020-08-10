<template>
  <v-container fluid class="icons-page">
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Icons</h1>
      <v-menu
          offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
              color="error"
              class="text-capitalize button-shadow"
          >Actions</v-btn>
        </template>
        <v-list>
          <v-list-item
              link
              v-for="(item, index) in lastReports"
              :key="index"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-row>
      <v-col cols="12">
        Badges Page
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Badges',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style src="Badges.scss" lang="scss"/>
