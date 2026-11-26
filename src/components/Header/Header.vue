<template>
  <v-app-bar theme="dark"
    elevation="0"
    class="main-header"
    height="64"
    color="primary"
  >
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon size="28" :class="$vuetify.theme.current.dark ? 'text-primary' : null"
          >mdi-arrow-left</v-icon
        >
      </template>
      <template v-else>
        <v-icon size="28" :class="$vuetify.theme.current.dark ? 'text-primary' : null"
          >mdi-menu</v-icon
        >
      </template>
    </v-btn>
    <v-toolbar-title :class="$vuetify.theme.current.dark ? 'text-primary' : null"
      >Vue Material Admin</v-toolbar-title
    >
    <v-spacer></v-spacer>

    <AppSearch />

    <v-menu location="bottom start"
      offset="10">
      <template #activator="{ props }">
        <v-btn
          @click="notificationsBadge ? notificationsBadge = !notificationsBadge : ''"
          v-bind="props"
          icon
          class="mr-2">
          <v-badge
            :model-value="notificationsBadge"
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
        <div color="primary">
          <v-list-item
            v-for="(item, i) in notifications"
            :key="i"
          >
            <div class="mr-4 mb-1">
              <v-icon
                :color="item.color"
              >{{ item.icon }}</v-icon>
            </div>
            <div>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </div>
          </v-list-item>
        </div>
      </v-list>
    </v-menu>

    <v-menu location="bottom start"
      max-width="280"
      offset="10"
    >
      <template #activator="{ props }">
        <v-btn
          @click="messageBadge ? messageBadge = !messageBadge : ''"
          v-bind="props"
          style="font-size: 28px"
          icon
          class="mr-3">
          <v-badge
            :model-value="messageBadge"
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
        <div class="text-h5 text-grey-darken-3 px-4 pt-4">New Messages</div>
        <div class="subtitle-2 text-error font-weight-regular px-4 pb-2 link-item">4 new Messages</div>
        <div color="primary" >
          <v-list-item
            v-for="(item, i) in messages"
            :key="i"
          >
            <div class="mr-4 mb-1 d-flex flex-column">
              <v-btn icon size="x-small" variant="flat"
                :color="item.color"
              >{{ item.text }}</v-btn>
              <div style="font-size: 11px">{{ item.time }}</div>
            </div>
            <v-list-item two-line >
              <div style="width: 190px">
                <v-list-item-title class="pb-2">{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle class="text-truncate">{{ item.message }}</v-list-item-subtitle>
              </div>
            </v-list-item>
          </v-list-item>
        </div>
        <div class="d-flex justify-center my-3">
          <v-btn size="large"
            color="primary"
            rounded
            elevation="5"
            class="text-capitalize"
          >Send New Message
            <v-icon end theme="dark">mdi-send</v-icon>
          </v-btn>
        </div>
      </v-list>
    </v-menu>

    <v-menu location="bottom start" min-width="180" offset="10">
      <template #activator="{ props }">
        <v-avatar
          size="40"
          v-bind="props"
          :class="{ 'd-none': !avatar }"
          class="mr-3"
        >
          <img :src="avatar" :alt="currentUser?.firstName || 'Profile'" />
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
            text-primary
          "
          v-bind="props"
        >
          {{ firstUserLetter }}
        </div>
      </template>
      <v-list>
        <div class="text-h5 text-grey-darken-3 px-4 pt-4">
          {{
            currentUser && currentUser.firstName
              ? currentUser.firstName
              : 'User'
          }}
        </div>
        <div color="primary">
          <v-list-item v-for='(item, i) in account' :key='i' link :to="item.link">
            <div class="mr-4">
              <v-icon>{{item.icon}}</v-icon>
            </div>
            <div>
              <v-list-item-title :color='item.color'>{{item.text}}</v-list-item-title>
            </div>
          </v-list-item>
        </div>
        <div class="d-flex justify-center my-3">
          <v-btn size="large" variant="outlined"
            width="80%"
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
  import config from '../../config';
  import AppSearch from '@/components/Search/Search';

  export default {
    name: 'AppHeader',
    components: { AppSearch },
    data() {
      return {
        config,
        notificationsBadge: true,
        messageBadge: true,
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
          { text: 'Profile', icon: 'mdi-account', color: 'greyTint', link: '/app/profile' },
          { text: 'Tasks', icon: 'mdi-thumb-up', color: 'greyTint', link: ''  },
          { text: 'Messages', icon: 'mdi-flag', color: 'greyTint', link: ''  }
        ],
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
    :deep(.v-list) {
      .v-list-item:hover {
        background-color: #f3f5ff;
        &:before {
          opacity: 0;
        }
      }
      .v-list-item:hover .v-list-item__icon {
        .v-icon {
          color: rgba(var(--v-theme-primary), 0.8) !important;
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
