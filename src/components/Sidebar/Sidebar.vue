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
      <v-list-item link color="primary" :to="'/app/profile-view'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24" color="mdi-account-circle">mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Profile </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link color="primary" :to="'/app/dashboard'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24" color="mdi-home">mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Dashboard </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        prepend-icon="mdi-cart"
      >
        <template v-slot:activator>
            <v-list-item-title>E-commerce</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in ecommerceLinks"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon>{{item.icon}}</v-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>

<!--      <v-list-item link color="primary" :to="'/admin/users'">-->
<!--        <v-list-item-action class="mr-6">-->
<!--          <v-icon :size="24">mdi-animation</v-icon>-->
<!--        </v-list-item-action>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title link> Users </v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->

      <v-list-group
        prepend-icon="mdi-account"
      >
        <template v-slot:activator>
          <v-list-item-title>User</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in usersChildren"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon>{{item.icon}}</v-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list-group>

<!--      <v-list-item link color="primary" :to="'/app/profile'">-->
<!--        <v-list-item-action class="mr-6">-->
<!--          <v-icon :size="24">mdi-account</v-icon>-->
<!--        </v-list-item-action>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title link> Profile </v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->

      <v-list-item link color="primary" :to="'/app/password'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-lock</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Change password </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link color="primary" :to="'/documentation'">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-file-document</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Documentation </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-subheader class='ml-5'>TEMPLATE</v-subheader>

      <v-list-group
        prepend-icon="mdi-apps"
      >
        <template v-slot:activator>
          <v-list-item-title>Core</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in coreChildren"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-grid-large"
      >
        <template v-slot:activator>
          <v-list-item-title>Tables</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in tableChildren"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-image-filter-none"
      >
        <template v-slot:activator>
          <v-list-item-title>UI Elements</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in UIelements"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-file-document"
      >
        <template v-slot:activator>
          <v-list-item-title>Forms</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in FormsChildren"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-chart-bar"
      >
        <template v-slot:activator>
          <v-list-item-title>Charts</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in chartsChildren"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-map"
      >
        <template v-slot:activator>
          <v-list-item-title>Maps</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in mapsChildren"
          :key="i"
          link
          :to="item.link"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-star"
      >
        <template v-slot:activator>
          <v-list-item-title>Extra</v-list-item-title>
        </template>

        <v-list-item
          v-for="(item, i) in extraChildren"
          :key="i"
          link
          :to="item.link"
          @click="item.action ? item.action() : null"
        >
          <v-icon v-text="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        prepend-icon="mdi-folder"
      >
        <template v-slot:activator>
          <v-list-item-title>Menu Levels</v-list-item-title>
        </template>

        <v-list-group
          v-for="(item, i) in levelsChildren"
          :key='i'
          no-action
          sub-group
        >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text='item.title'></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(items, i) in item.children"
              :key="i"
              :link='items.link'
            >
              <v-icon v-text="items.icon"></v-icon>
              <v-list-item-title v-text="items.title"></v-list-item-title>
            </v-list-item>
        </v-list-group>

      </v-list-group>

      <v-divider></v-divider>

      <v-subheader class='ml-5'>HELP</v-subheader>

      <v-list-item link color="primary" href="https://flatlogic.com/templates">
        <v-list-item-action class="mr-6">
          <v-icon :size="24" color="mdi-book-variant-multiple">mdi-book-variant-multiple</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Library </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link color="primary" href="https://flatlogic.com/forum/">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-forum</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> Support </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link color="primary" href="https://flatlogic.com/templates/vue-material-template">
        <v-list-item-action class="mr-6">
          <v-icon :size="24">mdi-help-circle-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title link> FAQ </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-subheader class='ml-5'>PROJECTS</v-subheader>

      <v-list-item>
        <v-list-item-action class="mr-6">
          <v-icon color="warning" size="24">mdi-circle-medium</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> My recent </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action class="mr-6">
          <v-icon color="primaryConst" size="24">mdi-circle-medium</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> Starred </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action class="mr-6">
          <v-icon color="error" size="24">mdi-circle-medium</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> Background </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click='this.addSection'>
        <v-list-item-action class="mr-6">
          <v-icon color="secondary" size="36">mdi-plus-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> Add section </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider
        dark
        style="margin-top: 240px"
      ></v-divider>

      <v-list-item
        color="primary"
        link
        @click="chat = true">
        <v-list-item-action class="mr-6">
          <v-responsive
            class="text-center primary rounded-pill d-inline-flex align-center justify-center my-2"
            height="44"
            width="44"
            max-width="200%">
            <v-icon
              size="24"
              color="white"
            >mdi-message-text</v-icon>
          </v-responsive>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
            link>
            Chat
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

<!--      <a-->
<!--        :href="externalLink"-->
<!--        target="_blank"-->
<!--        class="v-list-item v-list-item&#45;&#45;link theme&#45;&#45;light"-->
<!--      >-->
<!--        <v-list-item-action class="mr-6">-->
<!--          <v-icon :size="24">mdi-file</v-icon>-->
<!--        </v-list-item-action>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title link> API docs </v-list-item-title>-->
<!--        </v-list-item-content>-->
<!--      </a>-->
    </v-list>
    <v-dialog
      v-model="dialog"
      hide-overlay
      content-class="add-section"
      max-width="230"
    >
      <v-card class="primary pt-5">
        <v-card-text>
          <p class="text-h6 white--text">Add section</p>
          <v-text-field
            class="white--text"
            dark
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
            <v-btn
              text
              class="white--text"
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
          <p class="fs-large font-weight-medium greyBold--text mb-0">Chat</p>
          <v-list two-line>
            <template v-for="(item, i) in chatItems">
              <v-list-item
                class="px-0"
                style="min-height: 55px"
                :key="i"
              >
                <v-list-item-avatar class="my-0">
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content class="py-0">
                  <v-list-item-title class="font-weight-bold greyBold--text" v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle class="greyBold--text fs-base" v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
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
          { title: 'User List', icon: 'mdi-circle-small', link: '/admin/users'},
          { title: 'User Add', icon: 'mdi-circle-small', link: '/admin/users/new' },
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
            avatar: require('@/assets/img/time-line/a1.jpg'),
            title: 'Jane Hew',
            subtitle: "<span>Hey! How it's going?</span>",
          },
          {
            avatar: require('@/assets/img/time-line/a2.jpg'),
            title: 'Axel Pittman',
            subtitle: "<span class='text--primary'>I'll definitely buy this template</span>",
          },
          {
            avatar: require('@/assets/img/time-line/a3.jpg'),
            title: 'Sophia Fernandez',
            subtitle: "<span class='text--primary'>What's the font-family?</span>",
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
      //   return process.env.NODE_ENV === 'production'
      //     ? window.location.origin + '/api-docs'
      //     : 'http://localhost:8080/api-docs';
      // },
    },
    methods: {
      ...mapActions('layout', ['TOGGLE_DRAWER']),
      logOut: function () {
        window.localStorage.setItem('authenticated', false);
        window.localStorage.removeItem('token');
        this.$router.push('/login');
      },
      addSection: function () {
        this.dialog = true;
      },
      newMessage: function () {
        let post = {
          avatar: require('@/assets/img/user/avatars/avatar.png'),
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
