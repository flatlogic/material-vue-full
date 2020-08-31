<template>
  <v-container fluid class="mt-6">
    <div class="pieCharts-page">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Basic Pie Chart</p>
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
                      v-for="(item, i) in menu"
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
                <v-col cols="12">
                  <ApexChart
                      type="pie"
                      :height="$vuetify.breakpoint.smAndDown ? 300 : 350"
                      :options="apexPie.options"
                      :series="apexPie.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Basic Donut Pie Chart</p>
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
                      v-for="(item, i) in menu"
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
                <v-col>
                  <ApexChart
                      type="donut"
                      height="350"
                      :options="apexPieDonut.options"
                      :series="apexPieDonut.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Dynamic Pie Chart</p>
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
                      v-for="(item, i) in menu"
                      :key="i"
                      @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-5 pt-0 pb-0">
              <v-row no-gutters>
                <v-col cols="12" class="my-auto">
                  <ApexChart
                    type="donut"
                    height="350"
                    :options="apexDynamicChart.options"
                    :series="apexDynamicChart.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="pb-5">
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="randomize">Randomize</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="secondary" @click="appendData">Add</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="warning" @click="removeData">Remove</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="success" @click="reset">Reset</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Monochrome Pie Chart</p>
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
                      v-for="(item, i) in menu"
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
                <v-col cols="12" class="pb-7">
                  <ApexChart
                    type="pie"
                    height="368"
                    :options="apexMonochrome.options"
                    :series="apexMonochrome.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ApexChart from 'vue-apexcharts'
import config from '@/config';

export default {
  name: 'PieCharts',
  components: {
    ApexChart
  },
  data() {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ],
      apexPie: {
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            type: 'pie',
            height: 350
          },
          legend: {
            position: 'right',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          colors: [config.light.primary, config.light.success, config.light.warning, config.light.info, config.light.secondary],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      },
      apexPieDonut: {
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          colors: [config.light.primary, config.light.success, config.light.warning, config.light.info, config.light.secondary],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      },
      apexDynamicChart: {
        series: [44, 55, 13, 33],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          colors: [config.light.primary, config.light.success, config.light.warning, config.light.info, config.light.secondary,
            config.light.primary, config.light.success, config.light.warning, config.light.info, config.light.secondary],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }],
          legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
          }
        },
      },
      apexMonochrome: {
        series: [25, 15, 44, 55, 41, 17],
        options: {
          chart: {
            width: '100%',
            type: 'pie',
          },
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          theme: {
            monochrome: {
              enabled: true,
              color: config.light.primary,
            }
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },
      }
    };
  },

  methods: {
    appendData: function () {
      var arr = this.apexDynamicChart.series.slice()
      arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
      this.apexDynamicChart.series = arr
    },
    removeData: function () {
      if(this.apexDynamicChart.series.length === 1) return
      var arr = this.apexDynamicChart.series.slice()
      arr.pop()
      this.apexDynamicChart.series = arr
    },
    randomize: function () {
      this.apexDynamicChart.series = this.apexDynamicChart.series.map(function() {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
      })
    },
    reset: function () {
      this.apexDynamicChart.series = [44, 55, 13, 33]
    }
  }
};
</script>
