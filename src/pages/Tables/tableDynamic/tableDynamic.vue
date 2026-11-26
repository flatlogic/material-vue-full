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
              <p class="fs-normal text-greyBold mb-5 pl-1">This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar.</p>
              <v-data-table
                v-model="mock.first.selected"
                :headers="mock.first.headers"
                :items="mock.first.desserts"
                item-value="name"
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
              <p class="fs-normal text-greyBold mb-5 pl-1">The
                Action property of the TablePagination component allows the implementation of custom actions.</p>
              <v-data-table
                :headers="second.headers"
                :items="second.desserts">
                <template v-for="field in ['name', 'iron']" :key="field" #[`item.${field}`]="{ item }">
                  <v-btn variant="text" @click="beginEdit(item, field)">{{ item[field] }}</v-btn>
                </template>
              </v-data-table>
              <v-dialog v-model="editing" max-width="400">
                <v-card title="Edit value">
                  <v-card-text>
                    <v-text-field v-model="editValue" :label="editField" :rules="[second.max25chars]" counter="25" autofocus @keyup.enter="save" />
                  </v-card-text>
                  <v-card-actions>
                    <v-btn @click="editing = false">Cancel</v-btn>
                    <v-btn color="primary" :disabled="second.max25chars(editValue) !== true" @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-snackbar v-model="second.snack" :timeout="3000" :color="second.snackColor">
                {{ second.snackText }}

                <template #actions>
                  <v-btn variant="text" @click="second.snack = false">Close</v-btn>
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
  name: 'TablesDynamic',
  data() {
    return {
      mock,
      first: mock.first,
      second: mock.second,
      editing: false,
      editItem: null,
      editField: '',
      editValue: ''
    }
  },
  methods: {
    beginEdit(item, field) {
      this.editItem = item;
      this.editField = field;
      this.editValue = item[field];
      this.editing = true;
    },
    save() {
      if (this.second.max25chars(this.editValue) !== true) return;
      this.editItem[this.editField] = this.editValue;
      this.editing = false;
      this.second.snackColor = 'success';
      this.second.snackText = 'Data saved';
      this.second.snack = true;
    },
  },
}
</script>

<style src="./tableDynamic.scss" lang="scss"></style>
