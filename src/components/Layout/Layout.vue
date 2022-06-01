<template>
  <v-app>
    <Header />
    <Sidebar />
    <v-main class="content mx-0 mx-md-2">
      <div class="wrapper">
        <Breadcrumbs />
        <router-view />
        <Footer class="footer" />
        <Helper />
        <v-snackbar :value="snackbar" @input="changeSnackbar">
          {{ snackbarText }}

          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="hideSnackbar()">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '@/components/Header/Header';
  import Sidebar from '@/components/Sidebar/Sidebar';
  import Footer from '@/components/Footer/Footer';
  import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
  import Helper from '@/components/Helper/Helper';
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Layout',
    components: { Helper, Footer, Header, Sidebar, Breadcrumbs },
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
      background-color: var(--v-greyTint-base);
      border-radius: 36px;
      border: none;
    }
    .v-main__wrap {
      padding: 70px $content-padding $content-padding;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        padding: 70px $content-padding / 1.5 $content-padding / 1.5;
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
