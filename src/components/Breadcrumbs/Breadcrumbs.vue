<template>
  <v-card class="mx-1">
    <v-breadcrumbs
      v-if="!homePage()"
      class="mt-8 px-4 py-2"
      :items="breadcrumbsGen">
      <template v-slot:divider >
        <v-icon size="22">mdi-chevron-right</v-icon>
      </template>
      <template
        v-slot:item="{ item }">
        <v-breadcrumbs-item  :to="item.to" link class="text-capitalize">
          {{ item.text }}
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
      let breadcrumbs = pathArray.reduce((breadcrumbArray, patch) => {
        breadcrumbArray.push({
          text: patch,
          to: null
        })
        return breadcrumbArray;
      }, [])
      breadcrumbs.unshift({text: 'App', to: '/dashboard'});
      return breadcrumbs;
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

