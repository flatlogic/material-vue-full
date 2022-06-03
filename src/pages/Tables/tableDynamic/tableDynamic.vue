<template>
  <v-container fluid class="px-0 px-md-1">
    <div class="tables-dynamic mt-3">
      <v-row>
        <v-col cols="12">
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Sorting & Selecting</p>
            </v-card-title>
            <v-card-text>
              <p class="fs-normal greyBold--text mb-5 pl-1">This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar.</p>
              <v-data-table
                v-model="mock.first.selected"
                :headers="mock.first.headers"
                :items="mock.first.desserts"
                item-key="name"
                show-select>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Custom Table Action</p>
            </v-card-title>
            <v-card-text>
              <p class="fs-normal greyBold--text mb-5 pl-1">The
                Action property of the TablePagination component allows the implementation of custom actions.</p>
              <v-data-table
                :headers="second.headers"
                :items="second.desserts">
                <template v-slot:item.name="props">
                  <v-edit-dialog
                      :return-value.sync="props.item.name"
                      @save="save"
                      @cancel="cancel"
                      @open="open"
                      @close="close"
                  > {{ props.item.name }}
                    <template v-slot:input>
                      <v-text-field
                          v-model="props.item.name"
                          :rules="[second.max25chars]"
                          label="Edit"
                          single-line
                          counter
                      ></v-text-field>
                    </template>
                  </v-edit-dialog>
                </template>
                <template v-slot:item.iron="props">
                  <v-edit-dialog
                      :return-value.sync="props.item.iron"
                      large
                      persistent
                      @save="save"
                      @cancel="cancel"
                      @open="open"
                      @close="close"
                  >
                    <div>{{ props.item.iron }}</div>
                    <template v-slot:input>
                      <div class="mt-4 title">Update Iron</div>
                    </template>
                    <template v-slot:input>
                      <v-text-field
                          v-model="props.item.iron"
                          :rules="[second.max25chars]"
                          label="Edit"
                          single-line
                          counter
                          autofocus
                      ></v-text-field>
                    </template>
                  </v-edit-dialog>
                </template>
              </v-data-table>
              <v-snackbar v-model="second.snack" :timeout="3000" :color="second.snackColor">
                {{ second.snackText }}

                <template v-slot:action="{ attrs }">
                  <v-btn v-bind="attrs" text @click="snack = false">Close</v-btn>
                </template>
              </v-snackbar>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from './mock'

export default {
  name: 'tablesBasic',
  data() {
    return {
      mock,
      first: mock.first,
      second: mock.second
    }
  },
  methods: {
    save () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = 'Dialog opened'
    },
    close () {
      console.log('Dialog closed')
    },
  },
}
</script>

<style src="./tableDynamic.scss" lang="scss"></style>
