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
    :class="{'drawer-mini': !DRAWER_STATE}"
  >
    <v-list>
      <template v-for="(item, i) in items">
        <v-row
          v-if="item.heading"
          :key="item.heading"
          align="center"
        >
          <v-col cols="6">
            <span
              style="padding-left: 32px"
              class="text-body-1 subheader"
              :class="(item.heading && DRAWER_STATE) ? 'show ' : 'hide'">
              {{ item.heading }}
            </span>
          </v-col>
          <v-col
            cols="6"
            class="text-center"
          >
          </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-group
          color="primary"
          v-else-if="item.children && DRAWER_STATE"
          :key="item.title"
          v-model="item.model"
        >
          <template v-slot:prependIcon>
            <v-icon size="24" class="mr-0" color="greyTint"> {{ item.icon }} </v-icon>
          </template>
          <template v-slot:activator >
            <v-list-item-content>
              <v-badge v-if="item.badge" content="New" color="secondary">
              </v-badge>
                <v-list-item-title>
                  {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.link"
            link
            class="pl-12"
            @click="child.action ? child.action() : null"
          >
            <v-list-item-action class="mr-2" v-if="child.icon">
              <v-icon size="">{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                  {{ child.title }}
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          color="primary"
          v-else
          :key="item.text"
          :to="item.link === '#' ? '' : item.link"
          @click="item.action ? item.action() : null"
          link
        >
          <v-list-item-action class="mr-6">
            <v-icon
              :size="item.size ? item.size : 24"
              :color="item.color ? item.color : 'greyTint'"
            >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              link
            >
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
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
  import { mapActions, mapState } from 'vuex'

  export default {
    props: {
        source: String,
    },
    data(){
      return {
        items: [
          { title: 'Profile', icon: 'mdi-account-circle', link: '/user/profile' },
          { title: 'Dashboard', icon: 'mdi-home', link: '/dashboard' },
          {
            title: 'E-commerce',
            icon: 'mdi-cart',
            model: false,
            children: [
              { title: 'Product Management', icon: 'mdi-circle-small', link: '/e-commerce/management' },
              { title: 'Product Grid', icon: 'mdi-circle-small', link: '/e-commerce/grid' },
              { title: 'Product Page', icon: 'mdi-circle-small', link: '/e-commerce/detail'}
            ],
          },
          {
            title: 'User',
            icon: 'mdi-account',
            model: false,
            badge: true,
            children: [
              { title: 'User List', icon: 'mdi-circle-small', link: '/user/list'},
              { title: 'User Add', icon: 'mdi-circle-small', link: '/user/add' },
              { title: 'User Edit', icon: 'mdi-circle-small', link: '/user/edit' }
            ],
          },
          { title: 'Documentation', icon: 'mdi-file-document', link: '/documentation'},
          { divider: true },
          { heading: 'TEMPLATE' },
          {
            title: 'Core',
            icon: 'mdi-apps',
            model: false,
            children: [
              { title: 'Typography', icon: 'mdi-circle-small', link: '/core/typography' },
              { title: 'Colors', icon: 'mdi-circle-small', link: '/core/colors' },
              { title: 'Grid', icon: 'mdi-circle-small', link: '/core/grid' },
            ],
          },
          {
            title: 'Tables',
            icon: 'mdi-grid-large',
            model: false,
            children: [
              { title: 'Tables Basic', icon: 'mdi-circle-small', link: '/tables/basic'},
              { title: 'Tables Dynamic', icon: 'mdi-circle-small', link: '/tables/dynamic'}
            ],
          },
          {
            title: 'UI Elements',
            icon: 'mdi-image-filter-none',
            model: false,
            children: [
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
          },
          {
            title: 'Forms',
            icon: 'mdi-file-document',
            model: false,
            children: [
              { title: 'Form Elements', icon: 'mdi-circle-small', link: '/forms/elements' },
              { title: 'Form Validation', icon: 'mdi-circle-small', link: '/forms/validation'},
            ],
          },
          {
            title: 'Charts',
            icon: 'mdi-chart-bar',
            model: false,
            children: [
              { title: 'Charts Overview', icon: 'mdi-circle-small', link: '/charts/overview'},
              { title: 'Line Charts', icon: 'mdi-circle-small', link: '/charts/line-charts'},
              { title: 'Bar Charts', icon: 'mdi-circle-small', link: '/charts/bar-charts'},
              { title: 'Pie Charts', icon: 'mdi-circle-small', link: '/charts/pie-charts'},
            ],
          },
          {
            title: 'Maps',
            icon: 'mdi-map',
            model: false,
            children: [
              { title: 'Google Maps', icon: 'mdi-circle-small', link: '/maps/google' },
              { title: 'Vector Maps', icon: 'mdi-circle-small', link: '/maps/vector' },
            ],
          },
          {
            title: 'Extra',
            icon: 'mdi-star',
            model: false,
            children: [
              { title: 'Calendar', icon: 'mdi-circle-small', link: '/extra/calendar' },
              { title: 'Invoice', icon: 'mdi-circle-small', link: '/extra/invoice' },
              { title: 'Login Page', icon: 'mdi-circle-small', link: '#', action: () => this.logOut() },
              { title: 'Error Page', icon: 'mdi-circle-small', link: '/extra/error'},
              { title: 'Gallery', icon: 'mdi-circle-small', link: '/extra/gallery'},
              { title: 'Search Result', icon: 'mdi-circle-small', link: '/extra/search-result'},
              { title: 'Time Line', icon: 'mdi-circle-small', link: '/extra/timeLine'},
            ],
          },
          {
            title: 'Menu Levels',
            icon: 'mdi-folder',
            model: false,
            children: [
              { title: 'Level 1.1', icon: 'mdi-circle-small', },
              {
                title: 'Level 1.2',
                icon: 'mdi-folder',
                model: false,
                children: [
                  { title: 'Calendar', icon: 'mdi-circle-small', link: '/extra/calendar'},
                  { title: 'Invoice', icon: 'mdi-circle-small', link: '/extra/invoice'},
                ],
              },
            ],
          },
          { divider: true },
          { heading: 'HELP' },
          { title: 'Library', icon: 'mdi-book-variant-multiple'},
          { title: 'Support', icon: 'mdi-forum'},
          { title: 'FAQ', icon: 'mdi-help-circle-outline', },
          { divider: true },
          { heading: 'PROJECTS' },
          { title: 'My recent', icon: 'mdi-circle-medium', color: 'warning'},
          { title: 'Starred', icon: 'mdi-circle-medium', color: 'primaryConst'},
          { title: 'Background', icon: 'mdi-circle-medium', color: 'error'},
          { divider: true },
          { title: 'Add section', icon: 'mdi-plus-circle', color: 'secondary', size: 36, action: () => this.addSection()},
          { divider: true },
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
        sidebarWidth: 240,
        sidebarMinWidth: 96,
        dialog: false,
        chat: false,
        chatMessage: ''
      }
    },
    computed: {
      ...mapState( 'layout', {
        drawer: state => state.drawer
      } ),
      DRAWER_STATE: {
        get() {
          return this.drawer
        },
        set(newValue) {
          if (newValue === this.drawer) return;
          this.TOGGLE_DRAWER();
        }
      }
    },
    methods: {
      ...mapActions(
        'layout', [ 'TOGGLE_DRAWER' ]
      ),
      logOut: function () {
        window.localStorage.setItem('authenticated', false);
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
    }
  }
</script>

<style src="./Sidebar.scss" lang="scss"/>
