<template>
  <v-container fluid class="px-0 px-md-1">
    <div class="profile-page">
      <v-row>
        <v-col md=5 sm="6" cols=12>
          <v-row>
            <v-col cols="12">
              <v-card class="user-card ma-1" min-height="282">
                <v-card-text class="pa-5 pt-9 fill-height">
                  <v-row no-gutters class="fill-height">
                    <v-col cols="12" sm="5" xl="6" class="d-flex justify-center align-center flex-column">
                      <div
                        class="avatar-wrapper">
                        <v-img
                          class="user-avatar"
                          contain
                          src="@/assets/img/user/profile/photo.png"></v-img>
                      </div>
                      <v-chip
                        small
                        class="mr-2 mt-4 mb-4 mb-sm-0"
                        color="error"
                      >Pro</v-chip>
                    </v-col>
                    <v-col cols="12" sm="7" xl="6" class="pl-0 pl-sm-4 d-flex flex-column align-center align-sm-start"  >
                      <p class="user-name greyMedium--text font-weight-regular">Julee Cruise</p>
                      <p class="user-work greyTint--text ma-0">Product Designer</p>
                      <a class="body-1">Flatlogic.com</a>
                      <div class="d-flex justify-center justify-sm-start flex-wrap mt-5">
                        <v-chip v-for="(chip, i) in mock.chips"
                          :key="i"
                          small
                          :style=bgStyle(chip.bgColor)
                          :class="chip.color + '--text font-weight-bold mr-2 mr-lg-1 mr-lg-2 my-1 px-2'"
                          label
                        >{{ chip.title }}</v-chip>
                      </div>
                      <div class="mt-5">
                        <v-btn v-for="(btn, i) in mock.buttons"
                           :key="i"
                           icon
                           class="mr-0 mr-sm-n2 mr-lg-0"
                        >
                          <v-icon color="greyTint">{{ btn }}</v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="media-card ma-1" min-height="296">
                <v-card-title class="pa-5 pb-3">
                  <p>Media</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                        class="main-chart-select greyBold--text"
                        v-model="mock.sel"
                        :value="mock.select[0]"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        flat
                        single-line
                        hide-details
                        :items="mock.select"
                      ></v-select>
                    </template>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-5 pb-0 pt-5">
                  <v-row no-gutters class="pb-6">
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/posts.svg" height="30" width="30"></v-img>
                      <p class="greyBold--text text-h6 mb-n2">198</p>
                      <p class="media-subtitle">Posts</p>
                    </v-col>
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/projects.svg" height="30" width="30"></v-img>
                      <p class="greyBold--text text-h6 mb-n2">554</p>
                      <p class="media-subtitle">Projects</p>
                    </v-col>
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/followers.svg" height="30" width="30"></v-img>
                      <p class="greyBold--text text-h6 mb-n2">12.8k</p>
                      <p class="media-subtitle">Followers</p>
                    </v-col>
                    <v-col cols="6" class="d-flex align-center flex-column">
                      <v-img src="@/assets/img/user/profile/media/following.svg" height="30" width="30"></v-img>
                      <p class="greyBold--text text-h6 mb-n2">1.1k</p>
                      <p class="media-subtitle">Following</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="pie-card ma-1" min-height="296">
                <v-card-title class="pa-5 pb-3">
                  <p>Projects</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                        class="main-chart-select"
                        v-model="mock.sel1"
                        :value="mock.select[0]"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        flat
                        single-line
                        hide-details
                        :items="mock.select"
                      ></v-select>
                    </template>
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
                        color="primaryConst"
                        outlined
                      >Detail</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="pb-0 pb-sm-3">
              <v-card class="article-card ma-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Top 5 react native starter kits</p>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-row>
                    <v-col cols="5">
                      <v-img src="@/assets/img/user/profile/article-logo.png"></v-img>
                    </v-col>
                    <v-col cols="7">
                      <p class="article-writer greyTint--text">Nastassia Ovchinnikova</p>
                      <p class="article-text greyBold--text">React Native allows us to create a boilerplate that have been crafted for both platforms.
                        The ability to create an app both for Android and iOS...</p>
                      <p class="article-info greyTint--text"> 11 Feb 2019 | 5 min read</p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md=7 sm="6" cols=12 class="pt-0 pt-sm-3">
          <v-row>
            <v-col cols="12">
              <v-card class="folder-card ma-1" min-height="282">
                <v-card-title class="pa-5 pb-3">
                  <p>Files</p>
                </v-card-title>
                <v-card-text class="pa-5 pt-0">
                  <v-tabs color="secondary">
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab
                      v-for="(tab, i) in mock.tabs"
                      class="text-capitalize font-weight-regular"
                      :key="i"
                      :href="'#tab-' + tab.tabName.toLocaleLowerCase()">
                      {{ tab.tabName }}
                    </v-tab>
                    <v-tab-item
                      v-for="(tab, i) in mock.tabs"
                      :key="i"
                      :value="'tab-' + tab.tabName.toLocaleLowerCase()"
                      class="pb-0 pb-sm-3 pb-lg-0"
                    >
                      <v-divider></v-divider>
                      <v-row justify-xl="space-around" justify="start"  class="d-flex flex-nowrap overflow-x-auto pa-4 pt-5">
                        <div
                           v-for="(img, i) in mock.images"
                           :key="i">
                          <v-img
                            :src="$vuetify.theme.dark ? img.srcDark : img.src"
                            width="141" height="106" contain
                            class="folder-image mr-3"
                          >
                            <p class="folder-title"> {{ img.title }} </p>
                            <p class="folder-subtitle-1 font-weight-medium"> {{img.subtitle}} </p>
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
              <v-card class="tasks-card ma-1">
                <v-card-title class="pa-5 pb-3">
                  <p>Tasks</p>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                        class="main-chart-select font-weight-regular greyMedium--text"
                        v-model="mock.sel2"
                        :value="mock.taskSelect[0]"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        flat
                        single-line
                        hide-details
                        :items="mock.taskSelect"
                      ></v-select>
                    </template>
                  </v-menu>
                </v-card-title>
                <v-card-text class="pa-5 pt-0 pb-2">
                  <v-row no-gutters>
                    <v-tabs color="secondary">
                      <v-tabs-slider></v-tabs-slider>
                      <v-tab
                        v-for="(tab, i) in mock.taskTabs"
                        :key="i"
                        :href="'#tab-' + tab.tabLink"
                        class="text-capitalize font-weight-regular">
                        {{ tab.tabName }}
                      </v-tab>
                      <v-tab-item
                        value="tab-today"
                        class="pt-0">
                        <v-row no-gutters class="flex-column flex-nowrap overflow-hidden pr-0"
                          v-for="(task, i) in mock.tasks.tasksToday"
                          :key="i"
                          style="width: 100%; cursor:pointer;"
                          :class="{ done:task.done }">
                          <v-divider></v-divider>
                          <v-col
                            cols="12"
                            class="d-flex justify-space-between align-center py-3">
                            <div class="d-flex align-center" @click="$set(task, 'done', !task.done)">
                              <p
                                class="task-time mb-0 "
                                style="font-size: 10px">{{ task.time }}</p>
                              <v-icon class="task-circle ml-1" :color="task.color">mdi-circle-medium</v-icon>
                              <p class="task-text greyBold--text mb-0 font-weight-medium" style="line-height: 25px;">{{ task.task }}</p>
                            </div>
                            <v-menu>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  icon
                                  v-bind="attrs"
                                  v-on="on">
                                  <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                                </v-btn>
                              </template>
                              <v-list>
                                <v-list-item
                                  v-for="(item, i) in mock.taskMenu"
                                  :key="i"
                                  @click="() => {}">
                                  <v-list-item-title>{{ item }}</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </v-col>
                        </v-row>
                      </v-tab-item>
                      <v-tab-item
                        value="tab-week"
                        class="pt-0">
                        <v-row no-gutters class="flex-column flex-nowrap overflow-hidden pr-0"
                         v-for="(task, i) in mock.tasks.tasksWeek"
                         :key="i * 10"
                         style="width: 100%; cursor:pointer;"
                         :class="{ done:task.done }"
                         @click="$set(task, 'done', !task.done)">
                          <v-divider></v-divider>
                          <v-col
                            cols="12"
                            class="d-flex justify-space-between align-center py-3">
                            <div class="d-flex align-center">
                              <p
                                class="task-time mb-0 "
                                style="font-size: 10px">{{ task.time }}</p>
                              <v-icon class="task-circle ml-1" :color="task.color">mdi-circle-medium</v-icon>
                              <p class="task-text greyBold--text mb-0 font-weight-medium" style="line-height: 25px;">{{ task.task }}</p>
                            </div>
                            <div>
                              <v-btn icon>
                                <v-icon color="greyTint" class="right">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </v-tab-item>
                      <v-tab-item
                        value="tab-month"
                        class="pt-0">
                        <v-row no-gutters class="flex-column flex-nowrap overflow-hidden"
                         v-for="(task, i) in mock.tasks.tasksWeek"
                         :key="i * 100"
                         style="width: 100%; cursor:pointer;"
                         :class="{ done:task.done }"
                         @click="$set(task, 'done', !task.done)">
                          <v-divider></v-divider>
                          <v-col
                              cols="12"
                              class="d-flex justify-space-between align-center py-3">
                            <div class="d-flex align-center">
                              <p
                                class="task-time mb-0"
                                style="font-size: 10px"
                              >{{ task.time }}</p>
                              <v-icon class="task-circle ml-1" :color="task.color">mdi-circle-medium</v-icon>
                              <p class="task-text greyBold--text mb-0 font-weight-medium">{{ task.task }}</p>
                            </div>
                            <div>
                              <v-btn icon>
                                <v-icon color="greyTint" class="right">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </div>
                          </v-col>

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
                  <v-card class="calendar-card ma-1">
                    <v-col>
                      <v-date-picker
                        v-model="picker"
                        :events="dateFunctionEvents"
                        color="primaryConst"
                        full-width
                        flat
                        no-title
                      ></v-date-picker>
                    </v-col>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mb-6">
                  <v-card class="view-card ma-1">
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
                            <v-icon color="greyTint">mdi-dots-vertical</v-icon>
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
                        <v-col cols="5" sm="6" md="5" lg="5" xl="3">
                          <p class="views-value greyBold--text text-h5 mb-0">7,156</p>
                          <p class="views-percent success--text mb-4">7.2%</p>
                          <v-btn
                            color="primary"
                            outlined
                            small
                            class="text-capitalize"
                          >See More</v-btn>
                        </v-col>
                        <v-col cols="6" offset="1" sm="6" offset-sm="0" md="5" offset-md="2" lg="5" offset-lg="2" xl="8" offset-xl="1" class="d-flex align-end">
                          <ApexChart v-if="apexLoading" ref="apexView" height="80" type="area" :options="apexArea1.options" :series="apexArea1.series"></ApexChart>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mb-6">
                  <v-card class="update-card primaryConst ma-1" height="80">
                    <v-row no-gutters align="center" justify="center" class="pa-5 pt-0">
                      <v-col cols="12" class="d-flex align-center" style="height: 80px">
                        <div class="image-wrapper" style="height: 36px">
                          <v-img
                            src="@/assets/img/user/profile/update-icon.svg"
                            contain
                          ></v-img>
                        </div>
                        <p class="upd-text text-truncate white--text mb-0 ml-3">Updates</p>
                        <v-spacer></v-spacer>
                        <v-btn
                          outlined
                          class="white--text text-capitalize"
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
      arrayEvents: null,
      apexLoading: false,
      apexPie: {
        options: {
          dataLabels: {
            enabled: false
          },
          colors: [config.light.primary, config.light.secondary, config.light.success, config.light.warning],
          labels: ["New", "Progress", "Completed", "Canceled"],
          legend: {
            position: 'bottom',
            markers: {
              width: 8,
              height: 8,
            },
          },
            stroke: {
              show: false,
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
      picker: new Date().toISOString().substr(0, 10),
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
    dateFunctionEvents (date) {
      const [,, day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['successConst', 'secondaryConst']
      return false
    },
  },
  mounted() {
    setTimeout(() => {
      this.apexLoading = true
      }
    )
  }
}
</script>

<style src="./Profile.scss" lang="scss"/>
