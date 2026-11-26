<template>
  <div>
    <div class="dashboard-page">
      <v-card width="100%" class="breadcrumbs mx-1 mb-6">
        <v-row no-gutters class="d-flex align-center mt-8 mb-3 px-5 py-1 mx-1">
          <v-col cols="12" md="6" class="d-sm-flex justify-md-start justify-space-between align-center">
            <h2 class="main-page-title text-greyMedium mb-0 mr-2 pt-4 pt-md-0">Dashboard</h2>
            <div class="ml-0 ml-sm-4">
              <v-tabs color="secondary">
                <v-tab
                  class="text-capitalize font-weight-regular"
                  style="letter-spacing: 0.02857em;"
                  v-for="tab in tabs"
                  :key="tab">
                  {{ tab }}</v-tab>
              </v-tabs>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-sm-flex justify-space-between align-center justify-md-end">
            <div class="mb-3 mb-sm-0">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                location="bottom"
              >
                <template #activator="{ props }">
                  <v-text-field
                    :model-value="computedDate"
                    prepend-icon="mdi-calendar"
                    color="primary"
                    style="height: 38px; width: 250px"
                    readonly
                    single-line
                    variant="solo"
                    flat
                    density="compact"
                    class="main-date-picker mr-2"
                    v-bind="props"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" hide-header @update:model-value="menu = false" />
              </v-menu>
            </div>
            <v-menu location="bottom">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  color="error"
                  class="text-capitalize button-shadow mb-3 mb-sm-0"
                >Latest Reports</v-btn>
              </template>
            </v-menu>
          </v-col>
        </v-row>
      </v-card>
