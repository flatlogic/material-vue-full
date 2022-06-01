<template>
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE"
    :mini-variant="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.breakpoint.lgAndUp"
    :temporary="$vuetify.breakpoint.mdAndDown"
    :mini-variant-width="sidebarMinWidth"
    :class="{ 'drawer-mini': !DRAWER_STATE }"
  >
    <v-list>
      <v-list-item link color="primary" :to="'/app/dashboard'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24" color="mdi-home">mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Dashboard </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link color="primary" :to="'/admin/users'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-animation</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Users </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link color="primary" :to="'/app/profile'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Profile </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link color="primary" :to="'/app/password'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-lock</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Change password </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <a
        :href="externalLink"
        target="_blank"
        class="v-list-item v-list-item--link theme--light"
      >
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-file</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> API docs </v-list-item-title>
        </v-list-item-content>
      </a>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Sidebar',
    props: {
      source: String,
    },
    data() {
      return {
        sidebarWidth: 240,
        sidebarMinWidth: 96,
      };
    },
    computed: {
      ...mapState('layout', {
        drawer: (state) => state.drawer,
      }),
      DRAWER_STATE: {
        get() {
          return this.drawer;
        },
        set(newValue) {
          if (newValue === this.drawer) return;
          this.TOGGLE_DRAWER();
        },
      },
      externalLink: () => {
        return process.env.NODE_ENV === 'production'
          ? window.location.origin + '/api-docs'
          : 'http://localhost:8080/api-docs';
      },
    },
    methods: {
      ...mapActions('layout', ['TOGGLE_DRAWER']),
    },
  };
</script>

<style lang="scss">
  @import 'src/styles/variables';

  .v-navigation-drawer {
    top: 64px !important;
    height: calc(100vh - 64px) !important;

    .v-list-group .v-list-group__header .v-list-item__icon {
      &.v-list-group__header__prepend-icon {
        margin-right: 24px !important;
      }
      &.v-list-group__header__append-icon {
        min-width: 25px;
      }
    }

    .v-navigation-drawer__content {
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
    }

    .v-list-item {
      min-height: 38px;
      .v-list-item__action {
        margin: 9px 0;
      }
      .v-list-item__content {
        padding: 9px 0;
        .v-badge {
          position: absolute;
          right: 140px;
          top: 14px;
        }
      }
    }
    .v-list-group {
      .v-list-item__icon.v-list-group__header__prepend-icon {
        margin: 11px 0;
      }
    }

    .v-list-item .v-list-item__title {
      font-size: 0.875rem;
      color: var(--v-greyMedium-base) !important;
    }
    .v-list-item--active {
      .v-list-item__content {
        .v-list-item__title {
          color: var(--v-greyBold-base) !important;
        }
      }
      .v-list-item__action {
        i {
          color: var(--v-primary-base) !important;
        }
      }
    }
    .v-list-group--active .v-list-item--active i {
      color: var(--v-primary-base) !important;
      &.mdi-chevron-down {
        color: var(--v-greyTint-base) !important;
      }
    }

    &.drawer-mini {
      .v-list {
        div,
        a {
          &.v-list-item {
            color: var(--v-greyMedium-base);
            transition: 300ms all;
          }
        }
      }
    }
    .v-list {
      div,
      a {
        &.v-list-item {
          padding-left: $drawer-items-padding;
        }
        a.v-list-item {
          padding-left: $drawer-items-padding * 2;
        }
      }
    }
    .subheader {
      color: var(--v-greyTint-base);
      transition: 300ms all;
    }
    .hide {
      opacity: 0;
    }
    .show {
      opacity: 1;
    }
    .v-badge__wrapper {
      span {
        height: 16px;
        padding: 2px 6px;
        margin-bottom: 1px;
      }
    }
  }

  .sidebar-chat {
    .v-text-field__slot label {
      padding: 0;
    }
  }
  .add-section {
    position: absolute;
    left: 0;
    bottom: 10%;
    .v-text-field__slot label {
      padding: 0;
    }
  }

  .v-navigation-drawer.theme--dark {
    background-color: #23232d !important;

    .v-navigation-drawer__content {
      &::-webkit-scrollbar-thumb {
        background-color: #23232d;
        border-radius: 36px;
        border: none;
      }
    }

    .v-list-item:not(.v-list-item--active) {
      .v-icon {
        color: var(--v-greyBold-base);
      }
    }
    .v-list-item {
      &:hover {
        background-color: #13131a !important;
      }
      .v-list-item__title {
        color: var(--v-greyTint-base) !important;
      }
    }
    .v-list-item--active {
      background-color: #23232d !important;
      .v-list-item__content {
        .v-list-item__title {
          color: var(--v-greyTint-base) !important;
        }
      }
    }
  }

  .v-navigation-drawer--temporary.v-navigation-drawer--clipped {
    z-index: 5;
  }
</style>
