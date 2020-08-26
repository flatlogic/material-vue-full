<template>
  <v-container fluid>
    <div class="profile-page">
      <v-row no-gutters class="d-flex justify-space-between mt-14 mb-6">
        <h1 class="page-title">Profile</h1>
      </v-row>
      <v-row>
        <v-col md=5 cols=12>
          <v-row>
            <v-col cols="12">
              <v-card class="user-card mx-1">
                <v-card-text class="pa-5 fill-height">
                  <v-row no-gutters class="fill-height">
                    <v-col cols="6" class="d-flex justify-center align-center flex-column">
                      <div
                          class="avatar-wrapper">
                        <v-img
                            class="user-avatar"
                            contain
                            :height="$vuetify.breakpoint.mdAndDown ? '140px' : '164px'"
                            :width="$vuetify.breakpoint.mdAndDown ? '140px' : '164px'"
                            src="@/assets/img/user/profile/photo.png"></v-img>
                      </div>
                      <v-chip
                          small
                          class="mr-2 mt-4"
                          color="error"
                      >Pro</v-chip>
                    </v-col>
                    <v-col cols="6" class="pl-2">
                      <p class="text-h4">Julee Cruise</p>
                      <p class="subtitle-2 ma-0">Product Designer</p>
                      <a class="body-1">NewGenerArt.com</a>
                      <div class="mt-5">
                        <v-chip v-for="(chip, i) in chips"
                          :key="i"
                          small
                          :style=tdCssStyle(chip.bgColor)
                          :class="chip.color + '--text font-weight-bold mr-2 my-1'"
                          label
                        >{{ chip.title }}</v-chip>
                      </div>
                      <div class="mt-5">
                        <v-btn v-for="(btn, i) in buttons" :key="i" icon>
                          <v-icon :color="config.light.textColor">{{ btn }}</v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card class="mx-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Media</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                          v-for="(item, i) in mock.menu"
                          :key="i"
                          @click="() => {}"
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-row no-gutters class="pb-6">

                  </v-row>

                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card class="mx-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Projects</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                          v-for="(item, i) in mock.menu"
                          :key="i"
                          @click="() => {}"
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-row no-gutters class="pb-6">

                  </v-row>

                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card class="mx-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Top 5 react native starter kits</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                          v-for="(item, i) in mock.menu"
                          :key="i"
                          @click="() => {}"
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-row no-gutters class="pb-6">

                  </v-row>

                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="7">
          <v-row>
            <v-col cols="12">
              <v-card class="mx-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Files</p>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-tabs color="secondary">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab
                        :href="`#tab-work`"
                    >
                      Work
                    </v-tab>
                    <v-tab
                        :href="`#tab-private`"
                    >
                      Private
                    </v-tab>
                    <v-tab
                        :href="`#tab-social`"
                    >
                      Social
                    </v-tab>

                    <v-tab-item
                        :value="'tab-work'"
                    >
                      <v-row class="overflow-auto mt-4">
                        <v-img src="@/assets/img/user/profile/folder-blue.svg" width="141" height="106" contain>
                          <p>UX</p>
                          <p>178 files</p>
                        </v-img>
                        <v-img src="@/assets/img/user/profile/folder-pink.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-green.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-yellow.svg" width="141" height="106" contain></v-img>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item
                        :value="'tab-private'"
                    >
                      <v-row class="mt-4">
                        <v-img src="@/assets/img/user/profile/folder-blue.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-pink.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-green.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-yellow.svg" width="141" height="106" contain></v-img>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item
                        :value="'tab-social'"
                    >
                      <v-row class="mt-4">
                        <v-img src="@/assets/img/user/profile/folder-blue.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-pink.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-green.svg" width="141" height="106" contain></v-img>
                        <v-img src="@/assets/img/user/profile/folder-yellow.svg" width="141" height="106" contain></v-img>
                      </v-row>
                    </v-tab-item>
                  </v-tabs>

                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mx-1" height="500">
                <v-card-title class="pa-5 pb-3">
                  <p>Tasks</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon color="textColor">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                          v-for="(item, i) in mock.menu"
                          :key="i"
                          @click="() => {}"
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-row no-gutters class="pb-6">

                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-row no-gutters>
                <v-col cols="12" class="mb-6">
                  <v-card class="mx-1" height="200">
                    <v-card-title class="pa-5 pb-3">
                      <p>Calendar</p>
                      <v-spacer></v-spacer>
                      <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              icon
                              v-bind="attrs"
                              v-on="on"
                          >
                            <v-icon color="textColor">mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                              v-for="(item, i) in mock.menu"
                              :key="i"
                              @click="() => {}"
                          >
                            <v-list-item-title>{{ item }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-card-title>
                    <v-card-text class="pa-5 pt-0">
                      <v-row no-gutters class="pb-6">

                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mb-6">
                  <v-card class="mx-1" height="200">
                    <v-card-title class="pa-5 pb-3">
                      <p>Views</p>
                      <v-spacer></v-spacer>
                      <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              icon
                              v-bind="attrs"
                              v-on="on"
                          >
                            <v-icon color="textColor">mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                              v-for="(item, i) in mock.menu"
                              :key="i"
                              @click="() => {}"
                          >
                            <v-list-item-title>{{ item }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-card-title>
                    <v-card-text class="pa-5 pt-0">
                      <v-row no-gutters class="pb-6">

                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>


<script>
import mock from './mock'
import config from "@/config"

export default {
  name: 'Profile',
  data() {
    return {
      mock,
      config,
      chips: [
        {
          title: 'UI/UX',
          color: 'primary',
          bgColor: [83, 103, 254]
        },
        {
          title: 'Art',
          color: 'warning',
          bgColor: [255, 194, 96]
        },
        {
          title: 'Design',
          color: 'secondary',
          bgColor: [255, 92, 147]
        },
        {
          title: 'Illustration',
          color: 'warning',
          bgColor: [255, 194, 96]
        },
        {
          title: 'Mobile',
          color: 'success',
          bgColor: [60, 212, 160]
        },
      ],
      buttons: ['mdi-facebook', 'mdi-basketball', 'mdi-instagram', 'mdi-github', 'mdi-twitter' ]

    }
  },
  methods: {
    tdCssStyle: function(color) {
      const [r, g, b] = color;
      return {
        backgroundColor: `rgba(${r},${g},${b}, 0.2)`
      };
    }
  }
}
</script>

<style src="./Profile.scss" lang="scss"/>
