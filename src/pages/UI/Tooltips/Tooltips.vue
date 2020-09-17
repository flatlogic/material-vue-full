<template>
  <v-container fluid class="tooltips-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Tooltip Example</p>
            <v-spacer></v-spacer>
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
            <p class="fs-normal greyBold--text mb-5">Tooltips can wrap any element.</p>
            <div class="text-center d-flex align-center justify-space-between">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    class="button-shadow"
                    dark
                    width="30%"
                    v-bind="attrs"
                    v-on="on"
                  >Button</v-btn>
                </template>
                <span>Button Tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    large
                    v-bind="attrs"
                    v-on="on"
                  >mdi-home</v-icon>
                </template>
                <span>Icon Tooltip</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span class="fs-normal greyBold--text align-center mr-4" v-bind="attrs" v-on="on">This text has a tooltip</span>
                </template>
                <span>Text Tooltip</span>
              </v-tooltip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Popover Example</p>
            <v-spacer></v-spacer>
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
            <p class="fs-normal greyBold--text mb-5">The v-tooltip component is useful for conveying information when a user hovers over an element.</p>
            <v-menu
                v-model="popovers.popoverFirst"
                :close-on-content-click="false"
                offset-y
                nudge-left="35">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="secondary"
                    class="button-shadow"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Menu as Popover
                  </v-btn>
                </template>
                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal greyBold--text mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
          </v-menu>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Tooltip Directions</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">A tooltip can be aligned to any of the four sides of the activator element</p>
            <v-col cols="12" class="pa-0">
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="button-shadow mr-3 mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >Tooltip on Left</v-btn>
                </template>
                <span>Left tooltip</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="button-shadow mr-3 mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >Tooltip on  Top</v-btn>
                </template>
                <span>Top tooltip</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="button-shadow mr-3 mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >Tooltip on Bottom</v-btn>
                </template>
                <span>Bottom tooltip</span>
              </v-tooltip>

              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="button-shadow mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >Tooltip on Right</v-btn>
                </template>
                <span>Right tooltip</span>
              </v-tooltip>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Popover Directions</p>
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
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-5">Tooltip visibility can be programmatically changed using v-model.</p>
            <v-col cols="12" class="pa-0">

              <v-menu
                v-model="popovers.popoverSecond"
                :close-on-content-click="false"
                offset-y
                nudge-left="35"
                nudge-top="90"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="secondary"
                    dark
                    class="button-shadow mr-2 mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Popover on Top
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal greyBold--text mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu
                v-model="popovers.popoverFifth"
                :close-on-content-click="false"
                nudge-right="185"
                nudge-top="10"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="secondary"
                    dark
                    class="button-shadow mr-2 mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Popover on Right
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal greyBold--text mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu
                v-model="popovers.popoverThird"
                :close-on-content-click="false"
                offset-y
                nudge-left="25"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="secondary"
                    dark
                    class="button-shadow mr-2 mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Popover on Bottom
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal greyBold--text mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu
                v-model="popovers.popoverFourth"
                :close-on-content-click="false"
                nudge-left="250"
                nudge-top="10"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="secondary"
                    dark
                    class="fs-basic button-shadow mb-3"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Popover on Left
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal greyBold--text mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Tooltips',
  data () {
    return {
      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ],
      popovers: [
        {popoverFirst: false},
        {popoverSecond: false},
        {popoverThird: false},
        {popoverFourth: false},
        {popoverFifth: false},
      ]
    }
  }
}
</script>
