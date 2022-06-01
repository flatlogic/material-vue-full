<template>
  <div class="helper text-center primary">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      left
      tile
      offset-x
      nudge-left="15"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon size="28" color="white" v-bind="attrs" v-on="on">
          mdi-cog
        </v-icon>
      </template>

      <v-card class="helper-card px-0">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center"
                >Color Theme</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action class="justify-center mr-0" style="width: 100%">
              <v-radio-group v-model="radios">
                <v-radio
                  color="primary"
                  value="radio-1"
                  class="mb-0 mr-5"
                  @click="mainTheme"
                ></v-radio>
                <v-radio
                  color="secondary"
                  value="radio-2"
                  class="mb-0 mr-5"
                  @click="secondTheme"
                ></v-radio>
                <v-radio
                  color="success"
                  value="radio-3"
                  class="mb-0"
                  @click="thirdTheme"
                ></v-radio>
              </v-radio-group>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-center"
                >Dark Mode</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action class="justify-center mr-0" style="width: 100%">
              <v-switch v-model="switcher" color="secondary"></v-switch>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  import config from '../../config';
  import { mapActions } from 'vuex';

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
      switcher: false,
    }),
    methods: {
      ...mapActions('layout', ['toggleDarkTheme']),
      mainTheme() {
        if (this.$vuetify.theme.dark) {
          this.toggleDarkTheme();
          this.$vuetify.theme.dark = false;
          this.$vuetify.theme.themes.light.primary = config.light.primary;
          this.switcher = false;
        } else {
          this.$vuetify.theme.themes.light.primary = this.config.light.primary;
        }
      },
      secondTheme() {
        if (this.$vuetify.theme.dark) {
          this.toggleDarkTheme();
          this.$vuetify.theme.dark = false;
          this.$vuetify.theme.themes.light.primary = config.light.secondary;
          this.switcher = false;
        } else {
          this.$vuetify.theme.themes.light.primary =
            this.config.light.secondary;
        }
      },
      thirdTheme() {
        if (this.$vuetify.theme.dark) {
          this.toggleDarkTheme();
          this.$vuetify.theme.dark = false;
          this.$vuetify.theme.themes.light.primary = config.light.success;
          this.switcher = false;
        } else {
          this.$vuetify.theme.themes.light.primary = this.config.light.success;
        }
      },
    },
    watch: {
      switcher(newValue) {
        this.toggleDarkTheme();
        this.$vuetify.theme.dark = newValue;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .helper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 120px;
    right: 0;
    width: 56px;
    height: 56px;
    border-radius: 50% 0 0 50%;
    border-right: none;

    .v-icon:focus::after {
      opacity: 0;
    }
  }

  .helper-card::v-deep .v-input--radio-group__input {
    flex-direction: row;
  }

  .v-menu__content.theme--dark {
    box-shadow: none !important;
  }
</style>
