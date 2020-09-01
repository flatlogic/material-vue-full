<template>
  <div class="helper text-center primary">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        left
        offset-x
        nudge-left="15"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          size="28"
          color="white"
          v-bind="attrs"
          v-on="on"
        >
          mdi-cog
        </v-icon>
      </template>

      <v-card class="helper-card px-0">
        <v-list>
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title class="text-center">Color Theme</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
          <v-list-item>
            <v-list-item-action class="justify-center mr-0" style="width: 100%">
              <v-radio-group v-model="radios">
                <v-radio color="primary" value="radio-1" class="mb-0 mr-5" @change="$vuetify.theme.themes.light.primary = config.light.primary"></v-radio>
                <v-radio color="secondary" value="radio-2" class="mb-0 mr-5" @change="$vuetify.theme.themes.light.primary = config.light.secondary"></v-radio>
                <v-radio color="success" value="radio-3" class="mb-0" @change="$vuetify.theme.themes.light.primary = config.light.success"></v-radio>
              </v-radio-group>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center">Dark Mode</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action class="justify-center mr-0" style="width: 100%">
              <v-switch v-model="$vuetify.theme.dark" color="secondary"></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-col cols="12">
            <v-btn color="success" block @click="menu = false" class="mb-2">Buy</v-btn>
            <v-btn block color="primary" @click="menu = false">Documentation</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import config from '../../config';


export default {
  name: 'Helper',
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    config,
    radios: 'radio-1',
    mode: false,
  }),
  computed: {
    ...mapState(['drawer']),
    DRAWER_STATE :{
      get() {
        return this.drawer
      },
    }
  },
  methods: {
    ...mapActions([ 'TOGGLE_DRAWER' ]),
    logOut: function () {
      window.localStorage.setItem('authenticated', false);
      this.$router.push('/login');
    }
  }
};
</script>

<style src="./Helper.scss" lang="scss"></style>
