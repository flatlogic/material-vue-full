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
            <v-icon size="24" class="mr-0"> {{ item.icon }} </v-icon>
          </template>
          <template v-slot:activator >
            <v-list-item-content>
              <v-badge v-if="item.badge" content="new" color="secondary">
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
            @click="child.action ? child.action : null"
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
          link
        >
          <v-list-item-action class="mr-6">
            <v-icon
              :size="item.size ? item.size : 24"
              :color="item.color ? item.color : ''"
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
    </v-list>
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
              { title: 'Typography', icon: 'mdi-circle-small', link: '/core/typography', action: null },
              { title: 'Colors', icon: 'mdi-circle-small', link: '/core/colors', action: null },
              { title: 'Grid', icon: 'mdi-circle-small', link: '/core/grid', action: null },
            ],
          },
          {
            title: 'Tables',
            icon: 'mdi-grid-large',
            model: false,
            children: [
              { title: 'Tables Basic', icon: 'mdi-circle-small', link: '/tables/basic', action: null },
              { title: 'Tables Dynamic', icon: 'mdi-circle-small', link: '/tables/dynamic', action: null }
            ],
          },
          {
            title: 'UI Elements',
            icon: 'mdi-image-filter-none',
            model: false,
            children: [
              { title: 'Icons', icon: 'mdi-circle-small', link: '/ui/icons', action: null},
              { title: 'Badges', icon: 'mdi-circle-small', link: '/ui/badges', action: null},
              { title: 'Carousel', icon: 'mdi-circle-small', link: '/ui/carousel', action: null},
              { title: 'Cards', icon: 'mdi-circle-small', link: '/ui/cards', action: null},
              { title: 'Modal', icon: 'mdi-circle-small', link: '/ui/modal', action: null},
              { title: 'Notifications', icon: 'mdi-circle-small', link: '/ui/notifications', action: null },
              { title: 'Navbar', icon: 'mdi-circle-small', link: '/ui/navbar', action: null },
              { title: 'Tooltips', icon: 'mdi-circle-small', link: '/ui/tooltips', action: null },
              { title: 'Tabs', icon: 'mdi-circle-small', link: '/ui/tabs', action: null },
              { title: 'Pagination', icon: 'mdi-circle-small', link: '/ui/pagination', action: null },
              { title: 'Progress', icon: 'mdi-circle-small', link: '/ui/progress', action: null },
            ],
          },
          {
            title: 'Forms',
            icon: 'mdi-file-document',
            model: false,
            children: [
              { title: 'Form Elements', icon: 'mdi-circle-small', link: '/forms/elements', action: null },
              { title: 'Form Validation', icon: 'mdi-circle-small', link: '/forms/validation', action: null },
            ],
          },
          {
            title: 'Charts',
            icon: 'mdi-chart-bar',
            model: false,
            children: [
              { title: 'Charts Overview', icon: 'mdi-circle-small', link: '/charts/overview', action: null },
              { title: 'Line Charts', icon: 'mdi-circle-small', link: '/charts/line-charts', action: null },
              { title: 'Bar Charts', icon: 'mdi-circle-small', link: '/charts/bar-charts', action: null },
              { title: 'Pie Charts', icon: 'mdi-circle-small', link: '/charts/pie-charts', action: null },
            ],
          },
          {
            title: 'Maps',
            icon: 'mdi-map',
            model: false,
            children: [
              { title: 'Google Maps', icon: 'mdi-circle-small', link: '/maps/google', action: null },
              { title: 'Vector Maps', icon: 'mdi-circle-small', link: '/maps/vector', action: null },
            ],
          },
          {
            title: 'Extra',
            icon: 'mdi-star',
            model: false,
            children: [
              { title: 'Calendar', icon: 'mdi-circle-small', link: '/extra/calendar', action: null },
              { title: 'Invoice', icon: 'mdi-circle-small', link: '/extra/invoice', action: null },
              { title: 'Login Page', icon: 'mdi-circle-small', link: '#', action: this.logOut },
              { title: 'Error Page', icon: 'mdi-circle-small', link: '/extra/error', action: null },
              { title: 'Gallery', icon: 'mdi-circle-small', link: '/extra/gallery', action: null },
              { title: 'Search Result', icon: 'mdi-circle-small', link: '/extra/search-result', action: null },
              { title: 'Time Line', icon: 'mdi-circle-small', link: '/extra/timeLine', action: null },
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
                  { title: 'Calendar', icon: 'mdi-circle-small', link: '/extra/calendar', action: null },
                  { title: 'Invoice', icon: 'mdi-circle-small', link: '/extra/invoice', action: null },
                ],
              },
            ],
          },
          { divider: true },
          { heading: 'HELP' },
          { title: 'Library', icon: 'mdi-book-variant-multiple'},
          { title: 'Support', icon: 'mdi-forum'},
          { title: 'FAQ', icon: 'mdi-help-circle-outline'},
          { divider: true },
          { heading: 'PROJECTS' },
          { title: 'My recent', icon: 'mdi-circle-medium', color: 'warning'},
          { title: 'Starred', icon: 'mdi-circle-medium', color: 'primary'},
          { title: 'Background', icon: 'mdi-circle-medium', color: 'error'},
          { divider: true },
          { title: 'Add section', icon: 'mdi-plus-circle', color: 'secondary', size: 36},
          { divider: true },
        ],
        sidebarWidth: 240,
        sidebarMinWidth: 96
      }
    },
    computed: {
      ...mapState(['drawer']),
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
      ...mapActions([ 'TOGGLE_DRAWER' ]),
      logOut: function () {
            window.localStorage.setItem('authenticated', false);
            this.$router.push('/login');
        }
    }
  }
</script>

<style src="./Sidebar.scss" lang="scss"/>
