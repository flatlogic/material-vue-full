<template>
  <v-card class="my-5">
    <v-breadcrumbs
      v-if="!homePage()"
      class="my-1 px-4 py-2"
      :items="breadcrumbsGen"
    >
      <template v-slot:divider>
        <v-icon size="22">mdi-chevron-right</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item @click="goTo(item.to)" link class="text-capitalize">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-card>
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    computed: {
      breadcrumbsGen() {
        let pathArray = this.$route.path.split('/');
        pathArray.shift();
        let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
          breadcrumbArray.push({
            path: path,
            to:
              breadcrumbArray[idx - 1] &&
              breadcrumbArray[idx - 1].path === 'admin'
                ? '/' + breadcrumbArray[idx - 1].path + '/' + path
                : '/' + path,
            text: path,
          });
          return breadcrumbArray;
        }, []);
        return breadcrumbs;
      },
    },
    methods: {
      homePage() {
        return this.$route.path === '/' || this.$route.path === '/dashboard';
      },
      goTo(to) {
        this.$router.currentRoute.path !== to ? this.$router.push(to) : null;
      },
    },
  };
</script>

<style lang="scss" scoped>
  ::v-deep.v-breadcrumbs {
    li:last-child div {
      color: var(--v-primary-base);
    }
    .v-breadcrumbs__item {
      font-size: 1.125rem;
      color: var(--v-greyMedium-base);
      cursor: pointer;
    }

    &.theme--dark {
      li:last-child div {
        color: var(--v-primary-base);
      }
      .v-breadcrumbs__item {
        color: white;
      }
    }
  }
</style>
