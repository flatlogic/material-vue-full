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
            <v-list-item-content >
                  <v-list-item-title
                      class="grey--text"
                  >
                      {{ item.title }}
                  </v-list-item-title>
              </v-list-item-content>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.link"
            link
          >
            <v-list-item-action class="mr-3" v-if="child.icon">
              <v-icon size="">{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
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
              size="24"
              :color="item.color ? item.color : ''"
            >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              class="grey--text"
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
          { title: 'Dashboard', icon: 'mdi-home', link: '/dashboard' },
          {
            title: 'E-commerce',
            icon: 'mdi-cart',
            model: false,
            children: [
              { title: 'Product Management', icon: 'mdi-circle-small', link: '/e-commerce/management' },
              { title: 'Product Grid', icon: 'mdi-circle-small', link: '/e-commerce/grid' },
              { title: 'Product Page', icon: 'mdi-circle-small', link: '/e-commerce/page' }
            ],
          },
          { title: 'User', icon: 'mdi-account', link: '/user'},
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
              { title: 'Tables Basic', icon: 'mdi-circle-small', link: '/tables/table-basic' },
              { title: 'Tables Dynamic', icon: 'mdi-circle-small', link: '/tables/table-dynamic' }
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
              { title: 'Notifications', icon: 'mdi-circle-small', link: '/ui/notifications' },
              { title: 'Navbar', icon: 'mdi-circle-small', link: '/ui/navbar' },
              { title: 'Tooltips', icon: 'mdi-circle-small', link: '/ui/tooltips' },
              { title: 'Tabs', icon: 'mdi-circle-small', link: '/ui/tabs' },
              { title: 'Pagination', icon: 'mdi-circle-small', link: '/ui/pagination' },
              { title: 'Progress', icon: 'mdi-circle-small', link: '/ui/progress' },
            ],
          },
          {
            title: 'Forms',
            icon: 'mdi-file-document',
            model: false,
            children: [
              { title: 'Form Elements', icon: 'mdi-circle-small', link: '/forms/forms-elements' },
              { title: 'Form Validation', icon: 'mdi-circle-small', link: '/forms/forms-validation' },
            ],
          },
          {
            title: 'Charts',
            icon: 'mdi-chart-bar',
            model: false,
            children: [
              { title: 'Charts Overview', icon: 'mdi-circle-small', link: '/charts/overview' },
              { title: 'Line Charts', icon: 'mdi-circle-small', link: '/charts/line-charts' },
              { title: 'Bar Charts', icon: 'mdi-circle-small', link: '/charts/bar-charts' },
              { title: 'Pie Charts', icon: 'mdi-circle-small', link: '/charts/pie-charts' },
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
              { title: 'Login Page', icon: 'mdi-circle-small', link: '/extra/login' },
              { title: 'Error Page', icon: 'mdi-circle-small', link: '/extra/error' },
              { title: 'Gallery', icon: 'mdi-circle-small', link: '/extra/gallery' },
              { title: 'Search Result', icon: 'mdi-circle-small', link: '/extra/search-result' },
              { title: 'Time Line', icon: 'mdi-circle-small', link: '/extra/timeline' },
            ],
          },
          {
            title: 'Menu Levels',
            icon: 'mdi-folder',
            model: false,
            children: [
              { title: 'Calendar', icon: 'mdi-circle-small', link: '/extra/calendar' },

              { title: 'Invoice', icon: 'mdi-circle-small', link: '/extra/invoice' },
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
          { title: 'Background', icon: 'mdi-circle-medium', color: 'error'}
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
    }
  }
</script>

<style src="./Sidebar.scss" lang="scss"/>
