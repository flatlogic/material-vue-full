<template>
  <v-card>
    <v-breadcrumbs
      v-if="!homePage()"
      class="mt-10 px-5 py-3"
      :items="breadcrumbsGen">
      <template v-slot:divider >
        <v-icon size="22">mdi-chevron-right</v-icon>
      </template>
      <template
        v-slot:item="{ item }">
        <v-breadcrumbs-item class="text-capitalize">
          {{ item }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  computed: {
    breadcrumbsGen() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      pathArray.unshift('App');
      return pathArray;
    }
  },
  methods: {
    homePage() {
      return this.$route.path === "/" || this.$route.path === "/dashboard";
    },
  },
}
</script>

<style src="./Breadcrumbs.scss" lang="scss"></style>

