<template>
  <form :filters="filters" :entity="entity">
    <div class="px-8">
      <v-row>
        <v-col cols="3">
          <v-autocomplete
            @change="apply"
            v-model="selectedFilters"
            :items="filters.map((item) => item.label)"
            label="Filter"
          ></v-autocomplete>
        </v-col>

        <v-col cols="3" v-if="filterType !== 'number'">
          <v-text-field
            @input="apply"
            label="Contains"
            v-model="filterValue"
          ></v-text-field>
        </v-col>
        <v-col cols="3" v-else class="d-flex">
          <v-text-field
            @input="apply"
            class="mx-3"
            label="From"
            v-model="filterValueFrom"
          />

          <v-text-field @input="apply" label="To" v-model="filterValueTo" />
        </v-col>

        <v-col cols="3" class="align-self-center">
          <v-btn class="primary mb-3" @click="delFilter"> Delete </v-btn>
        </v-col>
      </v-row>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Filter',
    props: {
      id: Number,
      filters: Array,
      entity: String,
    },
    data() {
      return {
        showFilters: false,
        selectedFilters: '',
        filterValue: null,
        filterValueFrom: null,
        filterValueTo: null,
        filterType: 'string',
      };
    },

    methods: {
      apply() {
        let index = this.filters
          .map((item) => item.label)
          .indexOf(this.selectedFilters);
        this.$emit('apply', {
          id: this.id,
          number: !!this.filters[index].number,
          filter: this.filters[index].title,
          value: this.filterValue,
          valueFrom: this.filterValueFrom,
          valueTo: this.filterValueTo,
        });
      },
      delFilter() {
        this.$emit('delFilter');
      },
    },
    watch: {
      selectedFilters() {
        let numbers = this.filters.map((item) => item.number);
        let labels = this.filters.map((item) => item.label);
        let index = labels.indexOf(this.selectedFilters);
        index >= 0 && numbers[index]
          ? (this.filterType = 'number')
          : (this.filterType = 'string');
      },
    },
  };
</script>
