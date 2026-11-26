<template>
  <div class="helper text-center bg-primary">
    <v-menu location="start"
      v-model="menu"
      :close-on-content-click="false"
      tile
      offset="15"
    >
      <template #activator="{ props }">
        <v-icon size="28" color="white" v-bind="props">
          mdi-cog
        </v-icon>
      </template>

      <v-card class="helper-card px-0">
        <v-list>
          <v-list-item>
            <div>
              <v-list-item-title class="text-center"
                >Color Theme</v-list-item-title
              >
            </div>
          </v-list-item>
          <v-list-item>
            <div class="justify-center mr-0" style="width: 100%">
              <v-radio-group v-model="radios">
                <v-radio
                  color="primary"
                  value="radio-1"
                  class="mb-0 mr-5"
                  @click="setPrimary(config.light.primary)"
                ></v-radio>
                <v-radio
                  color="secondary"
                  value="radio-2"
                  class="mb-0 mr-5"
                  @click="setPrimary(config.light.secondary)"
                ></v-radio>
                <v-radio
                  color="success"
                  value="radio-3"
                  class="mb-0"
                  @click="setPrimary(config.light.success)"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <div>
              <v-list-item-title class="text-center"
                >Dark Mode</v-list-item-title
              >
            </div>
          </v-list-item>
          <v-list-item>
            <div class="justify-center mr-0" style="width: 100%">
              <v-switch v-model="switcher" color="secondary"></v-switch>
            </div>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-col cols="12">
            <v-btn color="successConst text-white" block @click="menu = false" class="button-shadow mb-2" href="https://flatlogic.com/templates/vue">Buy</v-btn>
            <v-btn color="primaryConst text-white" block @click="menu = false" class="button-shadow mb-2" to="/documentation/overview">Documentation</v-btn>
            <v-btn color="info text-white" block @click="menu = false" class="button-shadow" href="https://flatlogic.com/forum">Support</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  import config from '../../config';
  import { useTheme } from 'vuetify';
  import { mapActions } from 'vuex';

  export default {
    name: 'Helper',
    setup() {
      const theme = useTheme();
      return {
        selectPrimary(color) { theme.themes.value.light.colors.primary = color; },
        selectMode(dark) { theme.change(dark ? 'dark' : 'light'); },
      };
    },
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
      setPrimary(color) {
        this.switcher = false;
        this.selectPrimary(color);
      },
    },
    watch: {
      switcher(dark) {
        this.selectMode(dark);
        if (dark !== this.$store.state.layout.darkTheme) this.toggleDarkTheme();
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

  .helper-card :deep(.v-selection-control-group) {
    flex-direction: row;
  }

  .v-menu__content.v-theme--dark {
    box-shadow: none !important;
  }
</style>
