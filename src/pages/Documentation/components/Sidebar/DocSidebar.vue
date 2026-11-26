<template>
  <v-navigation-drawer
    v-model="DRAWER_STATE"
    :rail="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.display.lgAndUp"
    :temporary="$vuetify.display.mdAndDown"
    :rail-width="sidebarMinWidth"
    :class="{'drawer-mini': !DRAWER_STATE}"
  >
    <v-list>
      <template v-for="item in items" :key="item.title">
        <v-list-group v-if="item.children && DRAWER_STATE" :value="item.title">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.title" />
          </template>
          <v-list-item v-for="child in item.children" :key="child.link" :to="child.link"
            :prepend-icon="child.icon" :title="child.title" />
        </v-list-group>
        <v-list-item v-else :href="item.href" :to="item.link === '#' ? undefined : item.link"
          :prepend-icon="item.icon" :title="item.title" />
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
