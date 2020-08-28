<template>
  <v-container fluid>
    <div class="profile-page">
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
                      <p class="user-name text-h4">Julee Cruise</p>
                      <p class="subtitle-2 ma-0">Product Designer</p>
                      <a class="body-1">NewGenerArt.com</a>
                      <div class="mt-5">
                        <v-chip v-for="(chip, i) in chips"
                          :key="i"
                          small
                          :style=bgStyle(chip.bgColor)
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
              <v-card class="media-card mx-1" min-height="296">
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
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/posts.svg" height="30" width="30"></v-img>
                      <p class="media-title text-h6 mb-n2">198</p>
                      <p class="media-subtitle">Posts</p>
                    </v-col>
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/projects.svg" height="30" width="30"></v-img>
                      <p class="media-title text-h6 mb-n2">554</p>
                      <p class="media-subtitle">Projects</p>
                    </v-col>
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/followers.svg" height="30" width="30"></v-img>
                      <p class="media-title text-h6 mb-n2">12.8k</p>
                      <p class="media-subtitle">Followers</p>
                    </v-col>
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/following.svg" height="30" width="30"></v-img>
                      <p class="media-title text-h6 mb-n2">1.1k</p>
                      <p class="media-subtitle">Following</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card class="pie-card mx-1" min-height="296">
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
                        height="194"
                        type="donut"
                        :options="apexPie.options"
                        :series="apexPie.series">
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
              <v-card class="text-card mx-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Top 5 react native starter kits</p>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-row>
                    <v-col>
                      <v-img src="@/assets/img/user/profile/article-logo.png"></v-img>
                    </v-col>
                    <v-col>
                      <p class="article-writer">Nastassia Ovchinnikova</p>
                      <p class="article-text">React Native allows us to create a boilerplate that have been crafted for both platforms.
                        The ability to create an app both for Android and iOS...</p>
                      <p class="article-info"> 11 Feb 2019 | 5 min read</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md=7 cols=12>
          <v-row>
            <v-col cols="12">
              <v-card class="mx-1" min-height="282">
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
                        class="pt-1"
                    >
                      <v-row justify="space-around" class="flex-nowrap overflow-hidden pa-4">
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
            <v-col cols="12" md="7">
              <v-card class="tasks-card mx-1">
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
                  <v-row no-gutters>
                    <v-tabs color="secondary">
                      <v-tabs-slider></v-tabs-slider>

                      <v-tab
                          v-for="(tab, i) in taskTabs"
                          :key="i"
                          :href="'#tab-' + tab.tabLink"
                      >
                        {{ tab.tabName }}
                      </v-tab>

                      <v-tab-item
                        value="tab-today"
                        class="pt-1"
                      >
                        <v-row class="flex-column flex-nowrap overflow-hidden pr-0 "
                          v-for="(task, i) in tasks.tasksToday"
                          :key="i"
                          style="width: 100%; cursor:pointer;"
                          :class="{ done:task.done }"
                          @click="$set(task, 'done', !task.done)"
                           >
                          <v-col
                              cols="12"
                              class="d-flex justify-space-between align-center pr-0 mr-0">
                            <div class="d-flex">
                              <p
                                class="task-time mb-0 "
                                style="font-size: 10px"
                              >{{ task.time }}</p>
                              <v-icon class="task-circle ml-1" :color="task.color">mdi-circle-medium</v-icon>
                              <p class="task-text mb-0 font-weight-medium" style="color: #4a4a4a; line-height: 25px;">{{ task.task }}</p>
                            </div>
                            <div>
                              <v-btn icon>
                                <v-icon color="textColor" class="right">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                          <v-divider></v-divider>
                        </v-row>
                      </v-tab-item>
                      <v-tab-item
                        value="tab-week"
                        class="pt-1"
                      >
                        <v-row class="flex-column flex-nowrap overflow-hidden pr-0 "
                         v-for="(task, i) in tasks.tasksWeek"
                         :key="i * 10"
                         style="width: 100%; cursor:pointer;"
                         :class="{ done:task.done }"
                         @click="$set(task, 'done', !task.done)"
                        >
                          <v-col
                              cols="12"
                              class="d-flex justify-space-between align-center pr-0 mr-0">
                            <div class="d-flex">
                              <p
                                  class="task-time mb-0 "
                                  style="font-size: 10px"
                              >{{ task.time }}</p>
                              <v-icon class="task-circle ml-1" :color="task.color">mdi-circle-medium</v-icon>
                              <p class="task-text mb-0 font-weight-medium" style="color: #4a4a4a; line-height: 25px;">{{ task.task }}</p>
                            </div>
                            <div>
                              <v-btn icon>
                                <v-icon color="textColor" class="right">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                          <v-divider></v-divider>
                        </v-row>
                      </v-tab-item>
                      <v-tab-item
                        value="tab-month"
                        class="pt-1"
                      >
                        <v-row class="flex-column flex-nowrap overflow-hidden pr-0 "
                         v-for="(task, i) in tasks.tasksMonth"
                         :key="i * 100"
                         style="width: 100%; cursor:pointer;"
                         :class="{ done:task.done }"
                         @click="$set(task, 'done', !task.done)"
                        >
                          <v-col
                              cols="12"
                              class="d-flex justify-space-between align-center pr-0 mr-0">
                            <div class="d-flex">
                              <p
                                  class="task-time mb-0 "
                                  style="font-size: 10px"
                              >{{ task.time }}</p>
                              <v-icon class="task-circle ml-1" :color="task.color">mdi-circle-medium</v-icon>
                              <p class="task-text mb-0 font-weight-medium" style="color: #4a4a4a; line-height: 25px;">{{ task.task }}</p>
                            </div>
                            <div>
                              <v-btn icon>
                                <v-icon color="textColor" class="right">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                          <v-divider></v-divider>
                        </v-row>
                      </v-tab-item>
                    </v-tabs>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="5">
              <v-row no-gutters>
                <v-col cols="12" class="mb-6">
                  <v-card class="calendar-card mx-1">
                    <v-col>
                      <v-sheet height="64">
                        <v-toolbar flat color="white">
                          <v-btn fab text small @click="prev">
                            <v-icon class="grey--text" >mdi-chevron-left</v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-toolbar-title
                              v-if="$refs.calendar"
                              class="font-weight-bold"
                              style="font-size: 1rem; color: #6E6E6E"
                          >
                            {{ $refs.calendar.title }}
                          </v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-btn fab text small @click="next">
                            <v-icon class="grey--text">mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-toolbar>
                      </v-sheet>
                      <v-sheet>
                        <v-calendar
                            ref="calendar"
                            v-model="focus"
                            hide-header
                            locale="en"
                            color="primary"
                            type="month"
                        ></v-calendar>
                      </v-sheet>
                    </v-col>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mb-6">
                  <v-card class="view-card mx-1">
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
                      <v-row no-gutters>
                        <v-col cols="4" class="my-auto">
                          <p class="views-value text-h5 mb-0">7,156</p>
                          <p class="views-percent success--text mb-4">7.2%</p>
                          <v-btn
                            color="primary"
                            outlined
                            small
                            class="text-capitalize"
                          >See More</v-btn>
                        </v-col>
                        <v-col cols="6" offset="2" class="d-flex align-end">
                          <ApexChart v-if="apexLoading"  height="80" type="area" :options="apexArea1.options" :series="apexArea1.series"></ApexChart>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mb-6">
                  <v-card class="primary mx-1" height="80">
                    <v-row no-gutters align="center" justify="center" class="pa-5 pt-0">
                      <v-col cols="12" class="d-flex align-center" style="height: 80px">
                        <div class="image-wrapper" style="height: 36px">
                          <v-img
                            src="@/assets/img/user/profile/update-icon.svg"
                            contain
                          ></v-img>
                        </div>
                        <p class="upd-text white--text mb-0 ml-3">Updates</p>
                        <v-spacer></v-spacer>
                        <v-btn
                          outlined
                          class=" white--text text-capitalize"
                          >Detail</v-btn>
                      </v-col>
                    </v-row>
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
      taskTabs: [
        {
          tabLink: 'today',
          tabName: 'Today',
        },
        {
          tabLink: 'week',
          tabName: 'This Week',
        },
        {
          tabLink: 'month',
          tabName: 'This Month',
        },
      ],
      tasks: {
        tasksToday: [
          {
            time: '10:21',
            task: 'Call conference with a New Client',
            color: 'warning',
            done: true
          },
          {
            time: '11:30',
            task: 'Presentation Demo Ecological Project',
            color: 'primary',
            done: true
          },
          {
            time: '12:30',
            task: 'Call with PR Manager',
            color: 'warning',
            done: false
          },
          {
            time: '14:00',
            task: 'Interview with a new UI/UX',
            color: 'success',
            done: false
          },
          {
            time: '15:00',
            task: 'Call conference with a New Client',
            color: 'secondary',
            done: false
          },
          {
            time: '15:45',
            task: 'Presentation Demo Ecological Project',
            color: 'warning',
            done: false
          },
          {
            time: '16:00',
            task: 'Interview with a new UI/UX',
            color: 'primary',
            done: false
          },
          {
            time: '17:00',
            task: 'Call conference with a New Client',
            color: 'warning',
            done: false
          }
        ],
        tasksWeek: [
          {
            time: '10:21',
            task: 'Call conference with a New Client',
            color: 'warning',
            done: true
          },
          {
            time: '11:30',
            task: 'Presentation Demo Ecological Project',
            color: 'primary',
            done: true
          },
          {
            time: '12:30',
            task: 'Call with PR Manager',
            color: 'warning',
            done: false
          },
          {
            time: '14:00',
            task: 'Interview with a new UI/UX',
            color: 'success',
            done: false
          },
          {
            time: '15:00',
            task: 'Call conference with a New Client',
            color: 'secondary',
            done: false
          },
          {
            time: '15:45',
            task: 'Presentation Demo Ecological Project',
            color: 'warning',
            done: false
          },
          {
            time: '16:00',
            task: 'Interview with a new UI/UX',
            color: 'primary',
            done: false
          },
          {
            time: '17:00',
            task: 'Call conference with a New Client',
            color: 'warning',
            done: false
          }
        ],
        tasksMonth: [
          {
            time: '10:21',
            task: 'Call conference with a New Client',
            color: 'warning',
            done: true
          },
          {
            time: '11:30',
            task: 'Presentation Demo Ecological Project',
            color: 'primary',
            done: true
          },
          {
            time: '12:30',
            task: 'Call with PR Manager',
            color: 'warning',
            done: false
          },
          {
            time: '14:00',
            task: 'Interview with a new UI/UX',
            color: 'success',
            done: false
          },
          {
            time: '15:00',
            task: 'Call conference with a New Client',
            color: 'secondary',
            done: false
          },
          {
            time: '15:45',
            task: 'Presentation Demo Ecological Project',
            color: 'warning',
            done: false
          },
          {
            time: '16:00',
            task: 'Interview with a new UI/UX',
            color: 'primary',
            done: false
          },
          {
            time: '17:00',
            task: 'Call conference with a New Client',
            color: 'warning',
            done: false
          }
        ],
      },

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
        series: this.generatePieSeries()
      },
      apexArea1: {
        options: {
          chart: {
            id: 'apexAreaFirst',
            sparkline: {
              enabled: true
            },
          },
          colors: [config.light.secondary],
          fill: {
            type: 'solid',
            opacity: 0.3,
          },
          stroke: {
            width: 2,
            curve: 'smooth'
          },
        },
        series: [
          {
            data: [50, 56, 52, 51, 52, 55, 53]
          }
        ],
      },
      focus: '',
      selected: []
    }
  },
  methods: {
    bgStyle: function(color) {
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
