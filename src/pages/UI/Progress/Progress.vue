<template>
  <v-container fluid class="progress-pages">
    <v-row no-gutters class="d-flex mt-10 mb-6">
      <h1 class="page-title">Progress</h1>
    </v-row>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Progress Linear</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">Using the <code>indeterminate</code> prop, <code>v-progress-linear</code> continuously animates.</p>
            <template v-for="prog in progress">
              <v-progress-linear
                :key="prog.value"
                v-model="prog.value"
                :color="prog.color"
              ></v-progress-linear>
              <br v-bind:key="prog.value">
            </template>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Indeterminate</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">The progress linear component can have a determinate state modified by <code>v-model</code>.</p>
            <template v-for="prog in progress">
              <v-progress-linear
                v-bind:key="prog.color"
                indeterminate
                :color="prog.color"
              ></v-progress-linear>
              <br v-bind:key="prog.color">
            </template>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Stream</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">The <code>stream</code> property works with buffer-value to convey to the user
              that there is some action taking place. You can use any combination of <code>buffer-value</code> and <code>value</code> to achieve your design.</p>
            <template v-for="prog in progress">
              <v-progress-linear
                v-bind:key="prog.color"
                :buffer-value="prog.value"
                :value="prog.value - 10"
                stream
                :color="prog.color"
              ></v-progress-linear>
              <br v-bind:key="prog.color">
            </template>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Striped</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">The <code>stream</code> property works with buffer-value to convey to the user
              that there is some action taking place. You can use any combination of <code>buffer-value</code> and <code>value</code> to achieve your design.</p>
            <template v-for="prog in progress">
              <v-progress-linear
                :key="prog.color"
                :value="prog.value"
                striped
                height="20"
                :color="prog.color"
              ></v-progress-linear>
              <div class="w-100 mb-4" v-bind:key="prog.color"></div>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Progress Circular</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">The <code>v-progress-circular</code> component is used to convey data circularly to
              users. It also can be put into an indeterminate state to portray loading.</p>
            <div class="d-flex justify-space-around">
              <template v-for="circle in progressCircle">
                <v-progress-circular
                  :key="circle.color"
                  :value="circle.value"
                  :color="circle.color"
                ></v-progress-circular>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Indeterminate</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">Using the <code>indeterminate</code> prop, a <code>v-progress-circular</code> continues to animate indefinitely.</p>
            <div class="d-flex justify-space-around">
              <template v-for="circle in progressCircle">
                <v-progress-circular
                  indeterminate
                  :key="circle.color"
                  :color="circle.color"
                ></v-progress-circular>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Size and Width</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">The <code>size</code> and <code>width</code> props allow you to easily
              alter the size and width of the <code>v-progress-circular</code> component.</p>
            <div class="d-flex justify-space-around align-center">
              <template v-for="circle in progressCircle">
                <v-progress-circular
                  :value="circle.value"
                  :width="circle.width"
                  :size="circle.size"
                  :key="circle.color"
                  :color="circle.color"
                ></v-progress-circular>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Rotate</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal card-dark-grey mb-5">The <code>rotate</code> prop gives you the ability to customize the <code>v-progress-circular</code>'s origin.</p>
            <div class="d-flex justify-space-around align-center">
              <template v-for="circle in progressCircleRotate">
                <v-progress-circular
                    :value="value"
                    width="15"
                    size="100"
                    :rotate="circle.rotate"
                    :key="circle.id"
                    :color="circle.color"
                >{{ value }}</v-progress-circular>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Progress',
    data () {
      return {
        menu: [
          'Edit',
          'Copy',
          'Delete',
          'Print'
        ],
        progress: [
          {
              color: 'primary',
              value: 15,
          },
          {
              color: 'warning',
              value: 30,
          },
          {
              color: 'secondary',
              value: 45
          },
          {
              color: 'success',
              value: 60
          },
        ],
        progressCircle: [
          {
              color: 'primary',
              value: 15,
              size: 100,
              width: 15
          },
          {
              color: 'warning',
              value: 30,
              size: 80,
              width: 10
          },
          {
              color: 'secondary',
              value: 45,
              size: 60,
              width: 5
          },
          {
              color: 'success',
              value: 60,
              size: 40,
              width: 3
          },
          {
              color: 'info',
              value: 75,
              size: 20,
              width: 2
          },
        ],
        progressCircleRotate: [
          {
            id: 1,
            color: 'primary',
            value: this.value,
            rotate: 360
          },
          {
            id: 2,
            color: 'warning',
            value: this.value,
            rotate: -90
          },
          {
            id: 3,
            color: 'secondary',
            value: this.value,
            rotate: 90
          },
          {
            id: 4,
            color: 'success',
            value: this.value,
            rotate: 360
          },
          {
            id: 5,
            color: 'info',
            value: this.value,
            rotate: 180
          },
        ],
        value: 0,
        interval: {}
      }
    },
    mounted () {
      this.interval = setInterval(() => {
        this.value === 100 ? this.value = 0 : this.value += 5}, 1000)
    },

    beforeDestroy () {
      clearInterval(this.interval)
    },
  }

</script>
