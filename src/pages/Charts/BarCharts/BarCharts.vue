<template>
  <v-container fluid class="mt-6">
    <div class="barCharts-page">
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Grouped Bar Chart</p>
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
                      type="bar"
                      height="350"
                      :options="apexBar.options"
                      :series="apexBar.series"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Grouped Bar Chart</p>
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
                      type="bar"
                      height="350"
                      :options="apexBarGroup.options"
                      :series="apexBarGroup.series"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Staked Bar Chart</p>
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
                    type="bar"
                    height="350"
                    :options="apexStuckBar.options"
                    :series="apexStuckBar.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Bar Chart With Image</p>
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
                      type="bar"
                      height="350"
                      :options="apexBarWithImage.options"
                      :series="apexBarWithImage.series">
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
import config from '../../../config';

export default {
  name: 'BarCharts',
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
      apexBar: {
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
              show: false,
            },
          },
          colors: [config.light.primary],
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      },
      apexBarGroup: {
        series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 430,

            toolbar: {
              show: false,
            },
          },
          colors: [config.light.primary, config.light.success],
          legend: {
            show: false
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
          },
        },
      },
      apexStuckBar: {
        series: [{
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21]
        }, {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32]
        }, {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20]
        }, {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4]
        }, {
          name: 'Reborn Kid',
          data: [25, 12, 19, 32, 25, 24, 10]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          colors: [config.light.success, config.light.primary, config.light.secondary, config.light.info, config.light.warning],
          legend: {
            show: false
          },
          xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
            labels: {
              formatter: function (val) {
                return val + "K"
              }
            }
          },
          yaxis: {
            title: {
              text: undefined
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + "K"
              }
            }
          },
          fill: {
            opacity: 1
          },
        },
      },
      apexBarWithImage: {
        series: [{
          name: 'coins',
          data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
            11, 12, 13, 14, 16, 14, 15, 17, 19, 21
          ]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
              show: false,
            },
            animations: {
              enabled: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '100%',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            colors: ["#fff"],
            width: 0.2
          },
          labels: Array.apply(null, {length: 39}).map(function(el, index){
            return index + 1;
          }),
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false
            },
          },
          grid: {
            position: 'back'
          },
          fill: {
            type: 'image',
            opacity: 0.87,
            image: {
              src: [require('@/assets/img/charts/2.png')],
              width: 466,
              height: 406
            }
          },
        },
      },
    };
  },
};
</script>
