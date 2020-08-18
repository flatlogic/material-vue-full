<template>
  <v-container fluid>
    <div class="lineCharts-page">
      <h1 class="page-title mt-10 mb-6">Line Charts</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Basic Line Chart</p>
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
                      type="line"
                      height="350"
                      :options="apexLines.options"
                      :series="apexLines.series"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Line Chart with Data Labels</p>
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
                      type="line"
                      height="350"
                      :options="apexLinesWithData.options"
                      :series="apexLinesWithData.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" >
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Apex Zoomable Timeseries Chart</p>
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
                    type="area"
                    height="350"
                    :options="apexArea.options"
                    :series="apexArea.series">
                  </ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Dynamic Updating Chart</p>
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
                    type="line"
                    height="350"
                    ref="chart"
                    :options="apexDynamic.options"
                    :series="apexDynamic.series">
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
  name: 'LineCharts',
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
      apexLines: {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          colors: [config.light.primary],
          grid: {
            row: {
              colors: [config.light.primary, 'transparent'],
              opacity: 0.2
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      },
      apexLinesWithData: {
        series: [
          {
            name: "High - 2020",
            data: [28, 29, 33, 36, 32, 32, 33]
          },
          {
            name: "Low - 2020",
            data: [12, 11, 14, 18, 17, 13, 13]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          colors: [ config.light.primary, config.light.info ],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: [config.light.primary, 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.1
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          },
          yaxis: {
            min: 5,
            max: 40
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        },
      },
      apexArea: {
        series: [{
          name: 'XYZ MOTORS',
          data: this.dates()
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
          },
          xaxis: {
            type: 'datetime'
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        },
      },
      TICKINTERVAL: 86400000,
      XAXISRANGE: 777600000,
      lastDate: 0,
      data: [],
      apexDynamic: {
        series: [{
          data: this.data
        }],
        options: {
          chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            range: this.XAXISRANGE,
          },
          yaxis: {
            max: 100
          },
          legend: {
            show: false
          },
        },
      },

    }
  },
  methods: {
    dates() {
      let dates = [];
      for (let i = 0; i < 100; i++) {
        let x = Math.floor(Math.random() * (100)) + 100;
        dates.push([i, x])
      }
      return dates;
    },
    getDayWiseTimeSeries(baseval, count, yrange) {
      let i = 0;
      while (i < count) {
        let x = baseval;
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        this.data.push({
          x, y
        });
        this.lastDate = baseval
        baseval += this.TICKINTERVAL;
        i++;
      }
    },
    getNewSeries(baseval, yrange) {
      let newDate = baseval + this.TICKINTERVAL;
      this.lastDate = newDate

      for(var i = 0; i< this.data.length - 10; i++) {
      // IMPORTANT
      // we reset the x and y of the data which is out of drawing area
      // to prevent memory leaks
      this.data[i].x = newDate - this.XAXISRANGE - this.TICKINTERVAL
      this.data[i].y = 0
    }
      this.data.push(
          {
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      }
      )

    },
    resetData(){
      this.data = this.data.slice(this.data.length - 10, this.data.length);
    }
  },
  mounted: function () {
    this.getDayWiseTimeSeries(new Date('11 Feb 2020 GMT').getTime(), 10, {
      min: 10,
      max: 90
    }),

    window.setInterval(function () {
      this.getNewSeries(this.lastDate, {
        min: 10,
        max: 90
      })

      this.$refs.chart.updateSeries([{
        data: this.data
      }])
    }, 1000)

    window.setInterval(function () {
      this.resetData()
      this.$refs.chart.updateSeries([{
        data: this.data
      }], false, true)
    }, 60000)
  }
};
</script>
