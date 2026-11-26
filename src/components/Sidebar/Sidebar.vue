<template>
  <v-navigation-drawer
    v-model="DRAWER_STATE"
    :rail="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.display.lgAndUp"
    :temporary="$vuetify.display.mdAndDown"
    :rail-width="sidebarMinWidth"
    :class="{ 'drawer-mini': !DRAWER_STATE }"
  >
    <v-list>
      <v-list-item link color="primary" :to="'/app/profile-view'">
        <template #prepend><v-icon>mdi-account-circle</v-icon></template>
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item>

      <v-list-item link color="primary" :to="'/app/dashboard'">
        <template #prepend><v-icon>mdi-home</v-icon></template>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>

      <v-list-group value="E-commerce">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-cart" title="E-commerce" />
        </template>

        <v-list-item
          v-for="(item, i) in ecommerceLinks"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="User">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account" title="User" />
        </template>

        <v-list-item
          v-for="(item, i) in usersChildren"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item link color="primary" :to="'/app/password'">
        <template #prepend><v-icon>mdi-lock</v-icon></template>
        <v-list-item-title>Change password</v-list-item-title>
      </v-list-item>

      <v-list-item link color="primary" :to="'/documentation'">
        <template #prepend><v-icon>mdi-file-document</v-icon></template>
        <v-list-item-title>Documentation</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-subheader class='ml-5'>TEMPLATE</v-list-subheader>

      <v-list-group value="Core">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-apps" title="Core" />
        </template>

        <v-list-item
          v-for="(item, i) in coreChildren"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Tables">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-grid-large" title="Tables" />
        </template>

        <v-list-item
          v-for="(item, i) in tableChildren"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="UI Elements">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-image-filter-none" title="UI Elements" />
        </template>

        <v-list-item
          v-for="(item, i) in UIelements"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Forms">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-file-document" title="Forms" />
        </template>

        <v-list-item
          v-for="(item, i) in FormsChildren"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Charts">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-chart-bar" title="Charts" />
        </template>

        <v-list-item
          v-for="(item, i) in chartsChildren"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Maps">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-map" title="Maps" />
        </template>

        <v-list-item
          v-for="(item, i) in mapsChildren"
          :key="i"
          link
          :to="item.link"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Extra">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-star" title="Extra" />
        </template>

        <v-list-item
          v-for="(item, i) in extraChildren"
          :key="i"
          link
          :to="item.link"
          @click="item.action ? item.action() : null"
        >
          <template #prepend><v-icon :icon="item.icon" /></template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group value="Menu Levels">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-folder" title="Menu Levels" />
        </template>

        <v-list-group
          v-for="(item, i) in levelsChildren"
          :key='i'
           :value="item.title" subgroup
        >
            <template #activator="{ props }">
              <v-list-item v-bind="props" :title="item.title" />
            </template>

            <v-list-item
              v-for="(items, i) in item.children"
              :key="i"
              :to='items.link'
            >
              <template #prepend><v-icon :icon="items.icon" /></template>
          <v-list-item-title>{{ items.title }}</v-list-item-title>
            </v-list-item>
        </v-list-group>

      </v-list-group>

      <v-divider></v-divider>

      <v-list-subheader class='ml-5'>HELP</v-list-subheader>

      <v-list-item link color="primary" href="https://flatlogic.com/templates">
        <template #prepend><v-icon>mdi-book-variant-multiple</v-icon></template>
        <v-list-item-title>Library</v-list-item-title>
      </v-list-item>

      <v-list-item link color="primary" href="https://flatlogic.com/forum/">
        <template #prepend><v-icon>mdi-forum</v-icon></template>
        <v-list-item-title>Support</v-list-item-title>
      </v-list-item>

      <v-list-item link color="primary" href="https://flatlogic.com/templates/vue-material-template">
        <template #prepend><v-icon>mdi-help-circle-outline</v-icon></template>
        <v-list-item-title>FAQ</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-subheader class='ml-5'>PROJECTS</v-list-subheader>

      <v-list-item>
        <div class="mr-6">
          <v-icon color="warning" size="24">mdi-circle-medium</v-icon>
        </div>
        <div>
          <v-list-item-title> My recent </v-list-item-title>
        </div>
      </v-list-item>

      <v-list-item>
        <div class="mr-6">
          <v-icon color="primaryConst" size="24">mdi-circle-medium</v-icon>
        </div>
        <div>
          <v-list-item-title> Starred </v-list-item-title>
        </div>
      </v-list-item>

      <v-list-item>
        <div class="mr-6">
          <v-icon color="error" size="24">mdi-circle-medium</v-icon>
        </div>
        <div>
          <v-list-item-title> Background </v-list-item-title>
        </div>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click='this.addSection'>
        <div class="mr-6">
          <v-icon color="secondary" size="36">mdi-plus-circle</v-icon>
        </div>
        <div>
          <v-list-item-title> Add section </v-list-item-title>
        </div>
      </v-list-item>

      <v-divider theme="dark"
        style="margin-top: 240px"
      ></v-divider>

      <v-list-item
        color="primary"
        link
        @click="chat = true">
        <div class="mr-6">
          <v-responsive
            class="text-center bg-primary rounded-pill d-inline-flex align-center justify-center my-2"
            height="44"
            width="44"
            max-width="200%">
            <v-icon
              size="24"
              color="white"
            >mdi-message-text</v-icon>
          </v-responsive>
        </div>
        <div>
          <v-list-item-title
            link>
            Chat
          </v-list-item-title>
        </div>
      </v-list-item>
    </v-list>
    <v-dialog
      v-model="dialog"
      hide-overlay
      content-class="add-section"
      max-width="230"
    >
      <v-card class="primary pt-5">
        <v-card-text>
          <p class="text-h6 text-white">Add section</p>
          <v-text-field theme="dark"
            class="text-white"
            single-line
            label="Section name"
          ></v-text-field>
          <v-row no-gutters justify="end">
            <v-btn
              color="secondary"
              class="elevation-0 mr-2"
              @click="dialog = false"
            >
              Add
            </v-btn>
            <v-btn variant="text"
              class="text-white"
              @click="dialog = false"
            >
              Agree
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="chat"
      content-class="sidebar-chat"
      max-width="440"
    >
      <v-card class="pt-5">
        <v-card-text>
          <p class="fs-large font-weight-medium text-greyBold mb-0">Chat</p>
          <v-list two-line>
            <template v-for="(item, i) in chatItems" :key="i">
              <v-list-item
                class="px-0"
                style="min-height: 55px"
              >
                <v-avatar class="my-0">
                  <v-img :src="item.avatar"></v-img>
                </v-avatar>

                <div class="py-0">
                  <v-list-item-title class="font-weight-bold text-greyBold">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-greyBold fs-base">{{ item.subtitle }}</v-list-item-subtitle>
                </div>
              </v-list-item>
            </template>
          </v-list>
          <v-row no-gutters>
            <v-text-field
              v-model="chatMessage"
              single-line
              hide-details
              class="pt-0 mr-2"
              label="Type a message"
            ></v-text-field>
            <v-btn
              color="primary"
              class="elevation-0 text-capitalize"
              @click="newMessage"
            >
              Send
            </v-btn>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import config from '@/config';

  export default {
    name: 'Sidebar',
    props: {
      source: String,
    },
    data() {
      return {
        sidebarWidth: 240,
        sidebarMinWidth: 96,
        usersChildren: [
          { title: 'User List', icon: 'mdi-circle-small', link: config.isBackend ? '/admin/users' : '/user/list'},
          { title: 'User Add', icon: 'mdi-circle-small', link: config.isBackend ? '/admin/users/new' : '/user/add' },
          { title: 'User Edit', icon: 'mdi-circle-small', link: '/app/profile' }
        ],
        ecommerceLinks: [
          { title: 'Product Management', icon: 'mdi-circle-small', link: '/e-commerce/management' },
          { title: 'Product Grid', icon: 'mdi-circle-small', link: '/e-commerce/grid' },
          { title: 'Product Page', icon: 'mdi-circle-small', link: '/e-commerce/detail'}
        ],
        coreChildren: [
          { title: 'Typography', icon: 'mdi-circle-small', link: '/core/typography' },
          { title: 'Colors', icon: 'mdi-circle-small', link: '/core/colors' },
          { title: 'Grid', icon: 'mdi-circle-small', link: '/core/grid' },
        ],
        tableChildren: [
          { title: 'Tables Basic', icon: 'mdi-circle-small', link: '/tables/basic'},
          { title: 'Tables Dynamic', icon: 'mdi-circle-small', link: '/tables/dynamic'}
        ],
        UIelements: [
          { title: 'Icons', icon: 'mdi-circle-small', link: '/ui/icons'},
          { title: 'Badges', icon: 'mdi-circle-small', link: '/ui/badges'},
          { title: 'Carousel', icon: 'mdi-circle-small', link: '/ui/carousel'},
          { title: 'Cards', icon: 'mdi-circle-small', link: '/ui/cards'},
          { title: 'Modal', icon: 'mdi-circle-small', link: '/ui/modal'},
          { title: 'Notifications', icon: 'mdi-circle-small', link: '/ui/notifications'},
          { title: 'Navbar', icon: 'mdi-circle-small', link: '/ui/navbar'},
          { title: 'Tooltips', icon: 'mdi-circle-small', link: '/ui/tooltips'},
          { title: 'Tabs', icon: 'mdi-circle-small', link: '/ui/tabs'},
          { title: 'Pagination', icon: 'mdi-circle-small', link: '/ui/pagination'},
          { title: 'Progress', icon: 'mdi-circle-small', link: '/ui/progress'},
        ],
        FormsChildren: [
          { title: 'Form Elements', icon: 'mdi-circle-small', link: '/forms/elements' },
          { title: 'Form Validation', icon: 'mdi-circle-small', link: '/forms/validation'},
        ],
        chartsChildren: [
          { title: 'Charts Overview', icon: 'mdi-circle-small', link: '/charts/overview'},
          { title: 'Line Charts', icon: 'mdi-circle-small', link: '/charts/line-charts'},
          { title: 'Bar Charts', icon: 'mdi-circle-small', link: '/charts/bar-charts'},
          { title: 'Pie Charts', icon: 'mdi-circle-small', link: '/charts/pie-charts'},
        ],
        mapsChildren: [
          { title: 'Google Maps', icon: 'mdi-circle-small', link: '/maps/google' },
          { title: 'Vector Maps', icon: 'mdi-circle-small', link: '/maps/vector' },
        ],
        extraChildren: [
          { title: 'Calendar', icon: 'mdi-circle-small', link: '/extra/calendar' },
          { title: 'Invoice', icon: 'mdi-circle-small', link: '/extra/invoice' },
          { title: 'Login Page', icon: 'mdi-circle-small', link: '/#', action: () => this.logOut() },
          { title: 'Error Page', icon: 'mdi-circle-small', link: '/extra/error'},
          { title: 'Gallery', icon: 'mdi-circle-small', link: '/extra/gallery'},
          { title: 'Search Result', icon: 'mdi-circle-small', link: '/extra/search-result'},
          { title: 'Time Line', icon: 'mdi-circle-small', link: '/extra/timeLine'},
        ],
        levelsChildren: [
          { title: 'Level 1.1',
            icon: 'mdi-circle-small',
            children: [
              { title: 'Level 1.2', icon: 'mdi-circle-small', link: '/extra/calendar'},
              { title: 'Level 1.3', icon: 'mdi-circle-small', link: '/extra/invoice'},
            ]},
          {
            title: 'Level 2.1',
            icon: 'mdi-folder',
            model: false,
            children: [
              { title: 'Level 2.2', icon: 'mdi-circle-small', link: '/extra/calendar'},
              { title: 'Level 2.3', icon: 'mdi-circle-small', link: '/extra/invoice'},
            ],
          },
        ],
        chatItems: [
          {
            avatar: new URL('../../assets/img/time-line/a1.jpg', import.meta.url).href,
            title: 'Jane Hew',
            subtitle: "Hey! How it's going?",
          },
          {
            avatar: new URL('../../assets/img/time-line/a2.jpg', import.meta.url).href,
            title: 'Axel Pittman',
            subtitle: "I'll definitely buy this template",
          },
          {
            avatar: new URL('../../assets/img/time-line/a3.jpg', import.meta.url).href,
            title: 'Sophia Fernandez',
            subtitle: "What's the font-family?",
          },
        ],
        dialog: false,
        chat: false,
        chatMessage: ''
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
      // externalLink: () => {
      //   return import.meta.env.PROD
      //     ? window.location.origin + '/api-docs'
      //     : 'http://localhost:8080/api-docs';
      // },
    },
    methods: {
      ...mapActions('layout', ['TOGGLE_DRAWER']),
      logOut: function () {
        return this.$store.dispatch('auth/logoutUser');
      },
      addSection: function () {
        this.dialog = true;
      },
      newMessage: function () {
        let post = {
          avatar: new URL('../../assets/img/user/avatars/avatar.png', import.meta.url).href,
          title: 'John Smith',
          subtitle: ''
        };
        if (this.chatMessage.length !== 0) {
          post.subtitle = this.chatMessage;
          this.chatItems.push(post)
          this.chatMessage = '';
        }
      },
    },
  };
</script>

<style lang="scss">
  @import '@/styles/variables';

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
        background-color: rgb(var(--v-theme-greyTint));
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
      color: rgb(var(--v-theme-greyMedium)) !important;
    }
    .v-list-item--active {
      .v-list-item__content {
        .v-list-item__title {
          color: rgb(var(--v-theme-greyBold)) !important;
        }
      }
      .v-list-item__action {
        i {
          color: rgb(var(--v-theme-primary)) !important;
        }
      }
    }
    .v-list-group--active .v-list-item--active i {
      color: rgb(var(--v-theme-primary)) !important;
      &.mdi-chevron-down {
        color: rgb(var(--v-theme-greyTint)) !important;
      }
    }

    &.drawer-mini {
      .v-list {
        div,
        a {
          &.v-list-item {
            color: rgb(var(--v-theme-greyMedium));
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
      color: rgb(var(--v-theme-greyTint));
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

  .v-navigation-drawer.v-theme--dark {
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
        color: rgb(var(--v-theme-greyBold));
      }
    }
    .v-list-item {
      &:hover {
        background-color: #13131a !important;
      }
      .v-list-item__title {
        color: rgb(var(--v-theme-greyTint)) !important;
      }
    }
    .v-list-item--active {
      background-color: #23232d !important;
      .v-list-item__content {
        .v-list-item__title {
          color: rgb(var(--v-theme-greyTint)) !important;
        }
      }
    }
  }

  .v-navigation-drawer--temporary.v-navigation-drawer--clipped {
    z-index: 5;
  }
</style>
