<template>
  <v-container fluid class="badge-page mt-3">
    <v-row>
      <v-col lg=6 cols=12>
        <v-card class="overflow-hidden mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Badge Example</p>
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
          <v-card-text class="overflow-x-auto pa-5 pt-0">
            <p class="fs-normal greyBold--text mb-10">Badge generates a small badge to the top-right of its child(ren)</p>
            <template v-for="badge in badgeExample" >
              <v-badge
                :color="badge.content.toLocaleLowerCase()"
                :content="badge.content"
                :key="badge.id"
                class="mb-2">
                <div v-html="badge.html"></div>
              </v-badge>
              <br :key="badge.content">
            </template>
            <p class="fs-normal greyBold--text my-4">Badges can be used as part of links or buttons to provide a counter.</p>
            <div class="w-100 d-flex justify-start">
              <v-badge
                color="success"
                :content="btnBudge"
                overlap
              >
                <v-btn
                  @click="btnBudge++"
                  color="default"
                  class="button-shadow"
                >
                  New Messages
                </v-btn>
              </v-badge>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=6 cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Icon Badges</p>
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
                  @click="() => {}">
                  <v-list-item-title >{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-text class="pa-5 pt-0">
            <p class="fs-normal greyBold--text">Badge can also be used as a parent of a icon</p>
            <div class="d-flex justify-center mb-10">
              <template v-for="icon in iconBadges" >
                <v-badge
                  overlap
                  :color="icon.color"
                  :content="icon.content"
                  :key="icon.id"
                  class="mr-4">
                  <v-icon color="greyBold" size="24"> {{ icon.name }} </v-icon>
                </v-badge>
              </template>
            </div>
            <template >
              <v-toolbar class="mb-10">
                <v-tabs
                  class="button-shadow"
                  grow
                >
                  <v-tab>
                    <v-badge
                      color="secondary"
                      content="6"
                    >
                    Item One
                    </v-badge>
                  </v-tab>

                  <v-tab>
                    Item Two
                  </v-tab>

                  <v-tab>
                    Item Three
                  </v-tab>
                </v-tabs>
              </v-toolbar>
            </template>
            <p class="fs-normal greyBold--text">You may to use dot badge via <code>dot</code> props</p>
            <div class="d-flex justify-center mb-10">
              <template v-for="icon in dotBadges" >
                <v-badge
                  dot
                  overlap
                  :color="icon.color"
                  :content="icon.content"
                  :key="icon.id"
                  class="mr-4"
                >
                  <v-icon color="greyBold" size="24"> {{ icon.name }} </v-icon>
                </v-badge>
              </template>
              <v-badge
                dot
              >
                <p class="mt-1 mb-0 fs-base"> Typography </p>
              </v-badge>
            </div>
            <p class="fs-normal greyBold--text">You can use the <code>bottom/top</code> and <code>left/right</code> properties to
              move the badge to any corner of the wrapped element.</p>
            <div class="d-flex justify-center mb-7">
              <template v-for="badge in positionBadges" >
                <v-badge
                  dot
                  overlap
                  :bottom="badge.position.bottom"
                  :left="badge.position.left"
                  :color="badge.color"
                  :content="badge.content"
                  :key="badge.id"
                  class="mr-4"
                >
                  <v-icon color="greyBold" size="24"> {{ badge.name }} </v-icon>
                </v-badge>
              </template>
              <v-badge
                dot
                left
              >
                <p class="mt-1 mb-0 fs-base"> Typography </p>
              </v-badge>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-5 pb-3">
            <p>Chips</p>
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
            <p class="fs-normal greyBold--text">Chips allow users to enter information, make selections, filter content, or trigger actions.</p>
            <div class="mb-2">
              <template v-for="chip in chips">
                <v-chip
                  :key="chip.id"
                  :color="chip.color"
                  class="ma-2"
                >
                  {{ chip.title }}
                </v-chip>
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
    name: 'Badges',
    data () {
      return {
        menu: [
          'Edit',
          'Copy',
          'Delete',
          'Print'
        ],
        btnBudge: 2,
        badgeExample: [
          {
            id: 1,
            content: 'Primary',
            html: '<h1 class="greyBold--text">Example heading</h1>'
          },
          {
            id: 2,
            content: 'Secondary',
            html: '<h2 class="greyBold--text">Example heading</h2>'
          },
          {
            id: 3,
            content: 'Warning',
            html: '<h3 class="greyBold--text">Example heading</h3>'
          },
          {
            id: 4,
            content: 'Info',
            html: '<h4 class="greyBold--text">Example heading</h4>'
          },
          {
            id: 5,
            content: 'Success',
            html: '<h5 class="greyBold--text">Example heading</h5>'
          },
        ],
        iconBadges: [
          {
            id: 1,
            content: 2,
            name: 'mdi-email',
            color: 'primary'
          },
          {
            id: 2,
            content: 11,
            name: 'mdi-email',
            color: 'secondary'
          },
          {
            id: 3,
            content: 4,
            name: 'mdi-email',
            color: 'warning'
          },
        ],
        dotBadges: [
          {
            id: 1,
            content: 2,
            name: 'mdi-cart',
            color: 'primary'
          },
          {
            id: 2,
            content: 5,
            name: 'mdi-email',
            color: 'secondary'
          },
        ],
        positionBadges: [
          {
            id: 1,
            content: 2,
            position: {
              left: false,
              bottom: false
            },
            name: 'mdi-cart',
            color: 'error'
          },
          {
            id: 2,
            content: 5,
            position: {
              left: false,
              bottom: true
            },
            name: 'mdi-email',
            color: 'primary'
          },
        ],
        chips: [
          {
            id: 1,
            title: 'Default',
            color: ''
          },
          {
            id: 2,
            title: 'Primary',
            color: 'primary'
          },
          {
            id: 3,
            title: 'Secondary',
            color: 'secondary'
          },
          {
            id: 4,
            title: 'Info',
            color: 'info'
          },
          {
            id: 5,
            title: 'Success',
            color: 'success'
          },
          {
            id: 6,
            title: 'Warning',
            color: 'warning'
          },
        ],
      }
    }
  }
</script>

<style src="./Badges.scss" lang="scss"/>
