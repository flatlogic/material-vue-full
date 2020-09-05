<template>
  <v-container fluid class="mx-1">
    <div class="dashboard-page">
      <v-card width="100%" class="breadcrumbs mx-1">
        <v-row no-gutters class="d-flex align-center mt-8 mb-3 px-5 py-1 mx-1">
          <v-col cols="12" md="6" class="d-sm-flex justify-md-start justify-space-between align-center">
            <h1 class="main-page-title greyMedium--text mb-0 mr-2">Dashboard</h1>
            <div>
              <v-tabs color="secondary">
                <v-tab
                  class="text-capitalize font-weight-regular"
                  v-for="tab in tabs"
                  :key="tab">
                  {{ tab }}</v-tab>
              </v-tabs>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-sm-flex justify-space-between align-center justify-md-end">
            <div class="mb-3 mb-sm-0">
              <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDate"
                    prepend-icon="mdi-calendar"
                    color="primary"
                    full-width
                    style="height: 38px; width: 250px"
                    readonly
                    single-line
                    solo
                    flat
                    dense
                    class="mr-5"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  color="error"
                  class="text-capitalize button-shadow mb-3 mb-sm-0"
                >Latest Reports</v-btn>
              </template>
            </v-menu>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col lg=3 sm=6 md=4 cols=12>
          <v-card class="support-card ma-1" height="240">
            <v-card-title class="pa-5 pb-0">
              <p>Support Tracker</p>
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
              <v-row no-gutters class="pb-0">
                <v-col cols="5" class="my-auto">
                  <span class="font-weight-medium greyBold--text" style="font-size: 24px;">543</span>
                  <p class="greyBold--text mb-0">Tickets</p>
                </v-col>
                <v-col cols="6">
                  <ApexChart v-if="apexLoading" height="120" :options="mock.apexPie1.options" :series="mock.apexPie1.series"></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-0" justify="space-between">

                <v-col cols="4" lg="5" class="d-flex flex-column align-center">
                  <p class="greyTint--text my-0" style="font-size: 12px">New Tickets</p>
                  <div class="">
                    <span class="greyBold--text font-weight-regular" style="font-size: 16px">45</span>
                    <v-icon color="success">mdi-circle-small</v-icon>
                  </div>
                </v-col>

                <v-col cols="2" lg="4" class="d-flex flex-column align-center">
                  <p class="greyTint--text my-0" style="font-size: 12px">Open</p>
                  <div class="d-flex flex-row justify-start">
                    <span class="greyBold--text font-weight-regular"  style="font-size: 16px">147</span>
                    <v-icon color="warning">mdi-circle-small</v-icon>
                  </div>
                </v-col>

                <v-col cols="3" class="d-flex flex-column align-center">
                  <p class="greyTint--text my-0" style="font-size: 12px">Rate</p>
                  <div class="">
                    <span class="greyBold--text font-weight-regular"  style="font-size: 16px">351</span>
                    <v-icon class="pl-0" color="primary">mdi-circle-small</v-icon>
                  </div>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=3 sm=6 md=8 cols=12>
          <v-card class="ma-1">
            <v-card-title class="pa-5 pb-3">
              <p>App Performance</p>
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
              <v-row no-gutters class="pb-6">
                <div class="mr-4">
                  <v-icon color="primary" class="ml-n2"> mdi-circle-medium </v-icon>
                  <span class="greyTint--text">Integration</span>
                </div>
                <div>
                  <v-icon color="warning"> mdi-circle-medium </v-icon>
                  <span class="greyTint--text">SDK</span>
                </div>
              </v-row>
              <v-row no-gutters class="pb-4">
                <v-col>
                  <div class="text-h6 greyBold--text font-weight-regular">Integration</div>
                  <v-progress-linear
                    :value=value
                    background-color="#ececec"
                    color="primary"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-4">
                <v-col>
                  <div class="text-h6 greyBold--text font-weight-regular">SDK</div>
                  <v-progress-linear
                    :value=value2
                    background-color="#ececec"
                    color="warning"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=3 sm=6 md=8 cols=12>
          <v-card  class="ma-1">
            <v-card-title class="pa-5 pb-3">
              <p>Server Overview</p>
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
              <v-row class="mb-2" no-gutters>
                <v-col cols="8" class="my-auto">
                  <span class="greyBold--text">60% / 37°С / 3.3 Ghz</span>
                </v-col>
                <v-col cols="4">
                  <ApexChart v-if="apexLoading"  height="43" type="area" :options="mock.apexArea1.options" :series="mock.apexArea1.series"></ApexChart>
                </v-col>
              </v-row>
              <v-row class="mb-2" no-gutters>
                <v-col cols="8" class="my-auto">
                  <span class="greyBold--text">54% / 31°С / 3.3 Ghz</span>
                </v-col >
                <v-col cols="4">
                  <ApexChart v-if="apexLoading" height="43" type="area" :options="mock.apexArea2.options" :series="mock.apexArea2.series"></ApexChart>
                </v-col>
              </v-row>
              <v-row class="mb-2" no-gutters>
                <v-col cols="8" class="my-auto">
                  <span class="greyBold--text">57% / 21°С / 3.3 Ghz</span>
                </v-col>
                <v-col cols="4">
                  <ApexChart v-if="apexLoading" height="43" type="area" :options="mock.apexArea3.options" :series="mock.apexArea3.series"></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=3 sm=6 md=4 cols=12>
          <v-card class="ma-1" height="240">
            <v-card-title class="pa-5 pb-3">
              <p>Revenue Breakdown</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    class="ml-n1"
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
                <v-col >
                  <ApexChart
                    v-if="apexLoading"
                    height="120"
                    type="donut"
                    :options="mock.apexPie.options"
                    :series="mock.apexPie.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12>
          <v-card class="ma-1">
            <v-card-title class="pa-5 pb-0">
              <v-row no-gutters>
                <v-col cols="7" sm="4" md="4" lg="5" class="d-flex align-center">
                  <p>Daily Line Chart</p>
                </v-col>
                <v-col sm="6" md="6" lg="5" class="d-none d-sm-flex align-center">
                  <v-icon color="warning">mdi-circle-small</v-icon><span class="greyBold--text font-weight-regular fs-medium">Tablet</span>
                  <v-icon color="primary">mdi-circle-small</v-icon><span class="greyBold--text font-weight-regular fs-medium">Mobile</span>
                  <v-icon color="secondary">mdi-circle-small</v-icon><span class="greyBold--text font-weight-regular fs-medium">Desktop</span>
                </v-col>
                <v-col cols="5" sm="2" md="2" lg="1" offset-lg="1">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                        class="main-chart-select"
                        v-model="mainApexAreaSelect"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        flat
                        single-line
                        hide-details
                        :items="mock.select"
                        outlined
                      ></v-select>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-4 pb-0">
              <v-row>
                <v-col >
                  <ApexChart
                    v-if="apexLoading"
                    height="350"
                    type="area"
                    :options="mock.mainApexArea.options"
                    :series="mainApexAreaSelect === 'Daily' ?
                    mock.mainApexArea.series :mainApexAreaSelect === 'Weekly' ?
                    mock.mainApexArea.series2 : mock.mainApexArea.series3"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=4 sm=6 cols=12>
          <v-card class="ma-1">
            <v-card-title class="pa-5 pb-3">
              <v-row no-gutters>
                <v-col cols="6" md="7" xl="8">
                  <p>Light Blue</p>
                </v-col>
                <v-col cols="6" md="5" xl="4"  >
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                        class="main-chart-select"
                        v-model="mainApexAreaSelect"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        flat
                        single-line
                        hide-details
                        :items="mock.select"
                        outlined
                      ></v-select>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters>
                <v-col cols="6" md="8" lg="7" class="my-auto">
                  <span class="greyBold--text" style="font-size: 42px">199 <span class="caption error--text">-3.7%</span> </span>
                </v-col>
                <v-col cols="6" md="4" lg="5"  >
                  <ApexChart
                    height="100"
                    type="bar"
                    v-if="apexLoading"
                    :options="mock.apexBar1.options"
                    :series="mock.apexBar1.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="greyMedium--text fs-large">33<v-icon color="success">mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Registrations</div>
                </div>
                <div>
                  <div class="greyMedium--text fs-large">3.25%<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Bounce Rate</div>
                </div>
                <div >
                  <div class="greyMedium--text fs-large">330<v-icon color="error"> mdi-arrow-bottom-right</v-icon></div>
                  <div  class="greyTint--text fs-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=4 sm=6 cols=12>
          <v-card class="ma-1">
            <v-card-title class="pa-5 pb-3">
              <v-row no-gutters>
                <v-col cols="6" md="7" xl="8">
                  <p>Sing App</p>
                </v-col>
                <v-col cols="6" md="5" xl="4"  >
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                              class="main-chart-select"
                              v-model="mainApexAreaSelect"
                              v-bind="attrs"
                              v-on="on"
                              dense
                              flat
                              single-line
                              hide-details
                              :items="mock.select"
                              outlined
                      ></v-select>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters>
                <v-col cols="6" md="8" lg="8" class="my-auto">
                  <span class="greyBold--text" style="font-size: 42px">121 <span class="error--text caption">-3.2%</span> </span>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <ApexChart
                    height="100"
                    type="bar"
                    v-if="apexLoading"
                    :options="mock.apexBar2.options"
                    :series="mock.apexBar2.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="greyMedium--text fs-large">15<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Registrations</div>
                </div>
                <div>
                  <div class="greyMedium--text fs-large">3.01%<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="greyMedium--text fs-large">302<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=4 sm=6 cols=12>
          <v-card class="ma-1">
            <v-card-title class="pa-5 pb-3">
              <v-row no-gutters>
                <v-col cols="6" md="7" xl="8">
                  <p>RNS</p>
                </v-col>
                <v-col cols="6" md="5" xl="4"  >
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                              class="main-chart-select"
                              v-model="mainApexAreaSelect"
                              v-bind="attrs"
                              v-on="on"
                              dense
                              flat
                              single-line
                              hide-details
                              :items="mock.select"
                              outlined
                      ></v-select>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters>
                <v-col cols="6" md="8" lg="8" class="my-auto">
                  <span class="greyBold--text" style="font-size: 42px">175 <span class="error--text caption">-3.1%</span> </span>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <ApexChart
                    height="100"
                    type="bar"
                    v-if="apexLoading"
                    :options="mock.apexBar3.options"
                    :series="mock.apexBar3.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="greyMedium--text fs-large">31 <v-icon color="error"> mdi-arrow-bottom-right</v-icon></div>
                  <div class="greyTint--text fs-index">Registrations</div>
                </div>
                <div>
                  <div class="greyMedium--text fs-large">3.23%<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="greyMedium--text fs-large">301<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="greyTint--text fs-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12>
          <v-card class="support-table ma-1">
            <v-card-title class="pa-5 pb-0">
              <p>Support Requests</p>
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
            <v-card-text class="pa-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="pl-2">
                    <tr class="">
                    <th class="text-left greyTint--text fs-medium pa-6">NAME</th>
                    <th class="text-left greyTint--text fs-medium">EMAIL</th>
                    <th class="text-left greyTint--text fs-medium">PRODUCT</th>
                    <th class="text-left greyTint--text fs-medium">PRICE</th>
                    <th class="text-left greyTint--text fs-medium">DATE</th>
                    <th class="text-left greyTint--text fs-medium">CITY</th>
                    <th class="text-left greyTint--text fs-medium">STATUS</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in mock.table" :key="item.name" class="greyBold--text">
                    <td class="pa-6">{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.product }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.city }}</td>
                    <td v-if="item.status === 'Sent'">
                      <v-chip
                        link
                        color="success"
                        class="ma-2 ml-0"
                      >
                        Sent
                      </v-chip>
                    </td>
                    <td v-else-if="item.status === 'Pending'">
                      <v-chip
                        link
                        color="warning"
                        class="ma-2 ml-0"
                      >
                        Pending
                      </v-chip>
                    </td>
                    <td v-else-if="item.status === 'Declined'">
                      <v-chip
                        link
                        color="secondary"
                        class="ma-2 ml-0"
                      >
                        Declined
                      </v-chip>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import mock from './mock'
  import ApexChart from 'vue-apexcharts'
  import moment from 'moment'

  export default {
    name: 'Dashboard',
    components: {
      ApexChart
    },
    data() {
      return {
        mock,
        apexLoading: false,
        value: this.getRandomInt(10,90),
        value2: this.getRandomInt(10,90),
        mainApexAreaSelect: 'Daily',
        tabs: ['Today', 'This Week', 'This Month', 'This Year'],
        date: new Date().toISOString().substr(0, 10),
        menu: false,

      };
    },
    methods: {
      getRandomDataForTrends() {
        const arr = [];
        for (let i = 0; i < 12; i += 1) {
          arr.push(Math.random().toFixed(1) * 10);
        }
        return arr;
      },
      generatePieSeries() {
        let series = [];

        for (let i = 0; i < 4; i++) {
          let y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
          series.push(y)
        }
        return series;
      },
      getRandomInt(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
    },
    computed: {
      computedDate() {
        return this.date ? moment(this.date).format('Do MMM YYYY, dddd') : ''
      },
    },
    mounted() {
      setTimeout(() => {
        this.apexLoading = true
      })
    }
  };
</script>

<style src="./Dashboard.scss" lang="scss"/>
