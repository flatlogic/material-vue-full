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
                  <v-row no-gutters class="pb-0">
                    <v-col cols="12">
                      <ApexChart
                        v-if="apexLoading"
                        height="250"
                        type="donut"
                        :options="apexPie.options"
                        :series="generatePieSeries()">
                      </ApexChart>
                    </v-col>
                    <v-col cols="12" class="d-flex flex-column align-end mt-3">
                      <v-btn
                        color="primary"
                        outlined
                      >Detail</v-btn>
                    </v-col>
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
                        v-for="(tab, i) in tabs"
                        :key="i"
                        :href="'#tab-' + tab.tabName.toLocaleLowerCase()"
                    >
                      {{ tab.tabName }}
                    </v-tab>

                    <v-tab-item
                        v-for="(tab, i) in tabs"
                        :key="i"
                        :value="'tab-' + tab.tabName.toLocaleLowerCase()"
                    >
                      <v-row justify="space-between" class="flex-nowrap overflow-hidden pa-4">
                        <div
                             v-for="(img, i) in images"
                             :key="i">
                          <v-img
                              :src="img.src"
                              width="141" height="106" contain
                              class="folder-image mr-3"
                          >
                            <p class="folder-title"> {{ img.title }} </p>
                            <p class="folder-subtitle-1"> {{img.subtitle}} </p>
                          </v-img>
                        </div>
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
                  <v-card class="mx-1">

                    <v-col>
                      <v-sheet height="64">
                        <v-toolbar flat color="white">
                          <v-btn fab text small color="grey darken-2" @click="prev">
                            <v-icon small>mdi-chevron-left</v-icon>
                          </v-btn>
                          <v-btn fab text small color="grey darken-2" @click="next">
                            <v-icon small>mdi-chevron-right</v-icon>
                          </v-btn>
                          <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                          </v-toolbar-title>
                          <v-spacer></v-spacer>
                        </v-toolbar>
                      </v-sheet>
                      <v-sheet height="600">
                        <v-calendar
                            ref="calendar"
                            v-model="focus"
                            color="primary"
                            type="month"
                        ></v-calendar>
                        <v-menu

                            offset-x
                        >
                          <v-card
                              color="grey lighten-4"
                              min-width="350px"
                              flat
                          >
                            <v-toolbar
                                dark
                            >
                              <v-btn icon>
                                <v-icon>mdi-pencil</v-icon>
                              </v-btn>

                              <v-spacer></v-spacer>
                              <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                              </v-btn>
                              <v-btn icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </v-toolbar>
                            <v-card-text>

                            </v-card-text>
                            <v-card-actions>
                              <v-btn
                                  text
                                  color="secondary"
                              >
                                Cancel
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-menu>
                      </v-sheet>
                    </v-col>
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
import ApexChart from 'vue-apexcharts'

export default {
  name: 'Profile',
  components: {
    ApexChart
  },
  data() {
    return {
      mock,
      config,
      apexLoading: false,
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
      buttons: ['mdi-facebook', 'mdi-basketball', 'mdi-instagram', 'mdi-github', 'mdi-twitter' ],
      tabs: [
        {
          tabName: 'Work',
        },
        {
          tabName: 'Private',
        },
        {
          tabName: 'Social',

        },
      ],
      images: [
        {
          src: require('@/assets/img/user/profile/folder-blue.svg'),
          title: 'UX',
          subtitle: '178 files'
        },
        {
          src: require('@/assets/img/user/profile/folder-pink.svg'),
          title: 'Design',
          subtitle: '154 files'
        },
        {
          src: require('@/assets/img/user/profile/folder-yellow.svg'),
          title: 'Mobile',
          subtitle: '98 files'
        },
        {
          src: require('@/assets/img/user/profile/folder-green.svg'),
          title: 'Illustration',
          subtitle: '68 files'
        },
      ],
      apexPie: {
        options: {
          dataLabels: {
            enabled: false
          },
          colors: [config.light.primary, config.light.secondary, config.light.success, config.light.warning],
          labels: ["New", "Progress", "Completed", "Canceled"],
          legend: {
            position: 'bottom'
          },
        },

      },
      focus: '',
    }
  },
  methods: {
    tdCssStyle: function(color) {
      const [r, g, b] = color;
      return {
        backgroundColor: `rgba(${r},${g},${b}, 0.2)`
      };
    },
    generatePieSeries() {
      let series = [];
      for (let i = 0; i < 4; i++) {
        let y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
        series.push(y)
      }
      return series;
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
  },
  mounted() {
    setTimeout(() => {
      this.apexLoading = true
    })
  }
}
</script>

<style src="./Profile.scss" lang="scss"/>
