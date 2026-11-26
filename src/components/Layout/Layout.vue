<template>
  <v-app>
    <AppHeader />
    <Sidebar />
    <v-main class="content mx-0 mx-md-2">
      <div class="wrapper">
        <Breadcrumbs />
        <router-view />
        <AppFooter class="footer" />
        <Helper />
        <v-snackbar :model-value="snackbar" @update:model-value="changeSnackbar">
          {{ snackbarText }}

          <template #actions>
            <v-btn variant="text" color="white" @click="hideSnackbar()">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/Header/Header';
  import Sidebar from '@/components/Sidebar/Sidebar';
  import AppFooter from '@/components/Footer/Footer';
  import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
  import Helper from '@/components/Helper/Helper';
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Layout',
    components: { Helper, AppFooter, AppHeader, Sidebar, Breadcrumbs },
    computed: {
      ...mapState({
        snackbar: (state) => state.snackbar.show,
        snackbarText: (state) => state.snackbar.text,
      }),
    },
    methods: {
      ...mapMutations({
        hideSnackbar: 'snackbar/hideSnackbar',
      }),
      changeSnackbar(val) {
        if (!val) this.hideSnackbar();
      },
    },
  };
</script>

<style lang="scss">
  @import '../../styles/_variables.scss';

  body {
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(var(--v-theme-greyTint));
      border-radius: 36px;
      border: none;
    }
    .content > .wrapper {
      padding: 0 $content-padding $content-padding;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        padding: 0 calc($content-padding / 1.5) calc($content-padding / 1.5);
      }
    }
  }
</style>

<style lang="scss" scoped>
  .footer {
    align-items: flex-end;
  }

  .wrapper {
    flex-direction: column;
    display: flex;
    min-height: 100%;
  }
</style>
