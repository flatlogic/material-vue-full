<template>
  <v-app-bar
    elevation="0"
    class="main-header"
    height="64"
    fixed
    color="primary"
    dark
  >
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon size="28" :class="$vuetify.theme.dark ? 'primary--text' : null"
          >mdi-arrow-left</v-icon
        >
      </template>
      <template v-else>
        <v-icon size="28" :class="$vuetify.theme.dark ? 'primary--text' : null"
          >mdi-menu</v-icon
        >
      </template>
    </v-btn>
    <v-toolbar-title :class="$vuetify.theme.dark ? 'primary--text' : null"
      >vue material test model</v-toolbar-title
    >
    <v-spacer></v-spacer>

    <Search />

    <v-menu min-width="180" offset-y bottom left nudge-bottom="10">
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
          size="40"
          v-bind="attrs"
          v-on="on"
          :class="{ 'd-none': !avatar }"
          class="mr-3"
        >
          <img :src="avatar" :alt="user.name" />
        </v-avatar>
        <div
          :class="{ 'd-none': avatar, 'd-flex': !avatar }"
          style="width: 40px; height: 40px; border-radius: 50%"
          class="
            deep-orange
            lighten-5
            mr-2
            justify-center
            align-center
            primary--text
          "
          v-bind="attrs"
          v-on="on"
        >
          {{ firstUserLetter }}
        </div>
      </template>
      <v-list>
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4">
          {{
            currentUser && currentUser.firstName
              ? currentUser.firstName
              : 'User'
          }}
        </div>
        <v-list-item-group color="primary">
          <v-list-item link :to="'/app/profile'">
            <v-list-item-icon class="mr-4">
              <v-icon color="greyTint" v-text="'mdi-account'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                color="greyTint"
                v-text="'My account'"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div class="d-flex justify-center my-3">
          <v-btn
            width="80%"
            large
            outlined
            color="primary"
            class="text-capitalize"
            @click="logoutUser"
            >Sign Out</v-btn
          >
        </div>
      </v-list>
    </v-menu>
    <div class="greeting-text mr-3 d-none d-md-block">
      Hi,
      <span>{{
        currentUser && currentUser.firstName ? currentUser.firstName : 'User'
      }}</span>
    </div>
  </v-app-bar>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import Search from '@/components/Search/Search';

  export default {
    name: 'Header',
    components: { Search },
    data() {
      return {
        user: JSON.parse(localStorage.getItem('user') || {}),
      };
    },
    computed: {
      ...mapState('layout', { drawer: (state) => state.drawer }),
      ...mapState('auth', {
        currentUser: (state) => state.currentUser,
      }),
      avatar() {
        return this.currentUser &&
          this.currentUser.avatar &&
          this.currentUser.avatar.length
          ? this.currentUser.avatar[0].publicUrl
          : null;
      },
      firstUserLetter() {
        return this.currentUser && this.currentUser.firstName
          ? this.currentUser.firstName[0].toUpperCase()
          : 'U';
      },
      DRAWER_STATE: {
        get() {
          return this.drawer;
        },
      },
    },
    methods: {
      ...mapActions('layout', ['TOGGLE_DRAWER']),
      ...mapActions('auth', ['logoutUser']),
    },
  };
</script>

<style lang="scss" scoped>
  .main-header {
    ::v-deep .v-list {
      .v-list-item:hover {
        background-color: #f3f5ff;
        &:before {
          opacity: 0;
        }
      }
      .v-list-item:hover .v-list-item__icon {
        .v-icon {
          color: rgba(var(--v-primary-base), 0.8) !important;
        }
      }
      .link-item {
        cursor: pointer;
      }
    }
    .greeting-text {
      font-size: 14px;
      span {
        font-weight: 600;
      }
    }
  }
</style>
