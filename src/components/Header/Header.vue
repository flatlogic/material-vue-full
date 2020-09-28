<template>
  <v-app-bar
    elevation="0"
    class="main-header"
    height="64"
    fixed
    color='primary'
    dark>
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon size="28" :class="$vuetify.theme.dark ? 'primary--text' : null">mdi-arrow-left</v-icon>
      </template>
      <template v-else>
        <v-icon size="28" :class="$vuetify.theme.dark ? 'primary--text' : null">mdi-menu</v-icon>
      </template>
    </v-btn>
    <v-toolbar-title :class="$vuetify.theme.dark ? 'primary--text' : null">Vue Material Admin</v-toolbar-title>
    <v-spacer></v-spacer>

    <Search />

    <v-menu
      offset-y
      bottom
      nudge-bottom="10"
      left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="notificationsBadge ? notificationsBadge = !notificationsBadge : ''"
          v-bind="attrs"
          v-on="on"
          icon
          class="mr-2">
          <v-badge
            :value="notificationsBadge"
            color="error"
            content="4"
            overlap>
            <v-icon
              size="28"
              :color="config.light.iconColor"
            >mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in notifications"
            :key="i"
          >
            <v-list-item-icon class="mr-4 mb-1">
              <v-icon
                :color="item.color"
                v-text="item.icon"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-menu
      max-width="280"
      offset-y
      bottom
      nudge-bottom="10"
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="messageBadge ? messageBadge = !messageBadge : ''"
          v-bind="attrs"
          v-on="on"
          style="font-size: 28px"
          icon
          class="mr-3">
            <v-badge
              :value="messageBadge"
              color="warning"
              content="3"
              overlap
            >
              <v-icon
                size="28"
                :color="config.light.iconColor">
                mdi-email-outline</v-icon>
            </v-badge>
        </v-btn>
      </template>
      <v-list >
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4">New Messages</div>
        <div class="subtitle-2 error--text font-weight-regular px-4 pb-2 link-item">4 new Messages</div>
        <v-list-item-group color="primary" >
          <v-list-item
            v-for="(item, i) in messages"
            :key="i"
          >
            <v-list-item-icon class="mr-4 mb-1 d-flex flex-column">
              <v-btn
                fab
                x-small
                depressed
                :color="item.color"
              >{{ item.text }}</v-btn>
              <div style="font-size: 11px">{{ item.time }}</div>
            </v-list-item-icon>
            <v-list-item two-line >
                <v-list-item-content style="width: 190px">
                    <v-list-item-title v-text="item.name" class="pb-2"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.message" class="text-truncate"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </v-list-item-group>
        <div class="d-flex justify-center my-3">
          <v-btn
            large
            color="primary"
            rounded
            elevation="5"
            class="text-capitalize"
          >Send New Message
          <v-icon right dark>mdi-send</v-icon>
        </v-btn>
        </div>
      </v-list>
    </v-menu>
    <v-menu
      min-width="180"
      offset-y
      bottom
      left
      nudge-bottom="10"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
          size="40"
          v-bind="attrs"
          v-on="on"
          class="mr-3">
          <img
            src="@/assets/img/user/avatars/avatar.png"
            alt="John"
          >
        </v-avatar>
      </template>
      <v-list >
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4">John Smith</div>
        <div class="subtitle-2 primary--text font-weight-regular px-4">Flatlogic.com</div>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in account"
            :key="i"
          >
            <v-list-item-icon class="mr-4">
              <v-icon
                :color="item.color"
                v-text="item.icon"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="greyTint" v-text="item.text"></v-list-item-title>
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
          >Sign Out</v-btn>
        </div>
      </v-list>

    </v-menu>
    <div class="greeting-text mr-3 d-none d-md-block">Hi, <span>John Smith</span></div>

  </v-app-bar>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import config from '../../config';
  import Search from "@/components/Search/Search";

  export default {
    name: 'Header',
    components: { Search },
    data: () => ({
      config,
      searchCollapse: true,
      notifications: [
        { text: 'Check out this awesome ticket', icon: 'mdi-tag', color: 'warning' },
        { text: 'What is the best way to get ...', icon: 'mdi-thumb-up', color: 'success'  },
        { text: 'This is just a simple notification', icon: 'mdi-flag', color: 'error'  },
        { text: '12 new orders has arrived today', icon: 'mdi-cart', color: 'primary'  },
      ],
      messages: [
        { text: 'JH', name: 'Jane Hew', message: 'Hey! How is it going?', time: '09:32', color: 'warning' },
        { text: 'LB', name: 'Lloyd Brown', message: 'Check out my new Dashboard', time: '10:02', color: 'success'  },
        { text: 'MW', name: 'Mark Winstein', message: 'I want rearrange the appointment', time: '12:16', color: 'error'  },
        { text: 'LD', name: 'Liana Dutti', message: 'Good news from sale department', time: '14:56', color: 'primary'  },
      ],
      account: [
        { text: 'Profile', icon: 'mdi-account', color: 'greyTint' },
        { text: 'Tasks', icon: 'mdi-thumb-up', color: 'greyTint'  },
        { text: 'Messages', icon: 'mdi-flag', color: 'greyTint'  }
      ],
      notificationsBadge: true,
      messageBadge: true
    }),
    computed: {
      ...mapState('layout',
       { drawer: state => state.drawer }
      ),
      DRAWER_STATE :{
        get() {
          return this.drawer
        },
      }
    },
    methods: {
      ...mapActions('layout', [ 'TOGGLE_DRAWER']),
      ...mapActions('auth', ['logoutUser']),
    }
  };
</script>

<style src="./Header.scss" lang="scss"></style>
