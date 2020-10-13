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
      <template v-for="item in items">
        <v-list-group
          color="primary"
          v-if="item.children && DRAWER_STATE"
          :key="item.title"
          v-model="item.model"
        >
          <template v-slot:prependIcon>
            <v-icon size="24" class="mr-0"> {{ item.icon }} </v-icon>
          </template>
          <template v-slot:activator >
            <v-list-item-content>
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
          :href="item.href"
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
          {
            title: 'Getting Started',
            icon: 'mdi-inbox',
            model: false,
            children: [
              { title: 'Overview', icon: 'mdi-circle-small', link: '/documentation/overview' },
              { title: 'Licences', icon: 'mdi-circle-small', link: '/documentation/licences' },
              { title: 'Quick Start', icon: 'mdi-circle-small', link: '/documentation/quick-start' }
            ],
          },
          {
            title: 'Components',
            icon: 'mdi-image-filter-none',
            model: false,
            children: [
              { title: 'Charts', icon: 'mdi-circle-small', link: '/documentation/charts' },
              { title: 'Forms', icon: 'mdi-circle-small', link: '/documentation/forms' },
              { title: 'UI', icon: 'mdi-circle-small', link: '/documentation/ui' },
              { title: 'Maps', icon: 'mdi-circle-small', link: '/documentation/maps' },
              { title: 'Tables', icon: 'mdi-circle-small', link: '/documentation/tables' },
            ],
          },
          { title: 'Structure', icon: 'mdi-text-box', link: '/documentation/structure'},
          { title: 'Libs', icon: 'mdi-library', link: '/documentation/libs'},
          { title: 'Purchase', icon: 'mdi-cart', link: null, href: 'https://flatlogic.com/templates/vue'},
        ],
        sidebarWidth: 240,
        sidebarMinWidth: 96
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
    }
  }
</script>

<style src="./DocSidebar.scss" lang="scss"/>
