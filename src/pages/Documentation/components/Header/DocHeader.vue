<template>
  <v-app-bar
    class="main-header"
    height="64"
    fixed
    color='primary'
    dark
    >
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon  style="font-size: 28px">mdi-arrow-left</v-icon>
      </template>
      <template v-else>
        <v-icon style="font-size: 28px">mdi-menu</v-icon>
      </template>
    </v-btn>
    <v-toolbar-title>Vue Material Admin Documentation</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
        v-for="(btn, i) in buttons"
        :key="i"
        icon
        target="_blank"
        class="mr-1"
        :href=" btn.link ">
      <v-icon size="24">
        {{ btn.icon }}
      </v-icon>
    </v-btn>

    <v-btn
      href="https://templates-flatlogic.herokuapp.com/vue-material/#/dashboard"
      text
      class="mr-3"
    >Live Preview
    </v-btn>

    <v-btn outlined class="mr-3" color="secondary">Buy</v-btn>

  </v-app-bar>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import config from '@/config';

  export default {
    name: 'Header',
    data: () => ({
      config,
      searchCollapse: true,
      buttons: [
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/flatlogic'
        },
        {
          icon: 'mdi-basketball',
          link: 'https://dribbble.com/flatlogic'
        },
        {
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/flatlogic'
        },
        {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/flatlogiccom/'
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/company/flatlogic/'
        },
        {
          icon: 'mdi-github',
          link: 'https://github.com/flatlogic'
        },
      ]
    }),
    computed: {
      ...mapState('layout', { drawer: state => state.drawer }),
      DRAWER_STATE :{
        get() {
          return this.drawer
        },
      }
    },
    methods: {
      ...mapActions('layout', [ 'TOGGLE_DRAWER']),
    }
  };
</script>

<style src="./DocHeader.scss" lang="scss"></style>