<!--      <v-card width="100%" class="mx-1 mb-6">-->
<!--        <v-row no-gutters class="d-flex align-center mt-8 mb-3 px-5 py-1 mx-1">-->
<!--          <v-col-->
<!--            cols="12"-->
<!--            md="6"-->
<!--            class="d-sm-flex justify-content-center align-center"-->
<!--          >-->
<!--            <img class="d-block" src="../../assets/logo.svg" alt="Vue" />-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-card>-->
      <v-row>
        <v-col lg=3 sm=6 md=4 cols=12>
          <v-card class="support-card ma-1" height="240">
            <v-card-title class="d-flex flex-nowrap pa-5 pb-0">
              <p class="text-truncate">Support Tracker</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn variant="text"
                    icon
                    v-bind="props">
                    <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters class="pb-0">
                <v-col cols="5" class="my-auto">
                  <span class="font-weight-medium text-greyBold" style="font-size: 24px;">543</span>
                  <p class="text-greyBold mb-0">Tickets</p>
                </v-col>
                <v-col cols="6">
                  <ApexChart v-if="apexLoading" height="120" :options="mock.apexPie1.options" :series="mock.apexPie1.series"></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-0" justify="space-between">
                <v-col cols="auto" class="d-flex flex-column align-center">
                  <p class="text-greyTint my-0" style="font-size: 12px">New Tickets</p>
                  <div class="">
                    <span class="text-greyBold font-weight-regular" style="font-size: 16px">45</span>
                    <v-icon size="30" color="success" class="mt-n1">mdi-circle-small</v-icon>
                  </div>
                </v-col>
                <v-col cols="auto" class="d-flex flex-column align-center">
                  <p class="text-greyTint my-0" style="font-size: 12px">Open</p>
                  <div class="d-flex flex-row justify-start">
                    <span class="text-greyBold font-weight-regular"  style="font-size: 16px">147</span>
                    <v-icon size="30" color="warning" class="mt-n1">mdi-circle-small</v-icon>
                  </div>
                </v-col>
                <v-col cols="auto" class="d-flex flex-column align-center">
                  <p class="text-greyTint my-0" style="font-size: 12px">Rate</p>
                  <div class="">
                    <span class="text-greyBold font-weight-regular" style="font-size: 16px">351</span>
                    <v-icon size="30" class="pl-0 mt-n1" color="primary">mdi-circle-small</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=3 sm=6 md=8 cols=12>
          <v-card class="ma-1">
            <v-card-title class="d-flex flex-nowrap pa-5 pb-3">
              <p class="text-truncate">App Performance</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn variant="text"
                    icon
                    v-bind="props">
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
                  <v-icon color="primaryConst" class="ml-n2"> mdi-circle-medium </v-icon>
                  <span class="text-greyTint">Integration</span>
                </div>
                <div>
                  <v-icon color="warning"> mdi-circle-medium </v-icon>
                  <span class="text-greyTint">SDK</span>
                </div>
              </v-row>
              <v-row no-gutters class="pb-4">
                <v-col>
                  <div class="text-h6 text-greyBold font-weight-regular">Integration</div>
                  <v-progress-linear
                    :model-value=value
                    background-color="#ececec"
                    color="primaryConst"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-4">
                <v-col>
                  <div class="text-h6 text-greyBold font-weight-regular">SDK</div>
                  <v-progress-linear
                    :model-value=value2
                    background-color="#ececec"
                    color="warning"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=3 sm=6 md=8 cols=12>
          <v-card class="ma-1">
            <v-card-title class="d-flex flex-nowrap pa-5 pb-3">
              <p class="text-truncate">Server Overview</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn variant="text"
                    icon
                    v-bind="props">
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
                  <span class="text-greyBold">60% / 37°С / 3.3 Ghz</span>
                </v-col>
                <v-col cols="4">
                  <ApexChart v-if="apexLoading" ref="apexArea1" height="43" type="area" :options="mock.apexArea1.options" :series="mock.apexArea1.series"></ApexChart>
                </v-col>
              </v-row>
              <v-row class="mb-2" no-gutters>
                <v-col cols="8" class="my-auto">
                  <span class="text-greyBold">54% / 31°С / 3.3 Ghz</span>
                </v-col >
                <v-col cols="4">
                  <ApexChart v-if="apexLoading" ref="apexArea2" height="43" type="area" :options="mock.apexArea2.options" :series="mock.apexArea2.series"></ApexChart>
                </v-col>
              </v-row>
              <v-row class="mb-2" no-gutters>
                <v-col cols="8" class="my-auto">
                  <span class="text-greyBold">57% / 21°С / 3.3 Ghz</span>
                </v-col>
                <v-col cols="4">
                  <ApexChart v-if="apexLoading" ref="apexArea3" height="43" type="area" :options="mock.apexArea3.options" :series="mock.apexArea3.series"></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=3 sm=6 md=4 cols=12>
          <v-card class="ma-1" height="240">
            <v-card-title class="d-flex flex-nowrap pa-5 pb-3">
              <p class="text-truncate">Revenue Breakdown</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn variant="text"
                    icon
                    v-bind="props"
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
          <v-card class="daily-line ma-1">
            <v-card-title class="d-flex align-center pa-5 pb-0">
              <p>Daily Line Chart</p>
              <v-spacer></v-spacer>
              <div class="main-chart-legend">
                <v-icon size="30" color="warning">mdi-circle-small</v-icon><span class="text-greyBold font-weight-regular fs-medium">Tablet</span>
                <v-icon size="30" color="primaryConst">mdi-circle-small</v-icon><span class="text-greyBold font-weight-regular fs-medium">Mobile</span>
                <v-icon size="30" color="secondaryConst">mdi-circle-small</v-icon><span class="text-greyBold font-weight-regular fs-medium">Desktop</span>
              </div>
              <v-spacer></v-spacer>
              <v-select
                    class="main-chart-select font-weight-regular text-greyBold"
                    v-model="mainApexAreaSelect"
                    density="compact"
                    flat
                    single-line
                    hide-details
                    :items="mock.select"
                  ></v-select>
            </v-card-title>
            <v-card-text class="pa-4 pb-0">
              <v-row>
                <v-col >
                  <ApexChart
                    v-if="apexLoading"
                    ref="dailyLine"
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
            <v-card-title class="d-flex align-center pa-5 pb-3">
              <p>Light Blue</p>
              <v-spacer></v-spacer>
              <v-select
                    class="main-chart-select font-weight-regular text-greyBold"
                    v-model="sel"
                    density="compact"
                    flat
                    single-line
                    hide-details
                    :items="mock.select"
                  ></v-select>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters>
                <v-col cols="6" md="8" lg="7" class="my-auto">
                  <span class="text-greyBold" style="font-size: 42px">199 <span class="text-caption text-error">-3.7%</span> </span>
                </v-col>
                <v-col cols="6" md="4" lg="5"  >
                  <ApexChart
                    height="100"
                    type="bar"
                    ref="apexBar1"
                    v-if="apexLoading"
                    :options="mock.apexBar1.options"
                    :series="mock.apexBar1.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="text-greyMedium fs-large">33<v-icon color="success">mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Registrations</div>
                </div>
                <div>
                  <div class="text-greyMedium fs-large">3.25%<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Bounce Rate</div>
                </div>
                <div >
                  <div class="text-greyMedium fs-large">330<v-icon color="error"> mdi-arrow-bottom-right</v-icon></div>
                  <div  class="text-greyTint fs-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=4 sm=6 cols=12>
          <v-card class="ma-1">
            <v-card-title class="d-flex align-center pa-5 pb-3">
              <p>Sing App</p>
              <v-spacer></v-spacer>
              <v-select
                    class="main-chart-select font-weight-regular text-greyBold"
                    v-model="sel0"
                    density="compact"
                    flat
                    single-line
                    hide-details
                    :items="mock.select"
                  ></v-select>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters>
                <v-col cols="6" md="8" lg="8" class="my-auto">
                  <span class="text-greyBold" style="font-size: 42px">121 <span class="text-error text-caption">-3.2%</span> </span>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <ApexChart
                    height="100"
                    type="bar"
                    ref="apexBar2"
                    v-if="apexLoading"
                    :options="mock.apexBar2.options"
                    :series="mock.apexBar2.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="text-greyMedium fs-large">15<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Registrations</div>
                </div>
                <div>
                  <div class="text-greyMedium fs-large">3.01%<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="text-greyMedium fs-large">302<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg=4 sm=6 cols=12>
          <v-card class="ma-1">
            <v-card-title class="d-flex align-center pa-5 pb-3">
              <p>RNS</p>
              <v-spacer></v-spacer>
              <v-select
                    class="main-chart-select font-weight-regular text-greyBold"
                    v-model="sel1"
                    density="compact"
                    flat
                    single-line
                    hide-details
                    :items="mock.select"
                  ></v-select>
            </v-card-title>
            <v-card-text class="pa-5 pt-0">
              <v-row no-gutters>
                <v-col cols="6" md="8" lg="8" class="my-auto">
                  <span class="text-greyBold" style="font-size: 42px">175 <span class="text-error text-caption">-3.1%</span> </span>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <ApexChart
                    height="100"
                    type="bar"
                    ref="apexBar3"
                    v-if="apexLoading"
                    :options="mock.apexBar3.options"
                    :series="mock.apexBar3.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="text-greyMedium fs-large">31 <v-icon color="error"> mdi-arrow-bottom-right</v-icon></div>
                  <div class="text-greyTint fs-index">Registrations</div>
                </div>
                <div>
                  <div class="text-greyMedium fs-large">3.23%<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="text-greyMedium fs-large">301<v-icon color="success"> mdi-arrow-top-right</v-icon></div>
                  <div class="text-greyTint fs-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols=12>
          <v-card class="support-table ma-1">
            <v-card-title class="d-flex align-center pa-5 pb-4">
              <p>Recent Orders</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template #activator="{ props }">
                  <v-btn variant="text"
                    icon
                    v-bind="props">
                    <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-0 overflow-x-auto">
              <v-data-table
                show-select
                :headers="headers"
                :items="products"
                :items-per-page="itemPerPage">
                <template #item.name="{ item }">
                  <div class="d-flex align-center">
                    <v-avatar size="40" :color="item.avatar.color" class="ma-5 ml-0 d-none d-sm-flex">
                      <span class="font-weight-medium">{{ item.avatar.name }}</span>
                    </v-avatar>
                    <div>
                      <span class="mb-0 fs-base">{{ item.name }}</span>
                    </div>
                  </div>
                </template>
                <template #item.status="{ item }">
                  <v-chip :color="item.avatar.color" size="small">{{ item.status }}</v-chip>
                </template>
                <template #item.actions="{}">
                  <v-menu>
                    <template #activator="{ props }">
                      <v-btn variant="text"
                        icon
                        v-bind="props">
                        <v-icon color="greyTint">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, i) in mock.menu"
                        :key="i"
                        @click="() => {}">
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
                <template #no-data>
                  <v-btn color="primary" @click="initialize">Reset</v-btn>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import moment from 'moment';
  import config from "@/config";
  import mock from './mock';
  import ApexChart from 'vue3-apexcharts';

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
        tabs: ['Today', 'This week', 'This month', 'This year'],
        date: new Date(),
        menu: false,
        headers: [
          {
            title: 'ORDER ID',
            align: 'start',
            sortable: false,
            key: 'id',
          },
          { title: 'CUSTOMER', key: 'name' },
          { title: 'OFFICE', key: 'role' },
          { title: 'NETTO WEIGHT', key: 'weight' },
          { title: 'PRICE', key: 'price' },
          { title: 'DATE OF PURCHASE', key: 'create' },
          { title: 'DATE OF DELIVERY', key: 'end' },
          { title: 'STATUS', key: 'status' },
          { title: 'ACTIONS', key: 'actions', sortable: false },
        ],
        products: [],
        itemPerPage: 5,
        apexDarkTheme: {
          theme: {
            mode: 'dark'
          }
        },
        apexDarkThemeMainChart: {
          theme: {
            mode: 'dark'
          },
          colors: [config.light.warning, config.light.primary, '#30324B'],
        },
        apexLightTheme: {
          theme: {
            mode: 'light'
          }
        },
        apexLightThemeMainChart: {
          theme: {
            mode: 'light'
          },
          colors: [config.light.warning, config.light.primary, '#F8F9FF'],
        },
        sel: 'Daily',
        sel0: 'Daily',
        sel1: 'Daily',
        sel2: 'Daily',
        selNew: 'Daily',
      };
    },
    methods: {
      getRandomInt(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      },
      initialize () {
        this.products = [
          {
            id: '2840954',
            avatar: {
              name: 'V',
              color: 'secondary'
            },
            name: 'Victoria Cantrel',
            role: 'Peru',
            weight: '1 kg',
            price: '$2.500',
            status: 'Canceled',
            create: '09 Jan 2020',
            end: '-',
            actions: true,
          },
          {
            id: '824480',
            avatar: {
              name: 'C',
              color: 'warning'
            },
            name: 'Constance Clayton',
            role: 'Peru',
            weight: '2 kg',
            price: '$950',
            status: 'In a process',
            create: '06 Jan 2020',
            end: '12 Jan 2020',
            actions: true,
          },
          {
            id: '2985330',
            avatar: {
              name: 'S',
              color: 'primary'
            },
            name: 'Sophia Fernandez',
            role: 'Croatia',
            weight: '1 kg',
            price: '$600',
            status: 'Pending',
            create: '12 Jan 2020',
            end: '16 Jan 2020',
            actions: true,
          },
          {
            id: '1746913',
            avatar: {
              name: 'B',
              color: 'success'
            },
            name: 'Bob Nilson',
            role: 'Belgium',
            weight: '10 kg',
            price: '$1.203',
            status: 'Delivered',
            create: '11 Jan 2020',
            end: '18 Jan 2020',
            actions: true,
          },
          {
            id: '2976581',
            avatar: {
              name: 'J',
              color: 'success'
            },
            name: 'Jessica Nilson',
            role: 'Belgium',
            weight: '2 kg',
            price: '$1.220',
            status: 'Canceled',
            create: '11 Jan 2020',
            end: '18 Jan 2020',
            actions: true,
          },
          {
            id: '2841954',
            avatar: {
              name: 'J',
              color: 'success'
            },
            name: 'Jane Hew',
            role: 'Paris',
            weight: '5 kg',
            price: '$200',
            status: 'Delivered',
            create: '03 Jan 2020',
            end: '14 Jan 2020',
            actions: true,
          },
          {
            id: '825480',
            avatar: {
              name: 'A',
              color: 'warning'
            },
            name: 'Axel Pittman',
            role: 'USA',
            weight: '9 kg',
            price: '$650',
            status: 'Canceled',
            create: '09 Jan 2020',
            end: '16 Jan 2020',
            actions: '1234',
          },
          {
            id: '2986330',
            avatar: {
              name: 'S',
              color: 'primary'
            },
            name: 'Sophia Fernandez',
            role: 'Peru',
            weight: '6 kg',
            price: '$980',
            status: 'Pending',
            create: '13 Jan 2020',
            end: '-',
            actions: true,
          },
          {
            id: '1746923',
            avatar: {
              name: 'B',
              color: 'secondary'
            },
            name: 'Bob Nilson',
            role: 'Moscow',
            weight: '2 kg',
            price: '$360',
            status: 'Canceled',
            create: '15 Jan 2020',
            end: '-',
            actions: true,
          },
          {
            id: '3976581',
            avatar: {
              name: 'J',
              color: 'secondary'
            },
            name: 'Jessica Nilson',
            role: 'Peru',
            weight: '0.5 kg',
            price: '$1.250',
            status: 'Canceled',
            create: '09 Jan 2020',
            end: '16 Jan 2020',
            actions: true,
          },
          {
            id: '2986331',
            avatar: {
              name: 'J',
              color: 'warning'
            },
            name: 'Jane Hew',
            role: 'Minsk',
            weight: '8.5 kg',
            price: '$1.120',
            status: 'In a progress',
            create: '01 Jan 2020',
            end: '09 Jan 2020',
            actions: true,
          },
          {
            id: '8254801',
            avatar: {
              name: 'A',
              color: 'secondary'
            },
            name: 'Axel Pittman',
            role: 'Minsk',
            weight: '10.5 kg',
            price: '$1.900',
            status: 'Canceled',
            create: '09 Jan 2020',
            end: '18 Jan 2020',
            actions: true,
          },
        ]
      },
    },

    computed: {
      ...mapState({
        currentUser: (state) => state.auth.currentUser,
      }),
      computedDate() {
        return this.date ? moment(this.date).format('Do MMM YYYY, dddd') : ''
      }
    },

    mounted() {
      this.apexLoading = true
    },

    watch: {
      '$vuetify.theme.current.dark'(dark) {
        if (dark) {
          this.$refs.apexArea1.updateOptions(this.apexDarkTheme, false, true)
          this.$refs.apexArea2.updateOptions(this.apexDarkTheme, false, true)
          this.$refs.apexArea3.updateOptions(this.apexDarkTheme, false, true)
          this.$refs.dailyLine.updateOptions(this.apexDarkThemeMainChart, false, true)
          this.$refs.apexBar1.updateOptions(this.apexDarkTheme, false, true)
          this.$refs.apexBar2.updateOptions(this.apexDarkTheme, false, true)
          this.$refs.apexBar3.updateOptions(this.apexDarkTheme, false, true)
        }
        else {
          this.$refs.apexArea1.updateOptions(this.apexLightTheme, false, true)
          this.$refs.apexArea2.updateOptions(this.apexLightTheme, false, true)
          this.$refs.apexArea3.updateOptions(this.apexLightTheme, false, true)
          this.$refs.dailyLine.updateOptions(this.apexLightThemeMainChart, false, true)
          this.$refs.apexBar1.updateOptions(this.apexLightTheme, false, true)
          this.$refs.apexBar2.updateOptions(this.apexLightTheme, false, true)
          this.$refs.apexBar3.updateOptions(this.apexLightTheme, false, true)
        }
      }
    },

    created () {
      this.initialize()
    },
  };
</script>
