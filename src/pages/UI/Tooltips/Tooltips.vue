<template>
  <v-container fluid class="tooltips-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Tooltip Example</p>
            <v-spacer></v-spacer>
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  icon
                  v-bind="props">
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
            <p class="fs-normal text-greyBold mb-5">Tooltips can wrap any element.</p>
            <div class="text-center d-flex align-center justify-space-between">
              <v-tooltip location="bottom">
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="primary"
                    class="button-shadow"
                    width="30%"
                    v-bind="props"
                  >Button</v-btn>
                </template>
                <span>Button Tooltip</span>
              </v-tooltip>
              <v-tooltip location="bottom">
                <template #activator="{ props }">
                  <v-icon theme="dark" size="large"
                    color="primary"
                    v-bind="props"
                  >mdi-home</v-icon>
                </template>
                <span>Icon Tooltip</span>
              </v-tooltip>
              <v-tooltip location="bottom">
                <template #activator="{ props }">
                  <span class="fs-normal text-greyBold align-center mr-4" v-bind="props">This text has a tooltip</span>
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
              <template #activator="{ props }">
                <v-btn
                  icon
                  v-bind="props">
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
            <p class="fs-normal text-greyBold mb-5">The v-tooltip component is useful for conveying information when a user hovers over an element.</p>
            <v-menu
                v-model="popovers.popoverFirst"
                :close-on-content-click="false"
                offset="35">
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="secondary"
                    class="button-shadow"
                    v-bind="props"
                  >
                    Menu as Popover
                  </v-btn>
                </template>
                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal text-greyBold mb-5">The content of the Popover.</span>
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
              <template #activator="{ props }">
                <v-btn
                  icon
                  v-bind="props"
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
            <p class="fs-normal text-greyBold mb-5">A tooltip can be aligned to any of the four sides of the activator element</p>
            <v-col cols="12" class="pa-0">
              <v-tooltip location="start">
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="primary"
                    class="button-shadow mr-3 mb-3"
                    v-bind="props"
                  >Tooltip on Left</v-btn>
                </template>
                <span>Left tooltip</span>
              </v-tooltip>

              <v-tooltip location="top">
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="primary"
                    class="button-shadow mr-3 mb-3"
                    v-bind="props"
                  >Tooltip on  Top</v-btn>
                </template>
                <span>Top tooltip</span>
              </v-tooltip>

              <v-tooltip location="bottom">
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="primary"
                    class="button-shadow mr-3 mb-3"
                    v-bind="props"
                  >Tooltip on Bottom</v-btn>
                </template>
                <span>Bottom tooltip</span>
              </v-tooltip>

              <v-tooltip location="end">
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="primary"
                    class="button-shadow mb-3"
                    v-bind="props"
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
              <template #activator="{ props }">
                <v-btn
                    icon
                    v-bind="props"
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
            <p class="fs-normal text-greyBold mb-5">Tooltip visibility can be programmatically changed using v-model.</p>
            <v-col cols="12" class="pa-0">

              <v-menu
                v-model="popovers.popoverSecond"
                :close-on-content-click="false"
                :offset="[35, 90]"
              >
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="secondary"
                    class="button-shadow mr-2 mb-3"
                    v-bind="props"
                  >
                    Popover on Top
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal text-greyBold mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu
                v-model="popovers.popoverFifth"
                :close-on-content-click="false"
                :offset="[185, 10]"
              >
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="secondary"
                    class="button-shadow mr-2 mb-3"
                    v-bind="props"
                  >
                    Popover on Right
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal text-greyBold mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu
                v-model="popovers.popoverThird"
                :close-on-content-click="false"
                offset="25"
              >
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="secondary"
                    class="button-shadow mr-2 mb-3"
                    v-bind="props"
                  >
                    Popover on Bottom
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal text-greyBold mb-5">The content of the Popover.</span>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu
                v-model="popovers.popoverFourth"
                :close-on-content-click="false"
                :offset="[250, 10]"
              >
                <template #activator="{ props }">
                  <v-btn theme="dark"
                    color="secondary"
                    class="fs-basic button-shadow mb-3"
                    v-bind="props"
                  >
                    Popover on Left
                  </v-btn>
                </template>

                <v-card width="250">
                  <v-card-text>
                    <span class="fs-normal text-greyBold mb-5">The content of the Popover.</span>
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
